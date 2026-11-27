import { MODULE_META, MODULE_ORDER } from '../data/questions';
import type { ModuleId, OptionOrder, Question, StudyFilter } from '../types/exam';

function shuffleArray<T>(items: T[], rng: () => number = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const VALID_INDICES: readonly [0, 1, 2, 3] = [0, 1, 2, 3];

function isValidOptionOrder(order: unknown): order is OptionOrder {
  if (!Array.isArray(order) || order.length !== 4) return false;
  const set = new Set(order);
  return VALID_INDICES.every((idx) => set.has(idx));
}

/**
 * Builds a balanced per-question option permutation map so each generated
 * exam/study session distributes correct answers evenly across A, B, C, and D.
 */
export function buildBalancedOptionOrders(
  questions: Question[],
  rng: () => number = Math.random
): Record<string, OptionOrder> {
  const targetSlots: (0 | 1 | 2 | 3)[] = [];
  const baseIndices = shuffleArray([0, 1, 2, 3] as (0 | 1 | 2 | 3)[], rng);

  for (let i = 0; i < questions.length; i++) {
    if (i % 4 === 0 && i > 0) {
      // Re-shuffle every block of 4 to avoid predictable cycles while staying balanced
      const nextBlock = shuffleArray([0, 1, 2, 3] as (0 | 1 | 2 | 3)[], rng);
      if (nextBlock[0] === targetSlots[targetSlots.length - 1]) {
        [nextBlock[0], nextBlock[1]] = [nextBlock[1], nextBlock[0]];
      }
      targetSlots.push(...nextBlock);
    } else if (i < 4) {
      targetSlots.push(baseIndices[i]);
    }
  }

  const result: Record<string, OptionOrder> = {};

  questions.forEach((question, idx) => {
    const targetSlot = targetSlots[idx];
    const distractors = shuffleArray(
      VALID_INDICES.filter((i) => i !== question.correctIndex),
      rng
    );
    const order: number[] = [0, 0, 0, 0];
    let dPtr = 0;
    for (let slot = 0; slot < 4; slot++) {
      if (slot === targetSlot) {
        order[slot] = question.correctIndex;
      } else {
        order[slot] = distractors[dPtr++];
      }
    }
    result[question.id] = order as OptionOrder;
  });

  return result;
}

/**
 * Applies a persisted OptionOrder permutation to a Question without mutating it.
 */
export function applyOptionOrder(
  question: Question,
  order?: OptionOrder
): Question {
  if (!isValidOptionOrder(order)) {
    return question;
  }

  const options: [string, string, string, string] = [
    question.options[order[0]],
    question.options[order[1]],
    question.options[order[2]],
    question.options[order[3]],
  ];
  const correctIndex = order.indexOf(question.correctIndex) as 0 | 1 | 2 | 3;

  return {
    ...question,
    options,
    correctIndex,
  };
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
