export type FeedbackType = 'correct' | 'misplaced' | 'wrong';

export interface Guess {
  numbers: number[];
  feedback: FeedbackType[];
}

export interface GameState {
  secret: number[];
  guesses: Guess[];
  attemptsLeft: number;
  isGameOver: boolean;
  win: boolean;
  coins: number;
}

export type GameAction =
  | { type: 'MAKE_GUESS'; payload: number[] }
  | { type: 'RESET_GAME' };
