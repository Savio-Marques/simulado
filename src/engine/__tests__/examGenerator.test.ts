import { describe, expect, it } from 'vitest';
import { ALL_QUESTIONS } from '../../data/questions';
import {
  applyOptionOrder,
  buildBalancedOptionOrders,
  generateRealExam,
  generateStudySession,
} from '../examGenerator';

describe('examGenerator', () => {
  it('gera prova real com exatamente 30 questões únicas na proporção 10/9/6/5', () => {
    const exam = generateRealExam(ALL_QUESTIONS);
    expect(exam).toHaveLength(30);

    const uniqueIds = new Set(exam.map((q) => q.id));
    expect(uniqueIds.size).toBe(30);

    const byModule = exam.reduce<Record<string, number>>((acc, q) => {
      acc[q.module] = (acc[q.module] ?? 0) + 1;
      return acc;
    }, {});

    expect(byModule.legislacao).toBe(10);
    expect(byModule.direcao_defensiva).toBe(9);
    expect(byModule.primeiros_socorros).toBe(6);
    expect(byModule.relacionamento).toBe(5);
  });

  it('prioriza questões ainda não vistas ou erradas anteriormente', () => {
    // Mark all legislacao except 10 specific ones as seen and not wrong
    const legQuestions = ALL_QUESTIONS.filter((q) => q.module === 'legislacao');
    const unseenLeg = legQuestions.slice(0, 10).map((q) => q.id);
    const seenLeg = legQuestions.slice(10).map((q) => q.id);

    const exam = generateRealExam(ALL_QUESTIONS, seenLeg, []);
    const pickedLegIds = new Set(
      exam.filter((q) => q.module === 'legislacao').map((q) => q.id)
    );

    for (const id of unseenLeg) {
      expect(pickedLegIds.has(id)).toBe(true);
    }
  });

  it('filtra corretamente sessões de modo estudo por matéria e questões erradas', () => {
    const onlyRel = generateStudySession(ALL_QUESTIONS, 'relacionamento');
    expect(onlyRel).toHaveLength(24);
    expect(onlyRel.every((q) => q.module === 'relacionamento')).toBe(true);

    const wrongSample = ['LEG-001', 'DEF-005', 'SOC-002'];
    const onlyWrong = generateStudySession(ALL_QUESTIONS, 'wrong', wrongSample);
    expect(onlyWrong).toHaveLength(3);
    expect(new Set(onlyWrong.map((q) => q.id))).toEqual(new Set(wrongSample));
  });

  it('embaralha alternativas de forma equilibrada preservando texto e gabarito correto', () => {
    const exam = generateRealExam(ALL_QUESTIONS);
    const orders = buildBalancedOptionOrders(exam);
    const counts = [0, 0, 0, 0];

    for (const original of exam) {
      const ordered = applyOptionOrder(original, orders[original.id]);
      expect(ordered.options).toHaveLength(4);
      expect(new Set(ordered.options)).toEqual(new Set(original.options));
      expect(ordered.options[ordered.correctIndex]).toBe(
        original.options[original.correctIndex]
      );
      counts[ordered.correctIndex] += 1;
    }

    // In 30 questions, every letter A-D must appear 7 or 8 times
    for (const count of counts) {
      expect(count).toBeGreaterThanOrEqual(7);
      expect(count).toBeLessThanOrEqual(8);
    }

    // Fallback when order is undefined returns question unchanged
    expect(applyOptionOrder(exam[0], undefined)).toBe(exam[0]);
  });
});
