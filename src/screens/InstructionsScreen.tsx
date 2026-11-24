import { useKeyboardKeypad } from '../hooks/useKeyboardKeypad';

interface InstructionsScreenProps {
  candidateName: string;
  onStartExam: () => void;
  onBack: () => void;
}

export function InstructionsScreen({
  candidateName,
  onStartExam,
  onBack,
}: InstructionsScreenProps) {
  useKeyboardKeypad({
    enabled: true,
    onConfirm: onStartExam,
  });

  return (
    <main className="mx-auto w-full max-w-[880px] px-4 py-6 sm:px-6">
      <section className="rounded border-2 border-[#94A3B8] bg-white p-5 sm:p-8">
        <div className="border-b border-[#CBD5E1] pb-4">
          <p className="font-mono-terminal text-terminal-small font-semibold text-[#0B4F3A]">
            ETAPA 2 DE 2 · INSTRUÇÕES OFICIAIS DA PROVA
          </p>
          <h1 className="mt-1 text-terminal-display font-bold text-[#111827]">
            Leia com atenção antes de começar
            {candidateName ? `, ${candidateName}` : ''}
          </h1>
        </div>

        <ul className="mt-6 space-y-4 text-terminal-body text-[#111827]">
          <li className="flex gap-3 rounded border border-[#CBD5E1] bg-[#F8FAFC] p-4">
            <span className="font-mono-terminal font-bold text-[#0B4F3A]">01.</span>
            <span>
              A prova tem <strong>30 questões</strong> com 4 alternativas (
              <strong>A, B, C, D</strong>), sendo apenas 1 correta em cada questão.
            </span>
          </li>
          <li className="flex gap-3 rounded border border-[#CBD5E1] bg-[#F8FAFC] p-4">
            <span className="font-mono-terminal font-bold text-[#0B4F3A]">02.</span>
            <span>
              Você terá <strong>60 minutos</strong> no relógio lá em cima. É bastante tempo —
              leia cada pergunta com calma.
            </span>
          </li>
          <li className="flex gap-3 rounded border border-[#CBD5E1] bg-[#F8FAFC] p-4">
            <span className="font-mono-terminal font-bold text-[#0B4F3A]">03.</span>
            <span>
              Para ser aprovado, é preciso acertar pelo menos{' '}
              <strong>21 questões (70%)</strong>.
            </span>
          </li>
          <li className="flex gap-3 rounded border border-[#CBD5E1] bg-[#F8FAFC] p-4">
            <span className="font-mono-terminal font-bold text-[#0B4F3A]">04.</span>
            <span>
              Use a <strong>Maquininha ao lado</strong> ou o teclado do computador (teclas{' '}
              <span className="font-mono-terminal font-bold">A, B, C, D</span> para marcar e
              as setas <span className="font-mono-terminal font-bold">← / →</span> para ir e
              voltar). Você pode mudar qualquer resposta antes de encerrar.
            </span>
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#CBD5E1] pt-6">
          <button
            type="button"
            onClick={onBack}
            className="min-h-[54px] rounded border-2 border-[#94A3B8] bg-white px-5 py-3 text-terminal-small font-bold text-[#374151] hover:bg-[#F3F6F9]"
          >
            ← Voltar ao início
          </button>
          <button
            type="button"
            onClick={onStartExam}
            className="keypad-btn min-h-[60px] rounded border-2 border-[#14532D] bg-[#15803D] px-7 py-3 text-terminal-body font-bold text-white hover:bg-[#166534]"
          >
            CONFIRMAR E INICIAR PROVA [Enter]
          </button>
        </div>
      </section>
    </main>
  );
}
