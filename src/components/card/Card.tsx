import styles from "./card.module.scss";

export interface CardProps {
  number: number | null;
  revealed: boolean;
}

export const Card = ({ number, revealed }: CardProps) => {
  return (
    <div className={`${styles.card} ${revealed ? styles.revealed : ""}`}>
      {revealed ? number : "?"}
    </div>
  );
};
