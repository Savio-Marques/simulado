import { ALL_QUESTIONS, MODULE_META, MODULE_ORDER } from '../data/questions';
import type { StudyFilter } from '../types/exam';

interface StudySetupScreenProps {
  wrongIdsCount: number;
  onStartStudy: (filter: StudyFilter) => void;
  onBack: () => void;
}

export function StudySetupScreen({
  wrongIdsCount,
  onStartStudy,
  onBack,
}: StudySetupScreenProps) {
  const countByModule = (moduleId: (typeof MODULE_ORDER)[number]) =>
    ALL_QUESTIONS.filter((q) => q.module === moduleId).length;

  return (
    <main className="mx-auto w-full max-w-[920px] px-4 py-6 sm:px-6">
      <section className="rounded border-2 border-[#94A3B8] bg-white p-5 sm:p-8">
        <div className="border-b border-[#CBD5E1] pb-4">
          <p className="font-mono-terminal text-terminal-small font-semibold text-[#0B4F3A]">
            MODO ESTUDO · SEM RELÓGIO E COM EXPLICAÇÃO NA HORA
          </p>
          <h1 className="mt-1 text-terminal-display font-bold text-[#111827]">
            Escolha o que deseja estudar hoje
          </h1>
          <p className="mt-1 text-terminal-body text-[#374151]">
            Aqui você não tem limite de tempo, vê a explicação logo após marcar e pode usar
            o botão <strong>Ouvir questão</strong>.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={() => onStartStudy('all')}
            className="keypad-btn flex min-h-[64px] w-full flex-col items-start justify-center rounded border-2 border-[#14532D] bg-[#15803D] px-5 py-3.5 text-left text-white hover:bg-[#166534]"
          >
            <span className="text-terminal-body font-bold">
              Estudar todas as matérias ({ALL_QUESTIONS.length} questões variadas)
            </span>
            <span className="text-terminal-small text-[#DCFCE7]">
              Mistura os 4 assuntos do curso, bom para revisão geral sem pressa.
            </span>
          </button>

          {wrongIdsCount > 0 ? (
            <button
              type="button"
              onClick={() => onStartStudy('wrong')}
              className="keypad-btn flex min-h-[64px] w-full flex-col items-start justify-center rounded border-2 border-[#92400E] bg-[#FFFBEB] px-5 py-3.5 text-left text-[#78350F] hover:bg-[#FEF3C7]"
            >
              <span className="text-terminal-body font-bold">
                Refazer questões que eu errei ({wrongIdsCount}{' '}
                {wrongIdsCount === 1 ? 'questão salva' : 'questões salvas'})
              </span>
              <span className="text-terminal-small">
                Quando você acertar a questão aqui, ela sai automaticamente desta lista.
              </span>
            </button>
          ) : (
            <div className="rounded border border-[#CBD5E1] bg-[#F8FAFC] p-4 text-terminal-small text-[#374151]">
              <strong>Questões erradas:</strong> nenhuma questão pendente para revisar no
              momento. Faça uma prova ou escolha uma matéria abaixo.
            </div>
          )}
        </div>

        <div className="mt-7 border-t border-[#CBD5E1] pt-6">
          <h2 className="mb-3 text-terminal-small font-bold uppercase tracking-wide text-[#374151]">
            Ou escolha uma matéria específica
          </h2>

          <div className="divide-y divide-[#CBD5E1] rounded border border-[#CBD5E1] bg-[#F8FAFC]">
            {MODULE_ORDER.map((moduleId) => {
              const meta = MODULE_META[moduleId];
              const count = countByModule(moduleId);
              return (
                <div
                  key={moduleId}
                  className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <div className="text-terminal-body font-bold text-[#111827]">
                      {meta.name}
                    </div>
                    <p className="text-terminal-small text-[#374151]">
                      {meta.description} ({count} questões)
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onStartStudy(moduleId)}
                    className="min-h-[52px] shrink-0 rounded border-2 border-[#1E3A5F] bg-white px-5 py-2.5 text-terminal-small font-bold text-[#1E3A5F] hover:bg-[#EFF6FF]"
                  >
                    ESTUDAR ({count})
                  </button>
                </div>
              );
            })}
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
      </section>
    </main>
  );
}
