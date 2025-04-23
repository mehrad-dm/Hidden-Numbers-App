export const calculateCoins = (correctGuesses: Set<number>, isGameOver: boolean): number => {
  if (!isGameOver) return 0;

  const correctCount = correctGuesses.size;
  if (correctCount === 3) return 50;
  else if (correctCount === 2) return 20;
  return 0;
};
