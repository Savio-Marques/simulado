import { beforeEach, describe, expect, it } from 'vitest';
import {
  clearActiveSession,
  loadActiveSession,
  loadPreferences,
  loadWrongIds,
  saveActiveSession,
  savePreferences,
  updateWrongIds,
} from '../storage';

function createMemoryStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() {
      return map.size;
    },
    clear() {
      map.clear();
    },
    getItem(key: string) {
      return map.get(key) ?? null;
    },
    key(index: number) {
      return Array.from(map.keys())[index] ?? null;
    },
    removeItem(key: string) {
      map.delete(key);
    },
    setItem(key: string, value: string) {
      map.set(key, value);
    },
  };
}

describe('storage', () => {
  beforeEach(() => {
    const mockStorage = createMemoryStorage();
    Object.defineProperty(globalThis, 'window', {
      value: { localStorage: mockStorage },
      configurable: true,
    });
  });

  it('salva e carrega preferências de letra e nome do candidato', () => {
    savePreferences({
      fontScale: 'xlarge',
      candidateName: 'Antônio',
      tutorialCompleted: true,
    });
    const loaded = loadPreferences();
    expect(loaded).toEqual({
      fontScale: 'xlarge',
      candidateName: 'Antônio',
      tutorialCompleted: true,
    });
  });

  it('adiciona erros e remove da lista quando respondidos corretamente', () => {
    updateWrongIds(['LEG-001', 'DEF-002'], []);
    expect(new Set(loadWrongIds())).toEqual(new Set(['LEG-001', 'DEF-002']));

    updateWrongIds(['SOC-003'], ['LEG-001']);
    expect(new Set(loadWrongIds())).toEqual(new Set(['DEF-002', 'SOC-003']));
  });

  it('persiste e limpa rascunho de prova em andamento', () => {
    saveActiveSession({
      mode: 'real',
      questionIds: ['LEG-001', 'LEG-002'],
      answers: { 'LEG-001': 2 },
      currentIndex: 1,
      startedAtIso: '2026-01-01T10:00:00.000Z',
      remainingSeconds: 3500,
      elapsedSeconds: 100,
      candidateName: 'José',
      studyRevealedIds: {},
    });

    const loaded = loadActiveSession();
    expect(loaded?.currentIndex).toBe(1);
    expect(loaded?.answers['LEG-001']).toBe(2);

    clearActiveSession();
    expect(loadActiveSession()).toBeNull();
  });
});
