import { MODULE_META, MODULE_ORDER } from '../data/questions';
import { buildWhatsAppShareUrl, formatDurationLabel } from '../engine/scoring';
import type { ExamAttempt, ModuleId } from '../types/exam';

interface HistoryScreenProps {
  history: ExamAttempt[];
  wrongIdsCount: number;
  onStartRealExam: () => void;
  onRetryWrongQuestions: () => void;
  onBack: () => void;
}

function formatDatePtBr(iso: string): string {
  try {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function HistoryScreen({
  history,
  wrongIdsCount,
  onStartRealExam,
  onRetryWrongQuestions,
  onBack,
}: HistoryScreenProps) {
  const realAttempts = history.filter((item) => item.mode === 'real');
  const passedCount = realAttempts.filter((item) => item.passed).length;
  const lastAttempt = history[0] ?? null;

  const aggregatedByModule: Record<ModuleId, { total: number; correct: number }> = {
    legislacao: { total: 0, correct: 0 },
    direcao_defensiva: { total: 0, correct: 0 },
    primeiros_socorros: { total: 0, correct: 0 },
    relacionamento: { total: 0, correct: 0 },
  };

  for (const attempt of history) {
    for (const moduleId of MODULE_ORDER) {
      const m = attempt.byModule[moduleId];
      if (m) {
        aggregatedByModule[moduleId].total += m.total;
        aggregatedByModule[moduleId].correct += m.correct;
      }
    }
  }

  return (
    <main className="mx-auto w-full max-w-[1000px] px-4 py-6 sm:px-6">
      <section className="rounded border-2 border-[#94A3B8] bg-white p-5 sm:p-8">
        <div className="border-b border-[#CBD5E1] pb-4">
          <p className="font-mono-terminal text-terminal-small font-semibold text-[#0B4F3A]">
            BOLETIM DO CANDIDATO · SALVO NESTE APARELHO
          </p>
          <h1 className="mt-1 text-terminal-display font-bold text-[#111827]">
            Seu Histórico de Treinos
          </h1>
        </div>

        {history.length === 0 ? (
          <div className="mt-6 rounded border border-[#CBD5E1] bg-[#F8FAFC] p-6">
            <p className="text-terminal-body font-bold text-[#111827]">
              Você ainda não concluiu nenhuma prova ou estudo neste aparelho.
            </p>
            <p className="mt-2 text-terminal-body text-[#374151]">
              Assim que finalizar sua primeira prova, sua nota e o desempenho em cada matéria
              aparecerão aqui automaticamente.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onStartRealExam}
                className="keypad-btn min-h-[56px] rounded border-2 border-[#14532D] bg-[#15803D] px-6 py-3 text-terminal-body font-bold text-white hover:bg-[#166534]"
              >
                INICIAR PRIMEIRA PROVA REAL
              </button>
              <button
                type="button"
                onClick={onBack}
                className="min-h-[56px] rounded border-2 border-[#94A3B8] bg-white px-5 py-3 text-terminal-small font-bold text-[#374151] hover:bg-[#F3F6F9]"
              >
                ← Voltar ao início
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-5 grid grid-cols-1 gap-3 rounded border border-[#CBD5E1] bg-[#F3F6F9] p-4 sm:grid-cols-3">
              <div>
                <div className="text-terminal-small text-[#374151]">Provas Reais feitas</div>
                <div className="font-mono-terminal text-terminal-display font-bold text-[#111827]">
                  {realAttempts.length}
                </div>
              </div>
              <div>
                <div className="text-terminal-small text-[#374151]">Aprovações (≥ 21/30)</div>
                <div className="font-mono-terminal text-terminal-display font-bold text-[#14532D]">
                  {passedCount}
                </div>
              </div>
              <div>
                <div className="text-terminal-small text-[#374151]">
                  Questões erradas para revisar
                </div>
                <div className="font-mono-terminal text-terminal-display font-bold text-[#111827]">
                  {wrongIdsCount}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {lastAttempt ? (
                <a
                  href={buildWhatsAppShareUrl(lastAttempt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="keypad-btn inline-flex min-h-[54px] items-center justify-center rounded border-2 border-[#14532D] bg-[#15803D] px-5 py-3 text-terminal-small font-bold text-white hover:bg-[#166534]"
                >
                  ENVIAR ÚLTIMO RESULTADO NO WHATSAPP
                </a>
              ) : null}

              {wrongIdsCount > 0 ? (
                <button
                  type="button"
                  onClick={onRetryWrongQuestions}
                  className="keypad-btn min-h-[54px] rounded border-2 border-[#1E3A5F] bg-[#1E3A5F] px-5 py-3 text-terminal-small font-bold text-white hover:bg-[#162C48]"
                >
                  REFAZER QUESTÕES QUE ERREI ({wrongIdsCount})
                </button>
              ) : null}
            </div>

            <div className="mt-7">
              <h2 className="mb-3 text-terminal-body font-bold text-[#111827]">
                Média geral por matéria
              </h2>
              <div className="overflow-x-auto rounded border border-[#CBD5E1]">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#CBD5E1] bg-[#F3F6F9] text-terminal-small font-bold text-[#374151]">
                      <th className="px-4 py-3">Matéria</th>
                      <th className="px-4 py-3 text-right">Acertos acumulados</th>
                      <th className="px-4 py-3 text-right">Aproveitamento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#CBD5E1] text-terminal-body">
                    {MODULE_ORDER.map((moduleId) => {
                      const row = aggregatedByModule[moduleId];
                      const pct =
                        row.total > 0 ? Math.round((row.correct / row.total) * 100) : 0;
                      return (
                        <tr key={moduleId} className="bg-white">
                          <td className="px-4 py-3 font-medium text-[#111827]">
                            {MODULE_META[moduleId].name}
                          </td>
                          <td className="font-mono-terminal px-4 py-3 text-right font-bold text-[#111827]">
                            {row.correct} / {row.total}
                          </td>
                          <td
                            className={`font-mono-terminal px-4 py-3 text-right font-bold ${
                              row.total === 0
                                ? 'text-[#374151]'
                                : pct >= 70
                                  ? 'text-[#14532D]'
                                  : 'text-[#991B1B]'
                            }`}
                          >
                            {row.total > 0 ? `${pct}%` : '—'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="mb-3 text-terminal-body font-bold text-[#111827]">
                Últimos treinos realizados
              </h2>
              <div className="overflow-x-auto rounded border border-[#CBD5E1]">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#CBD5E1] bg-[#F3F6F9] text-terminal-small font-bold text-[#374151]">
                      <th className="px-4 py-3">Data</th>
                      <th className="px-4 py-3">Tipo</th>
                      <th className="px-4 py-3 text-right">Nota</th>
                      <th className="px-4 py-3 text-right">Tempo</th>
                      <th className="px-4 py-3 text-right">Situação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#CBD5E1] text-terminal-small">
                    {history.map((item) => {
                      const pct =
                        item.totalQuestions > 0
                          ? Math.round((item.correctCount / item.totalQuestions) * 100)
                          : 0;
                      return (
                        <tr key={item.id} className="bg-white">
                          <td className="font-mono-terminal px-4 py-3 text-[#374151]">
                            {formatDatePtBr(item.dateIso)}
                          </td>
                          <td className="px-4 py-3 font-medium text-[#111827]">
                            {item.mode === 'real' ? 'Prova Real' : 'Modo Estudo'}
                          </td>
                          <td className="font-mono-terminal px-4 py-3 text-right font-bold text-[#111827]">
                            {item.correctCount}/{item.totalQuestions} ({pct}%)
                          </td>
                          <td className="font-mono-terminal px-4 py-3 text-right text-[#374151]">
                            {formatDurationLabel(item.durationSeconds)}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span
                              className={`inline-block rounded px-2.5 py-0.5 font-bold ${
                                item.passed
                                  ? 'bg-[#DCFCE7] text-[#14532D]'
                                  : 'bg-[#FEE2E2] text-[#991B1B]'
                              }`}
                            >
                              {item.passed ? 'Aprovado' : 'Em treino'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 border-t border-[#CBD5E1] pt-5">
              <button
                type="button"
                onClick={onBack}
                className="min-h-[54px] rounded border-2 border-[#94A3B8] bg-white px-5 py-3 text-terminal-small font-bold text-[#374151] hover:bg-[#F3F6F9]"
              >
                ← Voltar ao início
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
