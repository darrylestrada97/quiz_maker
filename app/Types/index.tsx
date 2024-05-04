//file with all the quizzer interfaces

interface Choice {
  id: number;
  option: string;
}

interface Statistics {
  totalAttempts: number;
  correctAttempts: number;
  incorrectAttempts: number;
}

export interface QuizQuestion {
  id: number;
  mainQuestion: string;
  choices: Choice[];
  correctAnswer: number;
  answeredResult: number;
  statistics: Statistics;
}

export interface Quiz {
  id: number;
  icon: any; // Replace with the actual type of `faCode`
  title: string;
  quizQuestions: QuizQuestion[];
}
