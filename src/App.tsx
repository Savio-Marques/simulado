import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TerminalHeader } from './components/TerminalHeader';
import { ALL_QUESTIONS, QUESTIONS_BY_ID } from './data/questions';
import {
  applyOptionOrder,
  buildBalancedOptionOrders,
  generateRealExam,
  generateStudySession,
} from './engine/examGenerator';
import {
  REAL_EXAM_DURATION_SECONDS,
  evaluateSession,
} from './engine/scoring';
import {
  appendAttempt,
  clearActiveSession,
  loadActiveSession,
  loadHistory,
  loadPreferences,
  loadSeenIds,
  loadWrongIds,
  recordSeenIds,
  saveActiveSession,
  savePreferences,
  updateWrongIds,
} from './engine/storage';
import { CheckInScreen } from './screens/CheckInScreen';
import { ExamSessionScreen } from './screens/ExamSessionScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { HomeTerminalScreen } from './screens/HomeTerminalScreen';
import { InstructionsScreen } from './screens/InstructionsScreen';
import { KeypadTutorialScreen } from './screens/KeypadTutorialScreen';
import { ResultScreen } from './screens/ResultScreen';
import { StudySetupScreen } from './screens/StudySetupScreen';
import type {
  ActiveSession,
  ExamAttempt,
  FontScale,
  Question,
  StudyFilter,
  UserPreferences,
} from './types/exam';

type ViewState =
  | { screen: 'home' }
  | { screen: 'checkin'; expectedPin: string }
  | { screen: 'instructions'; candidateName: string }
  | { screen: 'exam' }
  | { screen: 'study_setup' }
  | { screen: 'tutorial' }
  | { screen: 'history' }
  | {
      screen: 'result';
      attempt: ExamAttempt;
      questions: Question[];
      answers: Record<string, number | null>;
      timeExpired: boolean;
    };

function generatePin(): string {
  return String(Math.floor(1000 + Math.random() * 9000));
}

export function App() {
  const [preferences, setPreferences] = useState<UserPreferences>(() => loadPreferences());
  const [history, setHistory] = useState<ExamAttempt[]>(() => loadHistory());
  const [seenIds, setSeenIds] = useState<string[]>(() => loadSeenIds());
  const [wrongIds, setWrongIds] = useState<string[]>(() => loadWrongIds());
  const [activeSession, setActiveSession] = useState<ActiveSession | null>(() =>
    loadActiveSession()
  );
  const [view, setView] = useState<ViewState>({ screen: 'home' });

  const sessionRef = useRef<ActiveSession | null>(activeSession);
  sessionRef.current = activeSession;

  const isCompletingRef = useRef(false);

  // Sync accessible font scale to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-font-scale', preferences.fontScale);
  }, [preferences.fontScale]);

  // Reset scroll position to top on every screen transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view.screen]);

  const handleChangeFontScale = (scale: FontScale) => {
    const updated = { ...preferences, fontScale: scale };
    setPreferences(updated);
    savePreferences(updated);
  };

  const sessionQuestions = useMemo(() => {
    if (!activeSession) return [];
    return activeSession.questionIds
      .map((id) => QUESTIONS_BY_ID[id])
      .filter((q): q is Question => Boolean(q))
      .map((q) => applyOptionOrder(q, activeSession.optionOrders?.[q.id]));
  }, [activeSession]);

  const finalizeSession = useCallback(
    (timeExpired: boolean) => {
      const current = sessionRef.current;
      if (!current || isCompletingRef.current) return;
      isCompletingRef.current = true;

      const questions = current.questionIds
        .map((id) => QUESTIONS_BY_ID[id])
        .filter((q): q is Question => Boolean(q))
        .map((q) => applyOptionOrder(q, current.optionOrders?.[q.id]));

      const evaluation = evaluateSession(
        questions,
        current.answers,
        current.elapsedSeconds,
        current.mode,
        current.candidateName
      );

      const updatedHistory = appendAttempt(evaluation.attempt);
      const updatedSeen = recordSeenIds(current.questionIds);
      const updatedWrong = updateWrongIds(
        evaluation.attempt.wrongQuestionIds,
        evaluation.correctQuestionIds
      );

      clearActiveSession();
      setActiveSession(null);
      setHistory(updatedHistory);
      setSeenIds(updatedSeen);
      setWrongIds(updatedWrong);

      setView({
        screen: 'result',
        attempt: evaluation.attempt,
        questions,
        answers: current.answers,
        timeExpired,
      });

      window.scrollTo({ top: 0, behavior: 'auto' });
      isCompletingRef.current = false;
    },
    []
  );

  // Tick timer every second while inside an active exam/study session
  useEffect(() => {
    if (view.screen !== 'exam' || !activeSession) return;

    const interval = window.setInterval(() => {
      setActiveSession((prev) => {
        if (!prev) return null;
        const nextElapsed = prev.elapsedSeconds + 1;
        const nextRemaining =
          prev.mode === 'real' ? Math.max(0, prev.remainingSeconds - 1) : prev.remainingSeconds;

        const nextSession: ActiveSession = {
          ...prev,
          elapsedSeconds: nextElapsed,
          remainingSeconds: nextRemaining,
        };
        saveActiveSession(nextSession);

        if (prev.mode === 'real' && nextRemaining === 0) {
          window.setTimeout(() => finalizeSession(true), 0);
        }
        return nextSession;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [view.screen, activeSession?.mode, finalizeSession]);

  const startRealExamSession = (candidateName: string) => {
    const picked = generateRealExam(ALL_QUESTIONS, seenIds, wrongIds);
    const newSession: ActiveSession = {
      mode: 'real',
      questionIds: picked.map((q) => q.id),
      optionOrders: buildBalancedOptionOrders(picked),
      answers: {},
      currentIndex: 0,
      startedAtIso: new Date().toISOString(),
      remainingSeconds: REAL_EXAM_DURATION_SECONDS,
      elapsedSeconds: 0,
      candidateName,
      studyRevealedIds: {},
    };
    isCompletingRef.current = false;
    saveActiveSession(newSession);
    setActiveSession(newSession);
    setView({ screen: 'exam' });
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const startStudySession = (filter: StudyFilter, customQuestionIds?: string[]) => {
    const picked =
      customQuestionIds && customQuestionIds.length > 0
        ? customQuestionIds
            .map((id) => QUESTIONS_BY_ID[id])
            .filter((q): q is Question => Boolean(q))
        : generateStudySession(ALL_QUESTIONS, filter, wrongIds);

    if (picked.length === 0) {
      setView({ screen: 'study_setup' });
      return;
    }

    const newSession: ActiveSession = {
      mode: 'study',
      questionIds: picked.map((q) => q.id),
      optionOrders: buildBalancedOptionOrders(picked),
      answers: {},
      currentIndex: 0,
      startedAtIso: new Date().toISOString(),
      remainingSeconds: 0,
      elapsedSeconds: 0,
      candidateName: preferences.candidateName,
      studyFilter: filter,
      studyRevealedIds: {},
    };
    isCompletingRef.current = false;
    saveActiveSession(newSession);
    setActiveSession(newSession);
    setView({ screen: 'exam' });
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const updateActiveSession = (updater: (prev: ActiveSession) => ActiveSession) => {
    setActiveSession((prev) => {
      if (!prev) return null;
      const updated = updater(prev);
      saveActiveSession(updated);
      return updated;
    });
  };

  const headerModeLabel =
    view.screen === 'exam' && activeSession
      ? activeSession.mode === 'real'
        ? 'PROVA REAL'
        : 'MODO ESTUDO'
      : view.screen === 'tutorial'
        ? 'TREINO DA MAQUININHA'
        : view.screen === 'history'
          ? 'HISTÓRICO'
          : undefined;

  return (
    <div className="min-h-screen flex flex-col">
      <TerminalHeader
        fontScale={preferences.fontScale}
        onChangeFontScale={handleChangeFontScale}
        candidateName={
          view.screen === 'exam' && activeSession
            ? activeSession.candidateName
            : preferences.candidateName
        }
        questionProgress={
          view.screen === 'exam' && activeSession
            ? {
                current: activeSession.currentIndex + 1,
                total: sessionQuestions.length,
              }
            : undefined
        }
        remainingSeconds={
          view.screen === 'exam' && activeSession?.mode === 'real'
            ? activeSession.remainingSeconds
            : null
        }
        modeLabel={headerModeLabel}
        onExitToHome={
          view.screen !== 'home' && view.screen !== 'exam'
            ? () => setView({ screen: 'home' })
            : undefined
        }
      />

      <div className="flex-1">
        {view.screen === 'home' && (
          <HomeTerminalScreen
            activeSession={activeSession}
            history={history}
            wrongIdsCount={wrongIds.length}
            tutorialCompleted={preferences.tutorialCompleted}
            onResumeSession={() => setView({ screen: 'exam' })}
            onDiscardSession={() => {
              clearActiveSession();
              setActiveSession(null);
            }}
            onStartRealExamFlow={() =>
              setView({ screen: 'checkin', expectedPin: generatePin() })
            }
            onOpenStudySetup={() => setView({ screen: 'study_setup' })}
            onOpenTutorial={() => setView({ screen: 'tutorial' })}
            onOpenHistory={() => setView({ screen: 'history' })}
          />
        )}

        {view.screen === 'checkin' && (
          <CheckInScreen
            initialCandidateName={preferences.candidateName}
            expectedPin={view.expectedPin}
            onSuccess={(name) => {
              const updatedPrefs = { ...preferences, candidateName: name };
              setPreferences(updatedPrefs);
              savePreferences(updatedPrefs);
              setView({ screen: 'instructions', candidateName: name });
            }}
            onBack={() => setView({ screen: 'home' })}
          />
        )}

        {view.screen === 'instructions' && (
          <InstructionsScreen
            candidateName={view.candidateName}
            onStartExam={() => startRealExamSession(view.candidateName)}
            onBack={() => setView({ screen: 'home' })}
          />
        )}

        {view.screen === 'exam' && activeSession && (
          <ExamSessionScreen
            mode={activeSession.mode}
            questions={sessionQuestions}
            answers={activeSession.answers}
            currentIndex={activeSession.currentIndex}
            studyRevealedIds={activeSession.studyRevealedIds}
            onSelectAnswer={(questionId, optionIndex) =>
              updateActiveSession((prev) => ({
                ...prev,
                answers: { ...prev.answers, [questionId]: optionIndex },
                studyRevealedIds:
                  prev.mode === 'study'
                    ? { ...prev.studyRevealedIds, [questionId]: true }
                    : prev.studyRevealedIds,
              }))
            }
            onClearAnswer={(questionId) =>
              updateActiveSession((prev) => ({
                ...prev,
                answers: { ...prev.answers, [questionId]: null },
              }))
            }
            onRevealStudyAnswer={(questionId) =>
              updateActiveSession((prev) => ({
                ...prev,
                studyRevealedIds: { ...prev.studyRevealedIds, [questionId]: true },
              }))
            }
            onChangeIndex={(newIndex) =>
              updateActiveSession((prev) => ({
                ...prev,
                currentIndex: Math.max(
                  0,
                  Math.min(prev.questionIds.length - 1, newIndex)
                ),
              }))
            }
            onFinishSession={() => finalizeSession(false)}
          />
        )}

        {view.screen === 'result' && (
          <ResultScreen
            attempt={view.attempt}
            questions={view.questions}
            answers={view.answers}
            timeExpired={view.timeExpired}
            onStartNewRealExam={() =>
              setView({ screen: 'checkin', expectedPin: generatePin() })
            }
            onRetryWrongQuestions={(ids) => startStudySession('wrong', ids)}
            onBackToHome={() => setView({ screen: 'home' })}
          />
        )}

        {view.screen === 'study_setup' && (
          <StudySetupScreen
            wrongIdsCount={wrongIds.length}
            onStartStudy={(filter) => startStudySession(filter)}
            onBack={() => setView({ screen: 'home' })}
          />
        )}

        {view.screen === 'tutorial' && (
          <KeypadTutorialScreen
            onComplete={(goToRealExam) => {
              const updatedPrefs = { ...preferences, tutorialCompleted: true };
              setPreferences(updatedPrefs);
              savePreferences(updatedPrefs);
              if (goToRealExam) {
                setView({ screen: 'checkin', expectedPin: generatePin() });
              } else {
                setView({ screen: 'home' });
              }
            }}
            onBack={() => setView({ screen: 'home' })}
          />
        )}

        {view.screen === 'history' && (
          <HistoryScreen
            history={history}
            wrongIdsCount={wrongIds.length}
            onStartRealExam={() =>
              setView({ screen: 'checkin', expectedPin: generatePin() })
            }
            onRetryWrongQuestions={() => startStudySession('wrong')}
            onBack={() => setView({ screen: 'home' })}
          />
        )}
      </div>
    </div>
  );
}

export default App;
