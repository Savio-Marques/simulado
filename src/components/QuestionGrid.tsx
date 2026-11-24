import type { Question } from '../types/exam';

interface QuestionGridProps {
  questions: Question[];
  answers: Record<string, number | null>;
  currentIndex: number;
  onJumpTo: (index: number) => void;
}

export function QuestionGrid({
  questions,
  answers,
  currentIndex,
  onJumpTo,
}: QuestionGridProps) {
  const answeredCount = questions.filter((q) => {
    const val = answers[q.id];
    return val !== null && val !== undefined;
  }).length;

  return (
    <section
      aria-label="Mapa das questões"
      className="rounded border-2 border-[#94A3B8] bg-[#F3F6F9] px-4 py-2.5"
    >
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="text-terminal-small font-semibold text-[#111827]">
          Mapa das questões ({answeredCount} de {questions.length} respondidas)
        </div>
        <div className="flex flex-wrap items-center gap-3 text-terminal-small text-[#374151]">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span
              className="inline-block h-4 w-4 rounded border-2 border-[#1D4ED8] bg-[#DBEAFE]"
              aria-hidden="true"
            />
            Atual
          </span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span
              className="inline-block h-4 w-4 rounded border border-[#14532D] bg-[#15803D]"
              aria-hidden="true"
            />
            Respondida
          </span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span
              className="inline-block h-4 w-4 rounded border border-[#94A3B8] bg-white"
              aria-hidden="true"
            />
            Em branco
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {questions.map((question, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered =
            answers[question.id] !== null && answers[question.id] !== undefined;
          const numLabel = String(idx + 1).padStart(2, '0');

          return (
            <button
              key={question.id}
              type="button"
              onClick={() => onJumpTo(idx)}
              aria-current={isCurrent ? 'step' : undefined}
              aria-label={`Questão ${idx + 1}: ${
                isCurrent ? 'atual' : isAnswered ? 'respondida' : 'em branco'
              }`}
              className={`font-mono-terminal min-h-[38px] min-w-[40px] rounded border-2 px-1.5 text-terminal-small font-bold transition-colors ${
                isCurrent
                  ? 'border-[#1D4ED8] bg-[#DBEAFE] text-[#1E3A8A]'
                  : isAnswered
                    ? 'border-[#14532D] bg-[#15803D] text-white hover:bg-[#166534]'
                    : 'border-[#94A3B8] bg-white text-[#111827] hover:bg-[#E2E8F0]'
              }`}
            >
              {numLabel}
            </button>
          );
        })}
      </div>
    </section>
  );
}
