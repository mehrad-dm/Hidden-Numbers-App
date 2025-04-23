import styles from "./inputRow.module.scss";

interface InputRowProps {
  guess: number[];
  onChange: (value: number, index: number) => void;
}

export const InputRow = ({ guess, onChange }: InputRowProps) => {
  return (
    <div className={styles.inputRow}>
      {guess.map((num, index) => (
        <input
          key={`guess-input-${index}`}
          type="number"
          min={0}
          max={20}
          value={num}
          onChange={(e) => onChange(Number(e.target.value), index)}
        />
      ))}
    </div>
  );
};
