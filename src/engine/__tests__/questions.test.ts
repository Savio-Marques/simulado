import { describe, expect, it } from 'vitest';
import { ALL_QUESTIONS, MODULE_META } from '../../data/questions';
import type { TrafficSignCode } from '../../types/exam';

const VALID_SIGN_CODES = new Set<TrafficSignCode>([
  'R-1',
  'R-2',
  'R-6a',
  'R-6c',
  'R-7',
  'R-15',
  'R-19',
  'R-25a',
  'R-27',
  'R-32',
  'A-18',
  'A-20a',
  'A-28',
  'A-30a',
  'A-32b',
  'A-33a',
]);

describe('Banco de questões CONTRAN 789/2020', () => {
  it('contém exatamente 132 questões distribuídas nos 4 módulos oficiais', () => {
    expect(ALL_QUESTIONS).toHaveLength(132);

    const counts = ALL_QUESTIONS.reduce<Record<string, number>>((acc, q) => {
      acc[q.module] = (acc[q.module] ?? 0) + 1;
      return acc;
    }, {});

    expect(counts.legislacao).toBe(40);
    expect(counts.direcao_defensiva).toBe(36);
    expect(counts.primeiros_socorros).toBe(32);
    expect(counts.relacionamento).toBe(24);
  });

  it('soma das cotas da prova real totaliza exatamente 30 questões', () => {
    const quotaSum = Object.values(MODULE_META).reduce(
      (sum, m) => sum + m.examQuota,
      0
    );
    expect(quotaSum).toBe(30);
  });

  it('possui IDs únicos, 4 alternativas distintas, gabarito válido e explicação em português', () => {
    const ids = new Set<string>();

    for (const q of ALL_QUESTIONS) {
      expect(ids.has(q.id)).toBe(false);
      ids.add(q.id);

      expect(q.statement.trim().length).toBeGreaterThan(15);
      expect(q.explanation.trim().length).toBeGreaterThan(15);
      expect(q.options).toHaveLength(4);
      expect([0, 1, 2, 3]).toContain(q.correctIndex);

      const normalizedOptions = q.options.map((opt) => opt.trim().toLowerCase());
      expect(new Set(normalizedOptions).size).toBe(4);

      for (const opt of q.options) {
        expect(opt.trim().length).toBeGreaterThan(0);
        expect(opt).not.toMatch(
          /todas as anteriores|nenhuma das anteriores|alternativas [a-d] e [a-d]/i
        );
      }

      if (q.signCode) {
        expect(VALID_SIGN_CODES.has(q.signCode)).toBe(true);
      }
    }
  });

  it('distribui as respostas corretas de forma equilibrada (25% em cada letra A, B, C, D) por módulo e no total', () => {
    const totalCounts = [0, 0, 0, 0];
    const byModule: Record<string, [number, number, number, number]> = {
      legislacao: [0, 0, 0, 0],
      direcao_defensiva: [0, 0, 0, 0],
      primeiros_socorros: [0, 0, 0, 0],
      relacionamento: [0, 0, 0, 0],
    };

    for (const q of ALL_QUESTIONS) {
      totalCounts[q.correctIndex] += 1;
      byModule[q.module][q.correctIndex] += 1;
    }

    expect(byModule.legislacao).toEqual([10, 10, 10, 10]);
    expect(byModule.direcao_defensiva).toEqual([9, 9, 9, 9]);
    expect(byModule.primeiros_socorros).toEqual([8, 8, 8, 8]);
    expect(byModule.relacionamento).toEqual([6, 6, 6, 6]);
    expect(totalCounts).toEqual([33, 33, 33, 33]);
  });
});
