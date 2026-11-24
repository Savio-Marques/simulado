import { useState } from 'react';

interface CheckInScreenProps {
  initialCandidateName: string;
  expectedPin: string;
  onSuccess: (candidateName: string) => void;
  onBack: () => void;
}

const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function CheckInScreen({
  initialCandidateName,
  expectedPin,
  onSuccess,
  onBack,
}: CheckInScreenProps) {
  const [candidateName, setCandidateName] = useState(initialCandidateName);
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDigitPress = (digit: string) => {
    if (pin.length >= 4) return;
    setErrorMessage(null);
    setPin((prev) => `${prev}${digit}`);
  };

  const handleBackspace = () => {
    setErrorMessage(null);
    setPin((prev) => prev.slice(0, -1));
  };

  const handleSubmit = (event?: React.FormEvent) => {
    event?.preventDefault();
    if (pin.trim() !== expectedPin) {
      setErrorMessage(
        'SENHA INVÁLIDA — Confira os 4 números da ficha azul ao lado e tente novamente.'
      );
      setPin('');
      return;
    }
    onSuccess(candidateName.trim());
  };

  return (
    <main className="mx-auto w-full max-w-[920px] px-4 py-6 sm:px-6">
      <section className="rounded border-2 border-[#94A3B8] bg-white p-5 sm:p-8">
        <div className="border-b border-[#CBD5E1] pb-4">
          <p className="font-mono-terminal text-terminal-small font-semibold text-[#0B4F3A]">
            ETAPA 1 DE 2 · IDENTIFICAÇÃO NA CABINE
          </p>
          <h1 className="mt-1 text-terminal-display font-bold text-[#111827]">
            Acesso do Candidato
          </h1>
          <p className="mt-1 text-terminal-body text-[#374151]">
            No dia da prova no DETRAN-CE, o atendente entrega uma ficha com 4 números de
            senha. Digite a senha abaixo para liberar a prova.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Ficha simulada */}
          <div className="md:col-span-5">
            <div className="rounded border-2 border-[#1D4ED8] bg-[#EFF6FF] p-5">
              <div className="font-mono-terminal text-terminal-small font-bold text-[#1E3A8A]">
                FICHA DA CABINE (ATENDENTE)
              </div>
              <p className="mt-2 text-terminal-small text-[#1E3A8A]">
                Sua senha de liberação para este treino é:
              </p>
              <div
                className="font-mono-terminal mt-4 rounded border-2 border-[#1D4ED8] bg-white py-4 text-center text-[38px] font-bold tracking-[0.3em] text-[#111827]"
                aria-label={`Senha de liberação: ${expectedPin.split('').join(' ')}`}
              >
                {expectedPin}
              </div>
              <p className="mt-3 text-terminal-small text-[#1E3A8A]">
                Digite esses 4 números no campo ao lado (pelo teclado ou clicando nos números).
              </p>
            </div>
          </div>

          {/* Formulário + teclado numérico */}
          <form onSubmit={handleSubmit} className="space-y-5 md:col-span-7">
            <div>
              <label
                htmlFor="candidate-name-input"
                className="block text-terminal-small font-bold text-[#111827]"
              >
                Seu nome (opcional — aparece no resultado)
              </label>
              <input
                id="candidate-name-input"
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder="Ex: Seu José"
                maxLength={40}
                className="mt-1.5 min-h-[52px] w-full rounded border-2 border-[#94A3B8] bg-white px-4 py-2 text-terminal-body text-[#111827] focus:border-[#1D4ED8]"
              />
            </div>

            <div>
              <label
                htmlFor="cabin-pin-input"
                className="block text-terminal-small font-bold text-[#111827]"
              >
                Senha de acesso (4 números da ficha)
              </label>
              <input
                id="cabin-pin-input"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={pin}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, '').slice(0, 4);
                  setErrorMessage(null);
                  setPin(onlyDigits);
                }}
                placeholder="Digite os 4 números"
                className="font-mono-terminal mt-1.5 min-h-[56px] w-full rounded border-2 border-[#94A3B8] bg-white px-4 py-2 text-center text-terminal-display font-bold tracking-[0.35em] text-[#111827] placeholder:font-sans placeholder:text-terminal-body placeholder:font-normal placeholder:tracking-normal focus:border-[#1D4ED8]"
              />
            </div>

            {errorMessage ? (
              <div
                role="alert"
                className="rounded border-2 border-[#B91C1C] bg-[#FEF2F2] p-3.5 text-terminal-small font-bold text-[#991B1B]"
              >
                {errorMessage}
              </div>
            ) : null}

            {/* Teclado numérico na tela para quem prefere clicar */}
            <div className="rounded border border-[#CBD5E1] bg-[#F3F6F9] p-3">
              <div className="mb-2 text-terminal-small font-semibold text-[#374151]">
                Ou clique nos números abaixo:
              </div>
              <div className="grid grid-cols-5 gap-2">
                {DIGITS.map((digit) => (
                  <button
                    key={digit}
                    type="button"
                    onClick={() => handleDigitPress(digit)}
                    className="keypad-btn font-mono-terminal min-h-[52px] rounded border-2 border-[#64748B] bg-white text-terminal-body font-bold text-[#111827] hover:bg-[#EFF6FF]"
                  >
                    {digit}
                  </button>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleBackspace}
                  className="min-h-[48px] rounded border-2 border-[#94A3B8] bg-white px-3 text-terminal-small font-bold text-[#374151] hover:bg-[#E2E8F0]"
                >
                  Apagar número
                </button>
                <button
                  type="button"
                  onClick={() => setPin(expectedPin)}
                  className="min-h-[48px] rounded border-2 border-[#94A3B8] bg-white px-3 text-terminal-small font-semibold text-[#1E3A5F] hover:bg-[#EFF6FF]"
                >
                  Preencher automático
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={onBack}
                className="min-h-[54px] rounded border-2 border-[#94A3B8] bg-white px-5 py-3 text-terminal-small font-bold text-[#374151] hover:bg-[#F3F6F9]"
              >
                ← Voltar ao início
              </button>
              <button
                type="submit"
                className="keypad-btn min-h-[56px] rounded border-2 border-[#14532D] bg-[#15803D] px-6 py-3 text-terminal-body font-bold text-white hover:bg-[#166534]"
              >
                CONFIRMAR SENHA →
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
