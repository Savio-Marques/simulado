import { useCallback, useEffect, useState } from 'react';
import type { Question } from '../types/exam';

const LETTERS = ['A', 'B', 'C', 'D'] as const;

export function useSpeech(enabled: boolean) {
  const isSupported =
    enabled &&
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    typeof SpeechSynthesisUtterance !== 'undefined';

  const [isSpeaking, setIsSpeaking] = useState(false);

  const stop = useCallback(() => {
    if (!isSupported) return;
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignore browser speech cancellation issues
    }
    setIsSpeaking(false);
  }, [isSupported]);

  const speakQuestion = useCallback(
    (question: Question) => {
      if (!isSupported) return;
      stop();

      const parts = [
        question.statement,
        ...question.options.map((opt, idx) => `Alternativa ${LETTERS[idx]}: ${opt}`),
      ];
      const utterance = new SpeechSynthesisUtterance(parts.join('. '));
      utterance.lang = 'pt-BR';
      utterance.rate = 0.94;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      setIsSpeaking(true);
      try {
        window.speechSynthesis.speak(utterance);
      } catch {
        setIsSpeaking(false);
      }
    },
    [isSupported, stop]
  );

  useEffect(() => {
    return () => {
      if (isSupported) {
        try {
          window.speechSynthesis.cancel();
        } catch {
          // Ignore unmount cleanup error
        }
      }
    };
  }, [isSupported]);

  return { isSupported, isSpeaking, speakQuestion, stop };
}
