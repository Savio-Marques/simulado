import { describe, expect, it } from 'vitest';
import { ALL_QUESTIONS } from '../../data/questions';
import { generateRealExam } from '../examGenerator';
import {
  buildWhatsAppShareUrl,
  evaluateSession,
  formatCountdownClock,
} from '../scoring';

describe('scoring', () => {
  it('reprova com 20 acertos e aprova com 21 acertos em prova de 30 questões', () => {
    const exam = generateRealExam(ALL_QUESTIONS);

    const answers20: Record<string, number | null> = {};
    exam.forEach((q, idx) => {
      if (idx < 20) {
        answers20[q.id] = q.correctIndex;
      } else {
        answers20[q.id] = ((q.correctIndex + 1) % 4) as 0 | 1 | 2 | 3;
      }
    });

    const eval20 = evaluateSession(exam, answers20, 1200, 'real', 'Seu José');
    expect(eval20.attempt.correctCount).toBe(20);
    expect(eval20.attempt.passed).toBe(false);
    expect(eval20.percentage).toBe(67);

    const answers21 = { ...answers20 };
    answers21[exam[20].id] = exam[20].correctIndex;

    const eval21 = evaluateSession(exam, answers21, 1200, 'real', 'Seu José');
    expect(eval21.attempt.correctCount).toBe(21);
    expect(eval21.attempt.passed).toBe(true);
    expect(eval21.percentage).toBe(70);
  });

  it('identifica questões em branco e contabiliza por matéria', () => {
    const exam = generateRealExam(ALL_QUESTIONS);
    const answers: Record<string, number | null> = {};
    // Leave question 1 and 15 blank; answer rest correctly
    exam.forEach((q, idx) => {
      if (idx === 0 || idx === 14) {
        answers[q.id] = null;
      } else {
        answers[q.id] = q.correctIndex;
      }
    });

    const result = evaluateSession(exam, answers, 900, 'real', '');
    expect(result.blankQuestionNumbers).toEqual([1, 15]);
    expect(result.attempt.correctCount).toBe(28);
    expect(result.attempt.wrongQuestionIds).toEqual([exam[0].id, exam[14].id]);
  });

  it('gera URL válida do WhatsApp com resumo legível', () => {
    const exam = generateRealExam(ALL_QUESTIONS);
    const answers: Record<string, number | null> = {};
    exam.forEach((q) => {
      answers[q.id] = q.correctIndex;
    });
    const { attempt } = evaluateSession(exam, answers, 1805, 'real', 'João');
    const url = buildWhatsAppShareUrl(attempt);

    expect(url.startsWith('https://wa.me/?text=')).toBe(true);
    const decoded = decodeURIComponent(url.replace('https://wa.me/?text=', ''));
    expect(decoded).toContain('APROVADO');
    expect(decoded).toContain('30 de 30 (100%)');
    expect(decoded).toContain('João');
    expect(formatCountdownClock(3600)).toBe('60:00');
  });
});
