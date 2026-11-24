import { Volume2, Square } from 'lucide-react';
import type { KeypadKeyAction } from '../hooks/useKeyboardKeypad';
import type { ExamMode } from '../types/exam';

interface DetranKeypadProps {
  mode: ExamMode;
  selectedOption: number | null;
  pressedKey: KeypadKeyAction | null;
  canGoPrev: boolean;
  canGoNext: boolean;
  onSelectOption: (index: 0 | 1 | 2 | 3) => void;
  onPrev: () => void;
  onNext: () => void;
  onClear: () => void;
  onFinish: () => void;
  speechSupported?: boolean;
  isSpeaking?: boolean;
  onToggleSpeech?: () => void;
  highlightTarget?: KeypadKeyAction | null;
  finishLabel?: string;
}

const OPTION_KEYS: { index: 0 | 1 | 2 | 3; letter: 'A' | 'B' | 'C' | 'D' }[] = [
  { index: 0, letter: 'A' },
  { index: 1, letter: 'B' },
  { index: 2, letter: 'C' },
  { index: 3, letter: 'D' },
];

export function DetranKeypad({
  mode,
  selectedOption,
  pressedKey,
  canGoPrev,
  canGoNext,
  onSelectOption,
  onPrev,
  onNext,
  onClear,
  onFinish,
  speechSupported = false,
  isSpeaking = false,
  onToggleSpeech,
  highlightTarget = null,
  finishLabel,
}: DetranKeypadProps) {
  return (
    <aside
      aria-label="Teclado da cabine DETRAN-CE"
      className="rounded border-2 border-[#94A3B8] bg-[#F3F6F9] p-3.5"
    >
      <div className="mb-2.5 border-b border-[#CBD5E1] pb-2">
        <h2 className="font-mono-terminal text-terminal-small font-bold tracking-wide text-[#111827]">
          TECLADO DA CABINE (MAQUININHA)
        </h2>
        <p className="text-terminal-small text-[#374151]">
          Clique aqui ou aperte no teclado do computador
        </p>
      </div>

      <div className="mb-2.5">
        <div className="mb-1 text-terminal-small font-medium text-[#374151]">
          Escolher resposta:
        </div>
        <div className="grid grid-cols-4 gap-2 lg:grid-cols-2">
          {OPTION_KEYS.map(({ index, letter }) => {
            const isSelected = selectedOption === index;
            const isPressed = pressedKey === letter;
            const isTutorialTarget = highlightTarget === letter;

            return (
              <button
                key={letter}
                type="button"
                data-pressed={isPressed}
                onClick={() => onSelectOption(index)}
                aria-pressed={isSelected}
                className={`keypad-btn flex min-h-[54px] flex-col items-center justify-center rounded border-2 px-1.5 py-1.5 font-bold ${
                  isSelected
                    ? 'border-[#1E3A8A] bg-[#1D4ED8] text-white'
                    : isTutorialTarget
                      ? 'border-[#15803D] bg-[#DCFCE7] text-[#111827]'
                      : 'border-[#64748B] bg-white text-[#111827] hover:bg-[#EFF6FF]'
                }`}
              >
                <span className="font-mono-terminal text-terminal-display leading-none">
                  {letter}
                </span>
                <span
                  className={`font-mono-terminal mt-0.5 whitespace-nowrap text-[11px] font-medium sm:text-[12px] ${
                    isSelected ? 'text-[#DBEAFE]' : 'text-[#475569]'
                  }`}
                >
                  Tecla {letter}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          data-pressed={pressedKey === 'PREV'}
          disabled={!canGoPrev}
          onClick={onPrev}
          className={`keypad-btn flex min-h-[54px] flex-col items-center justify-center rounded border-2 px-2 py-2 font-semibold ${
            !canGoPrev
              ? 'cursor-not-allowed border-[#CBD5E1] bg-[#E2E8F0] text-[#64748B] shadow-none'
              : highlightTarget === 'PREV'
                ? 'border-[#15803D] bg-[#15803D] text-white'
                : 'border-[#162C48] bg-[#1E3A5F] text-white hover:bg-[#162C48]'
          }`}
        >
          <span className="text-terminal-small font-bold">← VOLTAR</span>
          <span className="font-mono-terminal text-[12px] opacity-90">[Seta ←]</span>
        </button>

        <button
          type="button"
          data-pressed={pressedKey === 'NEXT'}
          disabled={!canGoNext}
          onClick={onNext}
          className={`keypad-btn flex min-h-[54px] flex-col items-center justify-center rounded border-2 px-2 py-2 font-semibold ${
            !canGoNext
              ? 'cursor-not-allowed border-[#CBD5E1] bg-[#E2E8F0] text-[#64748B] shadow-none'
              : highlightTarget === 'NEXT'
                ? 'border-[#15803D] bg-[#15803D] text-white'
                : 'border-[#162C48] bg-[#1E3A5F] text-white hover:bg-[#162C48]'
          }`}
        >
          <span className="text-terminal-small font-bold">AVANÇAR →</span>
          <span className="font-mono-terminal text-[12px] opacity-90">[Seta →]</span>
        </button>
      </div>

      <div className="space-y-2">
        <button
          type="button"
          data-pressed={pressedKey === 'CLEAR'}
          onClick={onClear}
          className={`keypad-btn flex min-h-[52px] w-full items-center justify-between rounded border-2 px-3 py-2 font-bold ${
            highlightTarget === 'CLEAR'
              ? 'border-[#15803D] bg-[#15803D] text-white'
              : 'border-[#92400E] bg-[#FEF3C7] text-[#78350F] hover:bg-[#FDE68A]'
          }`}
        >
          <span className="text-terminal-small">LIMPAR RESPOSTA</span>
          <span className="font-mono-terminal text-[12px]">[Tecla L]</span>
        </button>

        {mode === 'study' && speechSupported && onToggleSpeech ? (
          <button
            type="button"
            onClick={onToggleSpeech}
            className="keypad-btn flex min-h-[52px] w-full items-center justify-center gap-2 rounded border-2 border-[#1D4ED8] bg-[#EFF6FF] px-3 py-2 text-terminal-small font-bold text-[#1E3A8A] hover:bg-[#DBEAFE]"
          >
            {isSpeaking ? (
              <>
                <Square className="h-5 w-5" aria-hidden="true" />
                PARAR LEITURA
              </>
            ) : (
              <>
                <Volume2 className="h-5 w-5" aria-hidden="true" />
                OUVIR QUESTÃO
              </>
            )}
          </button>
        ) : null}

        <button
          type="button"
          data-pressed={pressedKey === 'FINISH'}
          onClick={onFinish}
          className="keypad-btn flex min-h-[54px] w-full items-center justify-between rounded border-2 border-[#B91C1C] bg-white px-3 py-2 font-bold text-[#991B1B] hover:bg-[#FEF2F2]"
        >
          <span className="text-terminal-small">
            {finishLabel ?? (mode === 'real' ? 'ENCERRAR PROVA' : 'ENCERRAR ESTUDO')}
          </span>
          <span className="font-mono-terminal text-[12px]">[F9 ou Esc]</span>
        </button>
      </div>
    </aside>
  );
}
