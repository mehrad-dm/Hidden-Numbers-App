import React from "react";
import styles from "./card.module.scss";

export interface CardProps {
  number: number | null;
  revealed: boolean;
}

export const Card: React.FC<CardProps> = ({ number, revealed }) => {
  return (
    <div className={`${styles.card} ${revealed ? styles.revealed : ""}`}>
      {revealed ? number : "?"}
    </div>
  );
};
