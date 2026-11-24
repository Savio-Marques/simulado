import { useEffect, useRef, useState } from 'react';

export type KeypadKeyAction =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'PREV'
  | 'NEXT'
  | 'CLEAR'
  | 'FINISH'
  | 'CONFIRM'
  | 'CANCEL';

interface UseKeyboardKeypadOptions {
  enabled: boolean;
  modalOpen?: boolean;
  onSelectOption?: (index: 0 | 1 | 2 | 3) => void;
  onPrev?: () => void;
  onNext?: () => void;
  onClear?: () => void;
  onFinish?: () => void;
  onConfirm?: () => void;
  onCancelModal?: () => void;
}

function isTypingInField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
}

export function useKeyboardKeypad({
  enabled,
  modalOpen = false,
  onSelectOption,
  onPrev,
  onNext,
  onClear,
  onFinish,
  onConfirm,
  onCancelModal,
}: UseKeyboardKeypadOptions) {
  const [pressedKey, setPressedKey] = useState<KeypadKeyAction | null>(null);
  const timerRef = useRef<number | null>(null);

  const flashKey = (action: KeypadKeyAction) => {
    setPressedKey(action);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setPressedKey(null);
    }, 180);
  };

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (isTypingInField(event.target)) return;

      const key = event.key;
      const lower = key.toLowerCase();

      if (modalOpen) {
        if (key === 'Enter' || lower === 's') {
          event.preventDefault();
          flashKey('CONFIRM');
          onConfirm?.();
        } else if (key === 'Escape' || lower === 'n') {
          event.preventDefault();
          flashKey('CANCEL');
          onCancelModal?.();
        }
        return;
      }

      if (lower === 'a' || key === '1') {
        event.preventDefault();
        flashKey('A');
        onSelectOption?.(0);
      } else if (lower === 'b' || key === '2') {
        event.preventDefault();
        flashKey('B');
        onSelectOption?.(1);
      } else if (lower === 'c' || key === '3') {
        event.preventDefault();
        flashKey('C');
        onSelectOption?.(2);
      } else if (lower === 'd' || key === '4') {
        event.preventDefault();
        flashKey('D');
        onSelectOption?.(3);
      } else if (key === 'ArrowLeft') {
        event.preventDefault();
        flashKey('PREV');
        onPrev?.();
      } else if (key === 'ArrowRight') {
        event.preventDefault();
        flashKey('NEXT');
        onNext?.();
      } else if (key === 'Delete' || key === 'Backspace' || lower === 'l') {
        event.preventDefault();
        flashKey('CLEAR');
        onClear?.();
      } else if (key === 'F9' || key === 'Escape') {
        event.preventDefault();
        flashKey('FINISH');
        onFinish?.();
      } else if (key === 'Enter') {
        if (document.activeElement instanceof HTMLButtonElement) {
          return;
        }
        if (onConfirm) {
          event.preventDefault();
          flashKey('CONFIRM');
          onConfirm();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    enabled,
    modalOpen,
    onSelectOption,
    onPrev,
    onNext,
    onClear,
    onFinish,
    onConfirm,
    onCancelModal,
  ]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { pressedKey, flashKey };
}
