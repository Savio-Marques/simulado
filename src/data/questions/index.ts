import type { ModuleId, Question } from '../../types/exam';
import { LEGISLACAO_QUESTIONS } from './legislacao';
import { DIRECAO_DEFENSIVA_QUESTIONS } from './direcaoDefensiva';
import { PRIMEIROS_SOCORROS_QUESTIONS } from './primeirosSocorros';
import { RELACIONAMENTO_QUESTIONS } from './relacionamento';

export interface ModuleMetadata {
  id: ModuleId;
  name: string;
  shortName: string;
  examQuota: number;
  description: string;
}

export const MODULE_META: Record<ModuleId, ModuleMetadata> = {
  legislacao: {
    id: 'legislacao',
    name: 'Legislação de Trânsito',
    shortName: 'Legislação',
    examQuota: 10,
    description:
      'Regras do CTB, CONTRAN 789/2020, jornada do motorista, documentos e placas.',
  },
  direcao_defensiva: {
    id: 'direcao_defensiva',
    name: 'Direção Defensiva',
    shortName: 'Dir. Defensiva',
    examQuota: 9,
    description:
      'Veículos pesados, pontos cegos, raio de giro, freio motor, chuva e prevenção.',
  },
  primeiros_socorros: {
    id: 'primeiros_socorros',
    name: 'Primeiros Socorros, Meio Ambiente e Convívio Social',
    shortName: 'Socorros e Meio Amb.',
    examQuota: 6,
    description:
      'Sinalização de sinistros, resgate (192/193/191), evacuação, emissões e cidadania.',
  },
  relacionamento: {
    id: 'relacionamento',
    name: 'Relacionamento Interpessoal',
    shortName: 'Relacionamento',
    examQuota: 5,
    description:
      'Atendimento aos passageiros, prioridades legais, acessibilidade e calma no conflito.',
  },
};

export const MODULE_ORDER: ModuleId[] = [
  'legislacao',
  'direcao_defensiva',
  'primeiros_socorros',
  'relacionamento',
];

export const ALL_QUESTIONS: Question[] = [
  ...LEGISLACAO_QUESTIONS,
  ...DIRECAO_DEFENSIVA_QUESTIONS,
  ...PRIMEIROS_SOCORROS_QUESTIONS,
  ...RELACIONAMENTO_QUESTIONS,
];

export const QUESTIONS_BY_ID: Record<string, Question> = Object.fromEntries(
  ALL_QUESTIONS.map((q) => [q.id, q])
);
