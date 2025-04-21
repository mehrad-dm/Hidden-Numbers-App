export type FeedbackType = 'correct' | 'misplaced' | 'wrong';

export const generateSecret = (): number[] => {
  const secret = Array.from({ length: 3 }, () => Math.floor(Math.random() * 21));

  if (import.meta.env.DEV) {
    console.log("[DEBUG] Generated secret numbers:", secret);
  }

  return secret;
};

export const evaluateGuess = (guess: number[], secret: number[]): FeedbackType[] => {
  const feedback: FeedbackType[] = ['wrong', 'wrong', 'wrong'];
  const used = [false, false, false];

  // First pass: check for correct numbers in the correct position
  guess.forEach((num, i) => {
    if (num === secret[i]) {
      feedback[i] = 'correct';
      used[i] = true;
    }
  });

  // Second pass: check for correct numbers in the wrong position
  guess.forEach((num, i) => {
    if (feedback[i] === 'wrong') {
      for (let j = 0; j < secret.length; j++) {
        if (!used[j] && num === secret[j]) {
          feedback[i] = 'misplaced';
          used[j] = true;
          break;
        }
      }
    }
  });

  return feedback;
};
