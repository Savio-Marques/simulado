import { MODULE_META, MODULE_ORDER } from '../data/questions';
import type { ModuleId, Question, StudyFilter } from '../types/exam';

function shuffleArray<T>(items: T[], rng: () => number = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Picks `count` questions from a module pool, prioritizing:
 * 1) Unseen or previously wrong questions
 * 2) Previously seen questions not marked wrong
 */
function pickModuleQuestions(
  pool: Question[],
  count: number,
  seenSet: Set<string>,
  wrongSet: Set<string>,
  rng: () => number
): Question[] {
  const priorityPool = shuffleArray(
    pool.filter((q) => !seenSet.has(q.id) || wrongSet.has(q.id)),
    rng
  );
  const restPool = shuffleArray(
    pool.filter((q) => seenSet.has(q.id) && !wrongSet.has(q.id)),
    rng
  );

  return [...priorityPool, ...restPool].slice(0, count);
}

/**
 * Generates an official 30-question exam distributed according to CONTRAN 789/2020:
 * 10 Legislação + 9 Direção Defensiva + 6 Primeiros Socorros/Meio Ambiente + 5 Relacionamento.
 */
export function generateRealExam(
  allQuestions: Question[],
  seenIds: string[] = [],
  wrongIds: string[] = [],
  rng: () => number = Math.random
): Question[] {
  const seenSet = new Set(seenIds);
  const wrongSet = new Set(wrongIds);
  const selected: Question[] = [];

  for (const moduleId of MODULE_ORDER) {
    const modulePool = allQuestions.filter((q) => q.module === moduleId);
    const quota = MODULE_META[moduleId].examQuota;
    selected.push(...pickModuleQuestions(modulePool, quota, seenSet, wrongSet, rng));
  }

  return shuffleArray(selected, rng);
}

/**
 * Generates a study session filtered by all modules, a single module, or previously wrong questions.
 */
export function generateStudySession(
  allQuestions: Question[],
  filter: StudyFilter,
  wrongIds: string[] = [],
  rng: () => number = Math.random
): Question[] {
  if (filter === 'wrong') {
    const wrongSet = new Set(wrongIds);
    const filtered = allQuestions.filter((q) => wrongSet.has(q.id));
    return shuffleArray(filtered, rng);
  }

  if (filter === 'all') {
    return shuffleArray(allQuestions, rng);
  }

  const moduleId: ModuleId = filter;
  return shuffleArray(
    allQuestions.filter((q) => q.module === moduleId),
    rng
  );
}
