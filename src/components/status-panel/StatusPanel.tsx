import React from "react";

interface StatusPanelProps {
  attemptsLeft: number;
  coins: number;
}

export const StatusPanel: React.FC<StatusPanelProps> = ({
  attemptsLeft,
  coins,
}) => {
  return (
    <section className="mb-1">
      <p>Attempts Left: {attemptsLeft}</p>
      <p>Total Coins: {coins}</p>
    </section>
  );
};
