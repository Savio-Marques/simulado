import type { ActiveSession, ExamAttempt } from '../types/exam';

interface HomeTerminalScreenProps {
  activeSession: ActiveSession | null;
  history: ExamAttempt[];
  wrongIdsCount: number;
  tutorialCompleted: boolean;
  onResumeSession: () => void;
  onDiscardSession: () => void;
  onStartRealExamFlow: () => void;
  onOpenStudySetup: () => void;
  onOpenTutorial: () => void;
  onOpenHistory: () => void;
}

export function HomeTerminalScreen({
  activeSession,
  history,
  wrongIdsCount,
  tutorialCompleted,
  onResumeSession,
  onDiscardSession,
  onStartRealExamFlow,
  onOpenStudySetup,
  onOpenTutorial,
  onOpenHistory,
}: HomeTerminalScreenProps) {
  const lastAttempt = history[0] ?? null;

  return (
    <main className="mx-auto w-full max-w-[960px] px-4 py-6 sm:px-6">
      {activeSession ? (
        <section
          aria-label="Prova em andamento"
          className="mb-6 rounded border-2 border-[#B45309] bg-[#FFFBEB] p-5"
        >
          <p className="text-terminal-body font-bold text-[#78350F]">
            Você tem uma atividade em andamento (Questão{' '}
            {String(activeSession.currentIndex + 1).padStart(2, '0')} de{' '}
            {String(activeSession.questionIds.length).padStart(2, '0')}).
          </p>
          <p className="mt-1 text-terminal-small text-[#78350F]">
            Se a página fechou sem querer, suas respostas já marcadas foram guardadas.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onResumeSession}
              className="keypad-btn min-h-[54px] rounded border-2 border-[#14532D] bg-[#15803D] px-5 py-3 text-terminal-body font-bold text-white hover:bg-[#166534]"
            >
              CONTINUAR DE ONDE PAREI
            </button>
            <button
              type="button"
              onClick={onDiscardSession}
              className="min-h-[54px] rounded border-2 border-[#94A3B8] bg-white px-4 py-3 text-terminal-small font-semibold text-[#374151] hover:bg-[#F3F6F9]"
            >
              Descartar e começar outra
            </button>
          </div>
        </section>
      ) : null}

      <section className="rounded border-2 border-[#94A3B8] bg-white p-5 sm:p-8">
        <div className="border-b border-[#CBD5E1] pb-5">
          <p className="font-mono-terminal text-terminal-small font-semibold text-[#0B4F3A]">
            TERMINAL DE TREINAMENTO · RESOLUÇÃO CONTRAN Nº 789/2020
          </p>
          <h1 className="mt-1 text-terminal-display font-bold text-[#111827]">
            Simulado Oficial — Transporte Coletivo de Passageiros
          </h1>
          <p className="mt-2 max-w-[65ch] text-terminal-body text-[#374151]">
            Treine exatamente como será na cabine do computador do DETRAN-CE, usando os
            botões da tela ou o teclado do seu computador.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-2 rounded border border-[#CBD5E1] bg-[#F3F6F9] p-3.5 text-terminal-small text-[#111827] sm:grid-cols-3">
            <div>
              <span className="font-semibold">Questões:</span>{' '}
              <span className="font-mono-terminal font-bold">30</span> (A, B, C, D)
            </div>
            <div>
              <span className="font-semibold">Tempo da prova:</span>{' '}
              <span className="font-mono-terminal font-bold">60 minutos</span>
            </div>
            <div>
              <span className="font-semibold">Para aprovar:</span>{' '}
              <span className="font-mono-terminal font-bold">21 acertos (70%)</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={onStartRealExamFlow}
            className="keypad-btn flex min-h-[64px] w-full items-center justify-center rounded border-2 border-[#14532D] bg-[#15803D] px-6 py-4 text-center text-terminal-display font-bold text-white hover:bg-[#166534]"
          >
            INICIAR PROVA REAL DETRAN-CE
          </button>
          <p className="mt-2 text-center text-terminal-small text-[#374151]">
            Simula entrada com senha da ficha, instruções oficiais, relógio de 60 minutos e
            resultado imediato ao encerrar.
          </p>
        </div>

        <div className="mt-8 border-t border-[#CBD5E1] pt-6">
          <h2 className="mb-3 text-terminal-small font-bold uppercase tracking-wide text-[#374151]">
            Outras opções de treino
          </h2>

          <div className="divide-y divide-[#CBD5E1] rounded border border-[#CBD5E1] bg-[#F8FAFC]">
            <div className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-terminal-body font-bold text-[#111827]">
                  Modo Estudo (sem relógio)
                </div>
                <p className="text-terminal-small text-[#374151]">
                  Treine por matéria ou refaça questões que errou, com explicação na hora e
                  opção de ouvir a questão.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenStudySetup}
                className="min-h-[52px] shrink-0 rounded border-2 border-[#1E3A5F] bg-white px-5 py-2.5 text-terminal-small font-bold text-[#1E3A5F] hover:bg-[#EFF6FF]"
              >
                MODO ESTUDO
              </button>
            </div>

            <div className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-terminal-body font-bold text-[#111827]">
                    Treinar a Maquininha (1 minuto)
                  </span>
                  {!tutorialCompleted ? (
                    <span className="rounded border border-[#15803D] bg-[#DCFCE7] px-2 py-0.5 text-[13px] font-bold text-[#14532D]">
                      Recomendado na 1ª vez
                    </span>
                  ) : null}
                </div>
                <p className="text-terminal-small text-[#374151]">
                  Aprenda em 4 passos rápidos como marcar, limpar e avançar as questões.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenTutorial}
                className="min-h-[52px] shrink-0 rounded border-2 border-[#64748B] bg-white px-5 py-2.5 text-terminal-small font-bold text-[#111827] hover:bg-[#E2E8F0]"
              >
                TREINAR TECLADO
              </button>
            </div>

            <div className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-terminal-body font-bold text-[#111827]">
                  Meu Histórico e Questões Erradas
                </div>
                <p className="text-terminal-small text-[#374151]">
                  {lastAttempt
                    ? `Último treino: ${lastAttempt.correctCount}/${lastAttempt.totalQuestions} (${
                        lastAttempt.passed ? 'Aprovado' : 'Em treino'
                      }) · ${wrongIdsCount} ${
                        wrongIdsCount === 1 ? 'questão para revisar' : 'questões para revisar'
                      }.`
                    : 'Veja suas notas anteriores, matérias que precisam de atenção e envie o resultado no WhatsApp.'}
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenHistory}
                className="min-h-[52px] shrink-0 rounded border-2 border-[#64748B] bg-white px-5 py-2.5 text-terminal-small font-bold text-[#111827] hover:bg-[#E2E8F0]"
              >
                VER HISTÓRICO
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
