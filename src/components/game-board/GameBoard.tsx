import styles from "./gameBoard.module.scss";
import { Guess } from "@/types";
import { FeedbackIcons } from "../feedback-icons";

interface GameBoardProps {
  guesses: Guess[];
}

export const GameBoard = ({ guesses }: GameBoardProps) => {
  return (
    <div className={styles.board}>
      {guesses.map((guess, index) => (
        <div key={`guess-row-${index}`} className={styles.row}>
          <div className={styles.numbers}>{guess.numbers.join(", ")}</div>
          <FeedbackIcons feedback={guess.feedback} />
        </div>
      ))}
    </div>
  );
};
