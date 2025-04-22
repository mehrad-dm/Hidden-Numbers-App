import React from "react";
import { Card } from "../card/Card";

interface CardListProps {
  revealed: (number | null)[];
}

export const CardList: React.FC<CardListProps> = ({ revealed }) => {
  return (
    <section className="container">
      {revealed.map((num, i) => (
        <Card key={`card-${i}`} number={num} revealed={num !== null} />
      ))}
    </section>
  );
};
