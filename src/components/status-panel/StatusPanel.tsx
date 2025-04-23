interface StatusPanelProps {
  attemptsLeft: number;
  coins: number;
}

export const StatusPanel = ({ attemptsLeft, coins }: StatusPanelProps) => {
  return (
    <section className="mb-1">
      <p>Attempts Left: {attemptsLeft}</p>
      <p>Total Coins: {coins}</p>
    </section>
  );
};
