import { FeedbackType } from "@/types";

export const evaluateFirstPass = (
  guess: number[],
  secret: number[],
  feedback: FeedbackType[],
  used: boolean[]
): void => {
  guess.forEach((num, i) => {
    if (num === secret[i]) {
      feedback[i] = "correct";
      used[i] = true;
    }
  });
};

export const evaluateSecondPass = (
  guess: number[],
  secret: number[],
  feedback: FeedbackType[],
  used: boolean[]
): void => {
  guess.forEach((num, i) => {
    if (feedback[i] === "wrong") {
      for (let j = 0; j < secret.length; j++) {
        if (!used[j] && num === secret[j]) {
          feedback[i] = "misplaced";
          used[j] = true;
          break;
        }
      }
    }
  });
};

export const evaluateGuess = (guess: number[], secret: number[]): FeedbackType[] => {
  const feedback: FeedbackType[] = ["wrong", "wrong", "wrong"];
  const used = [false, false, false];

  evaluateFirstPass(guess, secret, feedback, used);
  evaluateSecondPass(guess, secret, feedback, used);

  return feedback;
};
