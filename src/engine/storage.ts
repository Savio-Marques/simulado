import type { ActiveSession, ExamAttempt, UserPreferences } from '../types/exam';

const PREFIX = 'detran_ce_coletivo_v1_';

export const STORAGE_KEYS = {
  preferences: `${PREFIX}preferences`,
  history: `${PREFIX}history`,
  seenIds: `${PREFIX}seen_ids`,
  wrongIds: `${PREFIX}wrong_ids`,
  activeSession: `${PREFIX}active_session`,
} as const;

const DEFAULT_PREFERENCES: UserPreferences = {
  fontScale: 'large',
  candidateName: '',
  tutorialCompleted: false,
};

function getStorage(): Storage | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage;
    }
  } catch {
    return null;
  }
  return null;
}

function readJson<T>(key: string, fallback: T): T {
  const storage = getStorage();
  if (!storage) return fallback;
  try {
    const raw = storage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage quota errors cleanly
  }
}

export function loadPreferences(): UserPreferences {
  const stored = readJson<Partial<UserPreferences>>(STORAGE_KEYS.preferences, {});
  return {
    fontScale:
      stored.fontScale === 'normal' ||
      stored.fontScale === 'large' ||
      stored.fontScale === 'xlarge'
        ? stored.fontScale
        : DEFAULT_PREFERENCES.fontScale,
    candidateName: typeof stored.candidateName === 'string' ? stored.candidateName : '',
    tutorialCompleted: Boolean(stored.tutorialCompleted),
  };
}

export function savePreferences(prefs: UserPreferences): void {
  writeJson(STORAGE_KEYS.preferences, prefs);
}

export function loadHistory(): ExamAttempt[] {
  const list = readJson<ExamAttempt[]>(STORAGE_KEYS.history, []);
  return Array.isArray(list) ? list : [];
}

export function appendAttempt(attempt: ExamAttempt): ExamAttempt[] {
  const current = loadHistory();
  const updated = [attempt, ...current].slice(0, 50);
  writeJson(STORAGE_KEYS.history, updated);
  return updated;
}

export function loadSeenIds(): string[] {
  const list = readJson<string[]>(STORAGE_KEYS.seenIds, []);
  return Array.isArray(list) ? list : [];
}

export function recordSeenIds(ids: string[]): string[] {
  const merged = Array.from(new Set([...loadSeenIds(), ...ids]));
  writeJson(STORAGE_KEYS.seenIds, merged);
  return merged;
}

export function loadWrongIds(): string[] {
  const list = readJson<string[]>(STORAGE_KEYS.wrongIds, []);
  return Array.isArray(list) ? list : [];
}

export function updateWrongIds(
  newlyWrongIds: string[],
  newlyCorrectIds: string[]
): string[] {
  const wrongSet = new Set(loadWrongIds());
  for (const id of newlyCorrectIds) {
    wrongSet.delete(id);
  }
  for (const id of newlyWrongIds) {
    wrongSet.add(id);
  }
  const updated = Array.from(wrongSet);
  writeJson(STORAGE_KEYS.wrongIds, updated);
  return updated;
}

export function loadActiveSession(): ActiveSession | null {
  const session = readJson<ActiveSession | null>(STORAGE_KEYS.activeSession, null);
  if (
    !session ||
    !Array.isArray(session.questionIds) ||
    session.questionIds.length === 0 ||
    typeof session.currentIndex !== 'number'
  ) {
    return null;
  }
  return session;
}

export function saveActiveSession(session: ActiveSession): void {
  writeJson(STORAGE_KEYS.activeSession, session);
}

export function clearActiveSession(): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.removeItem(STORAGE_KEYS.activeSession);
  } catch {
    // Ignore storage removal errors
  }
}
