import { GameState, GameAction, Guess } from "@/types";
import { evaluateGuess, generateSecret, getFromStorage, setInStorage, calculateCoins } from "../utils";

const COIN_KEY = "totalCoins";

// Initial game state
export const initialGameState = (): GameState => ({
  secret: generateSecret(),
  guesses: [],
  revealed: [null, null, null],
  attemptsLeft: 5,
  isGameOver: false,
  win: false,
  coins: getFromStorage<number>(COIN_KEY, 0),
});

// Reducer to handle game actions
export const gameReducer = (state: GameState, action: GameAction): GameState => {
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

      const isGameOver = win || attemptsLeft === 0;

      const correctGuessesSet = new Set<number>();

      updatedGuesses.forEach((guess) => {
        guess.feedback.forEach((f, i) => {
          if (f === "correct") {
            correctGuessesSet.add(guess.numbers[i]);
          }
        });
      });

      const coinsEarned = calculateCoins(correctGuessesSet, isGameOver);
      const newTotalCoins = state.coins + coinsEarned;
      setInStorage(COIN_KEY, newTotalCoins);

      return {
        ...state,
        guesses: updatedGuesses,
        revealed: updatedRevealed,
        attemptsLeft,
        isGameOver,
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
