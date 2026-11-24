import type { FontScale } from '../types/exam';
import { formatCountdownClock } from '../engine/scoring';

interface TerminalHeaderProps {
  fontScale: FontScale;
  onChangeFontScale: (scale: FontScale) => void;
  candidateName?: string;
  questionProgress?: { current: number; total: number };
  remainingSeconds?: number | null;
  modeLabel?: string;
  onExitToHome?: () => void;
}

const FONT_OPTIONS: { value: FontScale; label: string; title: string }[] = [
  { value: 'normal', label: 'A-', title: 'Letra normal' },
  { value: 'large', label: 'A', title: 'Letra grande' },
  { value: 'xlarge', label: 'A+', title: 'Letra extra grande' },
];

export function TerminalHeader({
  fontScale,
  onChangeFontScale,
  candidateName,
  questionProgress,
  remainingSeconds,
  modeLabel,
  onExitToHome,
}: TerminalHeaderProps) {
  const isLowTime = remainingSeconds !== null && remainingSeconds !== undefined && remainingSeconds <= 600;
  const isCriticalTime =
    remainingSeconds !== null && remainingSeconds !== undefined && remainingSeconds <= 300;

  return (
    <header
      className="w-full border-b-2 border-[#073728] text-white"
      style={{ backgroundColor: 'var(--header-detran)' }}
    >
      <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          {onExitToHome ? (
            <button
              type="button"
              onClick={onExitToHome}
              className="rounded border border-[#4D8C76] bg-[#094230] px-3 py-1.5 text-terminal-small font-medium text-white hover:bg-[#0D5C43]"
            >
              Início
            </button>
          ) : null}
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-mono-terminal text-terminal-small font-bold tracking-wide text-white">
                DETRAN-CE · CABINE ELETRÔNICA
              </span>
              {modeLabel ? (
                <span className="text-terminal-small font-medium text-[#C7E8DC]">
                  · {modeLabel}
                </span>
              ) : null}
            </div>
            <p className="text-terminal-small text-[#C7E8DC]">
              Curso Especializado — Transporte Coletivo de Passageiros
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {candidateName ? (
            <div className="hidden rounded border border-[#2F755D] bg-[#083D2C] px-3 py-1 text-terminal-small text-[#E6F4EF] md:block">
              Candidato: <span className="font-semibold text-white">{candidateName}</span>
            </div>
          ) : null}

          {questionProgress ? (
            <div
              className="font-mono-terminal rounded border border-[#2F755D] bg-[#083D2C] px-3 py-1 text-terminal-small font-semibold text-white"
              aria-label={`Questão ${questionProgress.current} de ${questionProgress.total}`}
            >
              Questão {String(questionProgress.current).padStart(2, '0')} /{' '}
              {String(questionProgress.total).padStart(2, '0')}
            </div>
          ) : null}

          {remainingSeconds !== null && remainingSeconds !== undefined ? (
            <div
              className={`font-mono-terminal rounded border px-3 py-1 text-terminal-small font-bold ${
                isCriticalTime
                  ? 'border-[#FCA5A5] bg-[#991B1B] text-white'
                  : isLowTime
                    ? 'border-[#FCD34D] bg-[#92400E] text-white'
                    : 'border-[#2F755D] bg-[#083D2C] text-white'
              }`}
              aria-label={`Tempo restante: ${formatCountdownClock(remainingSeconds)}`}
            >
              TEMPO {formatCountdownClock(remainingSeconds)}
            </div>
          ) : null}

          <div
            className="flex items-center gap-1 rounded border border-[#2F755D] bg-[#083D2C] p-1"
            role="group"
            aria-label="Tamanho da letra"
          >
            <span className="hidden px-1.5 text-terminal-small text-[#C7E8DC] sm:inline">
              Letra:
            </span>
            {FONT_OPTIONS.map((opt) => {
              const active = fontScale === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  title={opt.title}
                  aria-label={opt.title}
                  aria-pressed={active}
                  onClick={() => onChangeFontScale(opt.value)}
                  className={`font-mono-terminal min-h-[38px] min-w-[40px] rounded px-2.5 py-1 text-terminal-small font-bold transition-colors ${
                    active
                      ? 'bg-white text-[#0B4F3A]'
                      : 'text-[#E6F4EF] hover:bg-[#0D5C43] hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
