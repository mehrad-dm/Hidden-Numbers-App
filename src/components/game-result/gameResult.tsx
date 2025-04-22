import React from "react";

interface GameResultProps {
  win: boolean;
  secret: number[];
  onReset: () => void;
}

export const GameResult: React.FC<GameResultProps> = ({ win, secret, onReset }) => {
  return (
    <section>
      <h2>{win ? "🎉 You Win!" : "💀 Game Over"}</h2>
      <p className="mb-1">The correct numbers were: {secret.join(", ")}</p>
      <button onClick={onReset}>Play Again</button>
    </section>
  );
};
