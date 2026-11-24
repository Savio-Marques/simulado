export type ModuleId =
  | 'legislacao'
  | 'direcao_defensiva'
  | 'primeiros_socorros'
  | 'relacionamento';

export type TrafficSignCode =
  | 'R-1'
  | 'R-2'
  | 'R-6a'
  | 'R-6c'
  | 'R-7'
  | 'R-15'
  | 'R-19'
  | 'R-25a'
  | 'R-27'
  | 'R-32'
  | 'A-18'
  | 'A-20a'
  | 'A-28'
  | 'A-30a'
  | 'A-32b'
  | 'A-33a';

export interface Question {
  id: string;
  module: ModuleId;
  statement: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  signCode?: TrafficSignCode;
}

export type ExamMode = 'real' | 'study';

export type FontScale = 'normal' | 'large' | 'xlarge';

export type StudyFilter = 'all' | 'wrong' | ModuleId;

export interface ActiveSession {
  mode: ExamMode;
  questionIds: string[];
  answers: Record<string, number | null>;
  currentIndex: number;
  startedAtIso: string;
  remainingSeconds: number;
  elapsedSeconds: number;
  candidateName: string;
  studyFilter?: StudyFilter;
  studyRevealedIds: Record<string, boolean>;
}

export interface ModuleScore {
  total: number;
  correct: number;
}

export interface ExamAttempt {
  id: string;
  dateIso: string;
  mode: ExamMode;
  totalQuestions: number;
  correctCount: number;
  passed: boolean;
  durationSeconds: number;
  byModule: Record<ModuleId, ModuleScore>;
  wrongQuestionIds: string[];
  candidateName: string;
}

export interface UserPreferences {
  fontScale: FontScale;
  candidateName: string;
  tutorialCompleted: boolean;
}
