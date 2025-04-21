import React from "react";
import styles from "./card.module.scss";

interface CardProps {
  value?: number;
  revealed: boolean;
}

export const Card: React.FC<CardProps> = ({ value, revealed }) => {
  return (
    <div className={`${styles.card} ${revealed ? styles.revealed : ""}`}>
      <span>{revealed ? value : "?"}</span>
    </div>
  );
};
