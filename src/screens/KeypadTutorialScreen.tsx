import { useState } from 'react';
import { DetranKeypad } from '../components/DetranKeypad';
import { useKeyboardKeypad } from '../hooks/useKeyboardKeypad';

interface KeypadTutorialScreenProps {
  onComplete: (goToRealExam: boolean) => void;
  onBack: () => void;
}

const LETTERS = ['A', 'B', 'C', 'D'] as const;

export function KeypadTutorialScreen({
  onComplete,
  onBack,
}: KeypadTutorialScreenProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');

  const handleSelect = (index: 0 | 1 | 2 | 3) => {
    setSelectedOption(index);
    if (step === 1) {
      if (index === 1) {
        setFeedback('Muito bem! Você marcou a letra B.');
        setStep(2);
      } else {
        setFeedback(
          `Você marcou a letra ${LETTERS[index]}. Agora tente apertar a letra B (no teclado ou na Maquininha).`
        );
      }
    } else if (step === 3) {
      setFeedback('Ótimo! Agora aperte AVANÇAR → (seta → do teclado ou botão AVANÇAR).');
    }
  };

  const handleClear = () => {
    setSelectedOption(null);
    if (step === 2) {
      setFeedback('Certo! A resposta foi limpa.');
      setStep(3);
    }
  };

  const handleNext = () => {
    if (step === 3) {
      if (selectedOption === null) {
        setFeedback('Escolha primeiro qualquer letra (A, B, C ou D) e depois aperte AVANÇAR →.');
        return;
      }
      setFeedback('Excelente! Você concluiu o treino da Maquininha.');
      setStep(4);
    }
  };

  const { pressedKey } = useKeyboardKeypad({
    enabled: step < 4,
    onSelectOption: handleSelect,
    onClear: handleClear,
    onNext: handleNext,
  });

  const highlightTarget =
    step === 1 ? 'B' : step === 2 ? 'CLEAR' : step === 3 ? 'NEXT' : null;

  return (
    <main className="mx-auto w-full max-w-[1160px] px-4 py-6 sm:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <section className="rounded border-2 border-[#94A3B8] bg-white p-5 sm:p-7">
          <div className="border-b border-[#CBD5E1] pb-4">
            <p className="font-mono-terminal text-terminal-small font-semibold text-[#0B4F3A]">
              TREINO RÁPIDO DA MAQUININHA · PASSO {step} DE 4
            </p>
            <h1 className="mt-1 text-terminal-display font-bold text-[#111827]">
              Aprenda a usar o teclado da cabine
            </h1>
          </div>

          {step === 1 && (
            <div className="mt-5 space-y-4">
              <p className="text-terminal-body font-bold text-[#111827]">
                Passo 1: Como marcar uma resposta
              </p>
              <p className="max-w-[60ch] text-terminal-body text-[#374151]">
                Aperte a tecla <span className="font-mono-terminal font-bold">B</span> no
                teclado do seu computador — ou clique no botão{' '}
                <span className="font-mono-terminal font-bold">B</span> na Maquininha.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="mt-5 space-y-4">
              <p className="text-terminal-body font-bold text-[#111827]">
                Passo 2: Como apagar (limpar) se mudou de ideia
              </p>
              <p className="max-w-[60ch] text-terminal-body text-[#374151]">
                Agora aperte <span className="font-mono-terminal font-bold">LIMPAR RESPOSTA</span>{' '}
                (tecla <span className="font-mono-terminal font-bold">L</span> ou botão
                amarelo na Maquininha) para deixar a questão em branco novamente.
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="mt-5 space-y-4">
              <p className="text-terminal-body font-bold text-[#111827]">
                Passo 3: Marcar e passar para a próxima questão
              </p>
              <p className="max-w-[60ch] text-terminal-body text-[#374151]">
                Escolha qualquer letra (<strong>A, B, C ou D</strong>) e depois aperte{' '}
                <strong>AVANÇAR →</strong> (seta{' '}
                <span className="font-mono-terminal font-bold">→</span> no teclado ou botão
                azul-escuro na Maquininha).
              </p>
            </div>
          )}

          {step === 4 && (
            <div className="mt-5 space-y-5">
              <div className="rounded border-2 border-[#15803D] bg-[#F0FDF4] p-5">
                <p className="text-terminal-display font-bold text-[#14532D]">
                  Parabéns! Você já domina a Maquininha do DETRAN-CE.
                </p>
                <p className="mt-2 text-terminal-body text-[#14532D]">
                  Na hora da prova real, lembre que você pode voltar em qualquer pergunta e o
                  sistema sempre avisa se alguma questão ficou em branco antes de encerrar.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onComplete(true)}
                  className="keypad-btn min-h-[58px] rounded border-2 border-[#14532D] bg-[#15803D] px-6 py-3 text-terminal-body font-bold text-white hover:bg-[#166534]"
                >
                  IR PARA A PROVA REAL AGORA →
                </button>
                <button
                  type="button"
                  onClick={() => onComplete(false)}
                  className="min-h-[58px] rounded border-2 border-[#94A3B8] bg-white px-5 py-3 text-terminal-small font-bold text-[#111827] hover:bg-[#F3F6F9]"
                >
                  Voltar ao início
                </button>
              </div>
            </div>
          )}

          {step < 4 ? (
            <div className="mt-6 space-y-4">
              <div className="rounded border border-[#CBD5E1] bg-[#F8FAFC] p-4">
                <p className="text-terminal-small font-semibold text-[#374151]">
                  Questão de exemplo:
                </p>
                <p className="mt-1 text-terminal-body font-medium text-[#111827]">
                  Para conduzir transporte coletivo de passageiros, qual é a idade mínima do
                  condutor?
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {(['18 anos', '21 anos', '25 anos', '30 anos'] as const).map(
                    (text, idx) => {
                      const active = selectedOption === idx;
                      return (
                        <button
                          key={text}
                          type="button"
                          onClick={() => handleSelect(idx as 0 | 1 | 2 | 3)}
                          className={`flex min-h-[52px] items-center gap-3 rounded border-2 px-3 py-2 text-left text-terminal-body ${
                            active
                              ? 'border-[#1E3A8A] bg-[#DBEAFE] font-bold text-[#1E3A8A]'
                              : 'border-[#CBD5E1] bg-white text-[#111827] hover:bg-[#F1F5F9]'
                          }`}
                        >
                          <span className="font-mono-terminal font-bold">
                            {LETTERS[idx]}
                          </span>
                          <span>{text}</span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {feedback ? (
                <div
                  aria-live="polite"
                  className="rounded border border-[#15803D] bg-[#F0FDF4] p-3 text-terminal-small font-semibold text-[#14532D]"
                >
                  {feedback}
                </div>
              ) : null}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onBack}
                  className="min-h-[48px] rounded border-2 border-[#94A3B8] bg-white px-4 py-2 text-terminal-small font-bold text-[#374151] hover:bg-[#F3F6F9]"
                >
                  ← Voltar ao início
                </button>
              </div>
            </div>
          ) : null}
        </section>

        <DetranKeypad
          mode="study"
          selectedOption={selectedOption}
          pressedKey={pressedKey}
          canGoPrev={false}
          canGoNext={step === 3}
          onSelectOption={handleSelect}
          onPrev={() => {}}
          onNext={handleNext}
          onClear={handleClear}
          onFinish={onBack}
          highlightTarget={highlightTarget}
          finishLabel="SAIR DO TREINO"
        />
      </div>
    </main>
  );
}
