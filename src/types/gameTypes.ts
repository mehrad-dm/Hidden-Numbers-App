export type FeedbackType = "correct" | "misplaced" | "wrong";

export interface Guess {
  numbers: number[];
  feedback: FeedbackType[];
}

export interface GameState {
  attemptsLeft: number;
  coins: number;
  guesses: Guess[];
  isGameOver: boolean;
  revealed: (number | null)[];
  secret: number[];
  win: boolean;
}

export type GameAction =
  | { type: "MAKE_GUESS"; payload: number[] }
  | { type: "RESET_GAME" };
