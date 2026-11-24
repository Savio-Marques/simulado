import { MODULE_META, MODULE_ORDER } from '../data/questions';
import type { ExamAttempt, ExamMode, ModuleId, ModuleScore, Question } from '../types/exam';

export const REAL_EXAM_TOTAL = 30;
export const REAL_EXAM_PASS_SCORE = 21;
export const REAL_EXAM_PASS_PERCENT = 70;
export const REAL_EXAM_DURATION_SECONDS = 3600;

export interface EvaluationResult {
  attempt: ExamAttempt;
  blankQuestionNumbers: number[];
  percentage: number;
  correctQuestionIds: string[];
}

export function createEmptyModuleBreakdown(): Record<ModuleId, ModuleScore> {
  return {
    legislacao: { total: 0, correct: 0 },
    direcao_defensiva: { total: 0, correct: 0 },
    primeiros_socorros: { total: 0, correct: 0 },
    relacionamento: { total: 0, correct: 0 },
  };
}

export function getBlankQuestionNumbers(
  questions: Question[],
  answers: Record<string, number | null>
): number[] {
  const blanks: number[] = [];
  questions.forEach((q, idx) => {
    const ans = answers[q.id];
    if (ans === null || ans === undefined) {
      blanks.push(idx + 1);
    }
  });
  return blanks;
}

export function evaluateSession(
  questions: Question[],
  answers: Record<string, number | null>,
  durationSeconds: number,
  mode: ExamMode,
  candidateName: string
): EvaluationResult {
  const byModule = createEmptyModuleBreakdown();
  const wrongQuestionIds: string[] = [];
  const correctQuestionIds: string[] = [];
  const blankQuestionNumbers: number[] = [];
  let correctCount = 0;

  questions.forEach((question, index) => {
    byModule[question.module].total += 1;
    const selected = answers[question.id];

    if (selected === null || selected === undefined) {
      blankQuestionNumbers.push(index + 1);
      wrongQuestionIds.push(question.id);
      return;
    }

    if (selected === question.correctIndex) {
      correctCount += 1;
      byModule[question.module].correct += 1;
      correctQuestionIds.push(question.id);
    } else {
      wrongQuestionIds.push(question.id);
    }
  });

  const totalQuestions = questions.length;
  const percentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const passed =
    mode === 'real' && totalQuestions === REAL_EXAM_TOTAL
      ? correctCount >= REAL_EXAM_PASS_SCORE
      : correctCount >= Math.ceil(totalQuestions * 0.7);

  const attempt: ExamAttempt = {
    id: `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    dateIso: new Date().toISOString(),
    mode,
    totalQuestions,
    correctCount,
    passed,
    durationSeconds: Math.max(0, Math.round(durationSeconds)),
    byModule,
    wrongQuestionIds,
    candidateName: candidateName.trim(),
  };

  return {
    attempt,
    blankQuestionNumbers,
    percentage,
    correctQuestionIds,
  };
}

export function formatDurationLabel(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${mins} min ${String(secs).padStart(2, '0')} s`;
}

export function formatCountdownClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function buildWhatsAppShareUrl(attempt: ExamAttempt): string {
  const pct =
    attempt.totalQuestions > 0
      ? Math.round((attempt.correctCount / attempt.totalQuestions) * 100)
      : 0;
  const statusText = attempt.passed ? 'APROVADO' : 'EM TREINO (abaixo de 70%)';
  const title =
    attempt.mode === 'real'
      ? 'Simulado Prova Real DETRAN-CE — Transporte Coletivo'
      : 'Modo Estudo DETRAN-CE — Transporte Coletivo';

  const lines: string[] = [
    `*${title}*`,
    ...(attempt.candidateName ? [`Candidato: ${attempt.candidateName}`] : []),
    `Resultado: *${statusText}*`,
    `Nota: *${attempt.correctCount} de ${attempt.totalQuestions} (${pct}%)*`,
    `Tempo: ${formatDurationLabel(attempt.durationSeconds)}`,
    '',
    'Desempenho por matéria:',
  ];

  for (const moduleId of MODULE_ORDER) {
    const score = attempt.byModule[moduleId];
    if (score && score.total > 0) {
      lines.push(`- ${MODULE_META[moduleId].shortName}: ${score.correct}/${score.total}`);
    }
  }

  return `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`;
}
