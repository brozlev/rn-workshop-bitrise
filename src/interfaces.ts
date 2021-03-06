export interface IQuiz {
  category: string;
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IResponse {
  response_code: number;
  results: IQuiz[];
}
