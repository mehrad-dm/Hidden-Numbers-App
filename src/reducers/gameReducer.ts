import { GameState, GameAction, Guess } from "../types";
import {
  evaluateGuess,
  generateSecret,
  getFromStorage,
  setInStorage,
} from "../utils";

const COIN_KEY = "totalCoins";

export const initialGameState = (): GameState => ({
  secret: generateSecret(),
  guesses: [],
  revealed: [null, null, null],
  attemptsLeft: 5,
  isGameOver: false,
  win: false,
  coins: getFromStorage<number>(COIN_KEY, 0),
});

export const gameReducer = (
  state: GameState,
  action: GameAction,
): GameState => {
  switch (action.type) {
    case "MAKE_GUESS": {
      if (state.isGameOver) return state;

      const guess = action.payload;
      const feedback = evaluateGuess(guess, state.secret);

      const newGuess: Guess = { numbers: guess, feedback };
      const updatedGuesses = [...state.guesses, newGuess];

      const updatedRevealed = [...state.revealed];
      feedback.forEach((f, i) => {
        if (f === "correct") updatedRevealed[i] = guess[i];
      });

      const win = feedback.every((f) => f === "correct");
      const attemptsLeft = state.attemptsLeft - 1;

      let coinsEarned = 0;
      const correctCount = feedback.filter((f) => f === "correct").length;
      if (win) coinsEarned = 50;
      else if (correctCount === 2) coinsEarned = 20;

      const newTotalCoins = state.coins + coinsEarned;
      setInStorage(COIN_KEY, newTotalCoins);

      return {
        ...state,
        guesses: updatedGuesses,
        revealed: updatedRevealed,
        attemptsLeft,
        isGameOver: win || attemptsLeft === 0,
        win,
        coins: newTotalCoins,
      };
    }

    case "RESET_GAME":
      return initialGameState();

    default:
      return state;
  }
};
