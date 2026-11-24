import { useEffect, useState } from 'react';
import { DetranKeypad } from '../components/DetranKeypad';
import { QuestionGrid } from '../components/QuestionGrid';
import { TrafficSign } from '../components/TrafficSign';
import { MODULE_META } from '../data/questions';
import { getBlankQuestionNumbers } from '../engine/scoring';
import { useKeyboardKeypad } from '../hooks/useKeyboardKeypad';
import { useSpeech } from '../hooks/useSpeech';
import { ConfirmFinishModal } from './ConfirmFinishModal';
import type { ExamMode, Question } from '../types/exam';

interface ExamSessionScreenProps {
  mode: ExamMode;
  questions: Question[];
  answers: Record<string, number | null>;
  currentIndex: number;
  studyRevealedIds: Record<string, boolean>;
  onSelectAnswer: (questionId: string, optionIndex: 0 | 1 | 2 | 3) => void;
  onClearAnswer: (questionId: string) => void;
  onRevealStudyAnswer: (questionId: string) => void;
  onChangeIndex: (newIndex: number) => void;
  onFinishSession: () => void;
}

const LETTERS = ['A', 'B', 'C', 'D'] as const;

export function ExamSessionScreen({
  mode,
  questions,
  answers,
  currentIndex,
  studyRevealedIds,
  onSelectAnswer,
  onClearAnswer,
  onRevealStudyAnswer,
  onChangeIndex,
  onFinishSession,
}: ExamSessionScreenProps) {
  const [showFinishModal, setShowFinishModal] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedOption = currentQuestion ? (answers[currentQuestion.id] ?? null) : null;
  const isStudyRevealed =
    mode === 'study' &&
    currentQuestion &&
    (Boolean(studyRevealedIds[currentQuestion.id]) || selectedOption !== null);

  const { isSupported: speechSupported, isSpeaking, speakQuestion, stop } = useSpeech(
    mode === 'study'
  );

  useEffect(() => {
    stop();
  }, [currentIndex, stop]);

  const handleSelect = (idx: 0 | 1 | 2 | 3) => {
    if (!currentQuestion) return;
    onSelectAnswer(currentQuestion.id, idx);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onChangeIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      onChangeIndex(currentIndex + 1);
    }
  };

  const handleClear = () => {
    if (!currentQuestion) return;
    onClearAnswer(currentQuestion.id);
  };

  const handleConfirmFinish = () => {
    stop();
    setShowFinishModal(false);
    onFinishSession();
  };

  const { pressedKey } = useKeyboardKeypad({
    enabled: Boolean(currentQuestion),
    modalOpen: showFinishModal,
    onSelectOption: handleSelect,
    onPrev: handlePrev,
    onNext: handleNext,
    onClear: handleClear,
    onFinish: () => setShowFinishModal(true),
    onConfirm: handleConfirmFinish,
    onCancelModal: () => setShowFinishModal(false),
  });

  if (!currentQuestion) {
    return null;
  }

  const moduleInfo = MODULE_META[currentQuestion.module];
  const blankNumbers = getBlankQuestionNumbers(questions, answers);
  const answeredCount = questions.length - blankNumbers.length;

  return (
    <main className="mx-auto w-full max-w-[1360px] px-4 py-3 sm:px-6">
      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-[1fr_320px]">
        {/* Área da questão */}
        <section
          aria-label={`Questão ${currentIndex + 1} de ${questions.length}`}
          className="flex flex-col justify-between rounded border-2 border-[#94A3B8] bg-white p-4 sm:p-5"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#CBD5E1] pb-2.5">
              <span className="font-mono-terminal text-terminal-small font-bold text-[#0B4F3A]">
                QUESTÃO {String(currentIndex + 1).padStart(2, '0')} DE{' '}
                {String(questions.length).padStart(2, '0')}
              </span>
              <span className="text-terminal-small font-medium text-[#374151]">
                {moduleInfo.name}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
              {currentQuestion.signCode ? (
                <div className="shrink-0">
                  <TrafficSign code={currentQuestion.signCode} />
                </div>
              ) : null}

              <h1 className="max-w-[65ch] text-terminal-body font-semibold text-[#111827]">
                {currentQuestion.statement}
              </h1>
            </div>

            <div className="mt-4 space-y-2" role="radiogroup" aria-label="Alternativas">
              {currentQuestion.options.map((optionText, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctIndex;

                let containerStyle =
                  'border-[#94A3B8] bg-white text-[#111827] hover:bg-[#F3F6F9]';
                let badgeStyle = 'border-[#64748B] bg-[#F3F6F9] text-[#111827]';

                if (isStudyRevealed) {
                  if (isCorrect) {
                    containerStyle = 'border-[#15803D] bg-[#F0FDF4] text-[#14532D]';
                    badgeStyle = 'border-[#14532D] bg-[#15803D] text-white';
                  } else if (isSelected && !isCorrect) {
                    containerStyle = 'border-[#B91C1C] bg-[#FEF2F2] text-[#7F1D1D]';
                    badgeStyle = 'border-[#7F1D1D] bg-[#B91C1C] text-white';
                  }
                } else if (isSelected) {
                  containerStyle = 'border-[#1D4ED8] bg-[#EFF6FF] text-[#1E3A8A]';
                  badgeStyle = 'border-[#1E3A8A] bg-[#1D4ED8] text-white';
                }

                return (
                  <button
                    key={LETTERS[idx]}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelect(idx as 0 | 1 | 2 | 3)}
                    className={`flex min-h-[56px] w-full items-start gap-3.5 rounded border-2 p-3.5 text-left transition-colors ${containerStyle}`}
                  >
                    <span
                      className={`font-mono-terminal flex h-9 w-9 shrink-0 items-center justify-center rounded border-2 text-terminal-body font-bold ${badgeStyle}`}
                    >
                      {LETTERS[idx]}
                    </span>
                    <span className="pt-0.5 text-terminal-body font-medium">
                      {optionText}
                    </span>
                  </button>
                );
              })}
            </div>

            {mode === 'study' && !isStudyRevealed ? (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => onRevealStudyAnswer(currentQuestion.id)}
                  className="min-h-[48px] rounded border-2 border-[#64748B] bg-[#F3F6F9] px-4 py-2 text-terminal-small font-bold text-[#111827] hover:bg-[#E2E8F0]"
                >
                  Ver resposta e explicação sem marcar
                </button>
              </div>
            ) : null}

            {isStudyRevealed ? (
              <div
                aria-live="polite"
                className={`mt-5 rounded border-2 p-4 ${
                  selectedOption === currentQuestion.correctIndex
                    ? 'border-[#15803D] bg-[#F0FDF4] text-[#14532D]'
                    : selectedOption === null
                      ? 'border-[#1D4ED8] bg-[#EFF6FF] text-[#1E3A8A]'
                      : 'border-[#B91C1C] bg-[#FEF2F2] text-[#7F1D1D]'
                }`}
              >
                <p className="text-terminal-body font-bold">
                  {selectedOption === currentQuestion.correctIndex
                    ? 'Resposta certa!'
                    : selectedOption === null
                      ? `Resposta correta: letra ${LETTERS[currentQuestion.correctIndex]}.`
                      : `Atenção: a resposta correta é a letra ${
                          LETTERS[currentQuestion.correctIndex]
                        }.`}
                </p>
                <p className="mt-1.5 max-w-[65ch] text-terminal-body text-[#111827]">
                  {currentQuestion.explanation}
                </p>
              </div>
            ) : null}
          </div>
        </section>

        {/* Maquininha DETRAN-CE */}
        <DetranKeypad
          mode={mode}
          selectedOption={selectedOption}
          pressedKey={pressedKey}
          canGoPrev={currentIndex > 0}
          canGoNext={currentIndex < questions.length - 1}
          onSelectOption={handleSelect}
          onPrev={handlePrev}
          onNext={handleNext}
          onClear={handleClear}
          onFinish={() => setShowFinishModal(true)}
          speechSupported={speechSupported}
          isSpeaking={isSpeaking}
          onToggleSpeech={() => {
            if (isSpeaking) {
              stop();
            } else {
              speakQuestion(currentQuestion);
            }
          }}
        />
      </div>

      <div className="mt-4">
        <QuestionGrid
          questions={questions}
          answers={answers}
          currentIndex={currentIndex}
          onJumpTo={onChangeIndex}
        />
      </div>

      {showFinishModal ? (
        <ConfirmFinishModal
          mode={mode}
          totalQuestions={questions.length}
          answeredCount={answeredCount}
          blankQuestionNumbers={blankNumbers}
          onGoToQuestion={(idx) => {
            setShowFinishModal(false);
            onChangeIndex(idx);
          }}
          onConfirmFinish={handleConfirmFinish}
          onCancel={() => setShowFinishModal(false)}
        />
      ) : null}
    </main>
  );
}
