import { useState } from 'react';
import { TrafficSign } from '../components/TrafficSign';
import { MODULE_META, MODULE_ORDER } from '../data/questions';
import {
  REAL_EXAM_PASS_SCORE,
  REAL_EXAM_TOTAL,
  buildWhatsAppShareUrl,
  formatDurationLabel,
} from '../engine/scoring';
import type { ExamAttempt, Question } from '../types/exam';

interface ResultScreenProps {
  attempt: ExamAttempt;
  questions: Question[];
  answers: Record<string, number | null>;
  timeExpired?: boolean;
  onStartNewRealExam: () => void;
  onRetryWrongQuestions: (wrongIds: string[]) => void;
  onBackToHome: () => void;
}

type ReviewFilter = 'all' | 'wrong' | 'blank';
const LETTERS = ['A', 'B', 'C', 'D'] as const;

export function ResultScreen({
  attempt,
  questions,
  answers,
  timeExpired = false,
  onStartNewRealExam,
  onRetryWrongQuestions,
  onBackToHome,
}: ResultScreenProps) {
  const [filter, setFilter] = useState<ReviewFilter>('all');

  const percentage =
    attempt.totalQuestions > 0
      ? Math.round((attempt.correctCount / attempt.totalQuestions) * 100)
      : 0;

  const wrongOnlyQuestions = questions.filter((q) => {
    const ans = answers[q.id];
    return ans === null || ans === undefined || ans !== q.correctIndex;
  });

  const blankOnlyQuestions = questions.filter((q) => {
    const ans = answers[q.id];
    return ans === null || ans === undefined;
  });

  const visibleQuestions =
    filter === 'wrong'
      ? wrongOnlyQuestions
      : filter === 'blank'
        ? blankOnlyQuestions
        : questions;

  const whatsappUrl = buildWhatsAppShareUrl(attempt);

  return (
    <main className="mx-auto w-full max-w-[1040px] px-4 py-6 sm:px-6">
      {timeExpired ? (
        <div
          role="status"
          className="mb-4 rounded border-2 border-[#B45309] bg-[#FFFBEB] p-4 text-terminal-body font-bold text-[#78350F]"
        >
          Tempo de 60 minutos encerrado — sua prova foi corrigida automaticamente com as
          respostas já marcadas.
        </div>
      ) : null}

      {/* Painel de Resultado Oficial */}
      <section className="rounded border-2 border-[#94A3B8] bg-white p-5 sm:p-8">
        <div
          className={`rounded border-2 p-5 sm:p-6 ${
            attempt.passed
              ? 'border-[#15803D] bg-[#F0FDF4]'
              : 'border-[#B91C1C] bg-[#FEF2F2]'
          }`}
        >
          <p className="font-mono-terminal text-terminal-small font-bold text-[#374151]">
            RESULTADO DA PROVA ELETRÔNICA · DETRAN-CE
            {attempt.candidateName ? ` · ${attempt.candidateName.toUpperCase()}` : ''}
          </p>
          <h1
            className={`mt-1 text-terminal-display font-bold ${
              attempt.passed ? 'text-[#14532D]' : 'text-[#991B1B]'
            }`}
          >
            {attempt.passed
              ? 'APROVADO NO SIMULADO'
              : 'REPROVADO — CONTINUE TREINANDO'}
          </h1>
          <p className="mt-2 text-terminal-body text-[#111827]">
            {attempt.passed
              ? 'Parabéns! Você atingiu a pontuação necessária para aprovação no DETRAN-CE.'
              : 'Não desanime: cada simulado ajuda a fixar o conteúdo. Revise os erros abaixo e tente novamente.'}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#CBD5E1] pt-4 sm:grid-cols-3">
            <div>
              <div className="text-terminal-small text-[#374151]">Sua nota</div>
              <div className="font-mono-terminal text-terminal-display font-bold text-[#111827]">
                {attempt.correctCount} / {attempt.totalQuestions} ({percentage}%)
              </div>
            </div>
            <div>
              <div className="text-terminal-small text-[#374151]">Mínimo exigido</div>
              <div className="font-mono-terminal text-terminal-body font-bold text-[#111827]">
                {attempt.mode === 'real' && attempt.totalQuestions === REAL_EXAM_TOTAL
                  ? `${REAL_EXAM_PASS_SCORE} acertos (70%)`
                  : '70% de acertos'}
              </div>
            </div>
            <div>
              <div className="text-terminal-small text-[#374151]">Tempo utilizado</div>
              <div className="font-mono-terminal text-terminal-body font-bold text-[#111827]">
                {formatDurationLabel(attempt.durationSeconds)}
              </div>
            </div>
          </div>
        </div>

        {/* Tabela por matéria */}
        <div className="mt-6">
          <h2 className="mb-3 text-terminal-body font-bold text-[#111827]">
            Desempenho por matéria
          </h2>
          <div className="overflow-x-auto rounded border border-[#CBD5E1]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[#CBD5E1] bg-[#F3F6F9] text-terminal-small font-bold text-[#374151]">
                  <th className="px-4 py-3">Matéria</th>
                  <th className="px-4 py-3 text-right">Acertos</th>
                  <th className="px-4 py-3 text-right">Aproveitamento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBD5E1] text-terminal-body">
                {MODULE_ORDER.map((moduleId) => {
                  const score = attempt.byModule[moduleId];
                  if (!score || score.total === 0) return null;
                  const pct = Math.round((score.correct / score.total) * 100);
                  return (
                    <tr key={moduleId} className="bg-white">
                      <td className="px-4 py-3 font-medium text-[#111827]">
                        {MODULE_META[moduleId].name}
                      </td>
                      <td className="font-mono-terminal px-4 py-3 text-right font-bold text-[#111827]">
                        {score.correct} / {score.total}
                      </td>
                      <td
                        className={`font-mono-terminal px-4 py-3 text-right font-bold ${
                          pct >= 70 ? 'text-[#14532D]' : 'text-[#991B1B]'
                        }`}
                      >
                        {pct}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ações principais após resultado */}
        <div className="mt-6 flex flex-wrap gap-3 border-t border-[#CBD5E1] pt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="keypad-btn inline-flex min-h-[56px] items-center justify-center rounded border-2 border-[#14532D] bg-[#15803D] px-5 py-3 text-terminal-small font-bold text-white hover:bg-[#166534]"
          >
            ENVIAR RESULTADO PELO WHATSAPP
          </a>

          {attempt.wrongQuestionIds.length > 0 ? (
            <button
              type="button"
              onClick={() => onRetryWrongQuestions(attempt.wrongQuestionIds)}
              className="keypad-btn min-h-[56px] rounded border-2 border-[#1E3A5F] bg-[#1E3A5F] px-5 py-3 text-terminal-small font-bold text-white hover:bg-[#162C48]"
            >
              REFAZER QUESTÕES QUE ERREI ({attempt.wrongQuestionIds.length})
            </button>
          ) : null}

          <button
            type="button"
            onClick={onStartNewRealExam}
            className="min-h-[56px] rounded border-2 border-[#1D4ED8] bg-white px-5 py-3 text-terminal-small font-bold text-[#1E3A8A] hover:bg-[#EFF6FF]"
          >
            FAZER NOVA PROVA REAL
          </button>

          <button
            type="button"
            onClick={onBackToHome}
            className="min-h-[56px] rounded border-2 border-[#94A3B8] bg-white px-5 py-3 text-terminal-small font-bold text-[#374151] hover:bg-[#F3F6F9]"
          >
            VOLTAR AO INÍCIO
          </button>
        </div>
      </section>

      {/* Gabarito comentado */}
      <section className="mt-6 rounded border-2 border-[#94A3B8] bg-white p-5 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#CBD5E1] pb-4">
          <h2 className="text-terminal-display font-bold text-[#111827]">
            Gabarito Comentado
          </h2>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar questões">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`min-h-[44px] rounded border-2 px-3.5 py-1.5 text-terminal-small font-bold ${
                filter === 'all'
                  ? 'border-[#1E3A8A] bg-[#1D4ED8] text-white'
                  : 'border-[#94A3B8] bg-white text-[#111827] hover:bg-[#F3F6F9]'
              }`}
            >
              Todas ({questions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('wrong')}
              className={`min-h-[44px] rounded border-2 px-3.5 py-1.5 text-terminal-small font-bold ${
                filter === 'wrong'
                  ? 'border-[#1E3A8A] bg-[#1D4ED8] text-white'
                  : 'border-[#94A3B8] bg-white text-[#111827] hover:bg-[#F3F6F9]'
              }`}
            >
              Só as que errei ({wrongOnlyQuestions.length})
            </button>
            {blankOnlyQuestions.length > 0 ? (
              <button
                type="button"
                onClick={() => setFilter('blank')}
                className={`min-h-[44px] rounded border-2 px-3.5 py-1.5 text-terminal-small font-bold ${
                  filter === 'blank'
                    ? 'border-[#1E3A8A] bg-[#1D4ED8] text-white'
                    : 'border-[#94A3B8] bg-white text-[#111827] hover:bg-[#F3F6F9]'
                }`}
              >
                Em branco ({blankOnlyQuestions.length})
              </button>
            ) : null}
          </div>
        </div>

        {visibleQuestions.length === 0 ? (
          <p className="py-6 text-terminal-body text-[#374151]">
            Nenhuma questão neste filtro — você acertou todas!
          </p>
        ) : (
          <ol className="mt-5 space-y-5">
            {visibleQuestions.map((q) => {
              const originalNumber = questions.findIndex((item) => item.id === q.id) + 1;
              const userAns = answers[q.id];
              const isBlank = userAns === null || userAns === undefined;
              const isRight = userAns === q.correctIndex;

              return (
                <li
                  key={q.id}
                  className="rounded border-2 border-[#CBD5E1] bg-[#F8FAFC] p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono-terminal text-terminal-small font-bold text-[#111827]">
                      Questão {String(originalNumber).padStart(2, '0')} ·{' '}
                      {MODULE_META[q.module].shortName}
                    </span>
                    <span
                      className={`rounded px-2.5 py-0.5 text-terminal-small font-bold ${
                        isRight
                          ? 'bg-[#DCFCE7] text-[#14532D]'
                          : isBlank
                            ? 'bg-[#FEF3C7] text-[#78350F]'
                            : 'bg-[#FEE2E2] text-[#991B1B]'
                      }`}
                    >
                      {isRight
                        ? 'Você acertou'
                        : isBlank
                          ? 'Deixada em branco'
                          : 'Você errou'}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start">
                    {q.signCode ? (
                      <div className="shrink-0">
                        <TrafficSign code={q.signCode} />
                      </div>
                    ) : null}
                    <p className="max-w-[65ch] text-terminal-body font-semibold text-[#111827]">
                      {q.statement}
                    </p>
                  </div>

                  <div className="mt-4 space-y-1.5 text-terminal-small">
                    {!isBlank && !isRight ? (
                      <p className="rounded border border-[#FCA5A5] bg-[#FEF2F2] px-3 py-2 text-[#7F1D1D]">
                        <strong>Sua resposta ({LETTERS[userAns]}):</strong>{' '}
                        {q.options[userAns]}
                      </p>
                    ) : null}
                    <p className="rounded border border-[#86EFAC] bg-[#F0FDF4] px-3 py-2 text-[#14532D]">
                      <strong>Resposta correta ({LETTERS[q.correctIndex]}):</strong>{' '}
                      {q.options[q.correctIndex]}
                    </p>
                  </div>

                  <p className="mt-3 max-w-[65ch] text-terminal-small text-[#374151]">
                    <strong>Explicação:</strong> {q.explanation}
                  </p>
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </main>
  );
}
