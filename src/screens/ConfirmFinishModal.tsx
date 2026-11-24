import type { ExamMode } from '../types/exam';

interface ConfirmFinishModalProps {
  mode: ExamMode;
  totalQuestions: number;
  answeredCount: number;
  blankQuestionNumbers: number[];
  onGoToQuestion: (questionIndex: number) => void;
  onConfirmFinish: () => void;
  onCancel: () => void;
}

export function ConfirmFinishModal({
  mode,
  totalQuestions,
  answeredCount,
  blankQuestionNumbers,
  onGoToQuestion,
  onConfirmFinish,
  onCancel,
}: ConfirmFinishModalProps) {
  const hasBlanks = blankQuestionNumbers.length > 0;
  const firstBlankNumber = blankQuestionNumbers[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-finish-title"
    >
      <div className="max-h-[90vh] w-full max-w-[620px] overflow-y-auto rounded border-2 border-[#111827] bg-white p-6 shadow-xl">
        <p className="font-mono-terminal text-terminal-small font-bold text-[#374151]">
          CONFIRMAÇÃO DO SISTEMA · DETRAN-CE
        </p>
        <h2
          id="confirm-finish-title"
          className="mt-1 text-terminal-display font-bold text-[#111827]"
        >
          {mode === 'real'
            ? 'Deseja realmente encerrar a prova?'
            : 'Deseja encerrar o estudo agora?'}
        </h2>

        <p className="mt-3 text-terminal-body text-[#111827]">
          Você respondeu{' '}
          <strong className="font-mono-terminal">
            {answeredCount} de {totalQuestions}
          </strong>{' '}
          questões.
        </p>

        {hasBlanks ? (
          <div className="mt-4 rounded border-2 border-[#B45309] bg-[#FFFBEB] p-4">
            <p className="text-terminal-body font-bold text-[#78350F]">
              Atenção: você deixou {blankQuestionNumbers.length}{' '}
              {blankQuestionNumbers.length === 1
                ? 'questão em branco'
                : 'questões em branco'}
              :
            </p>
            <p className="font-mono-terminal mt-2 max-h-[120px] overflow-y-auto text-terminal-body font-bold text-[#111827]">
              {blankQuestionNumbers.map((n) => String(n).padStart(2, '0')).join(', ')}
            </p>
            {firstBlankNumber ? (
              <button
                type="button"
                onClick={() => onGoToQuestion(firstBlankNumber - 1)}
                className="mt-3 min-h-[48px] rounded border-2 border-[#92400E] bg-white px-4 py-2 text-terminal-small font-bold text-[#78350F] hover:bg-[#FEF3C7]"
              >
                IR PARA A QUESTÃO {String(firstBlankNumber).padStart(2, '0')} (EM BRANCO)
              </button>
            ) : null}
          </div>
        ) : (
          <div className="mt-4 rounded border border-[#15803D] bg-[#F0FDF4] p-4 text-terminal-body font-semibold text-[#14532D]">
            Todas as {totalQuestions} questões foram respondidas.
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={onCancel}
            className="keypad-btn min-h-[58px] rounded border-2 border-[#162C48] bg-[#1E3A5F] px-4 py-3 text-terminal-small font-bold text-white hover:bg-[#162C48]"
          >
            NÃO — VOLTAR À {mode === 'real' ? 'PROVA' : 'TELA'} [N]
          </button>
          <button
            type="button"
            onClick={onConfirmFinish}
            className="keypad-btn min-h-[58px] rounded border-2 border-[#7F1D1D] bg-[#B91C1C] px-4 py-3 text-terminal-small font-bold text-white hover:bg-[#991B1B]"
          >
            SIM — ENCERRAR E VER RESULTADO [S]
          </button>
        </div>
      </div>
    </div>
  );
}
