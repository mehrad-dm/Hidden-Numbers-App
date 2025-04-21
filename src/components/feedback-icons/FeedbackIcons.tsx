import React from "react";
import styles from "./feedbackIcons.module.scss";
import { FeedbackType } from "@/types";

interface FeedbackIconsProps {
  feedback: FeedbackType[];
}

const iconMap: Record<FeedbackType, string> = {
  correct: "✅",
  misplaced: "🔄",
  wrong: "❌",
};

export const FeedbackIcons: React.FC<FeedbackIconsProps> = ({ feedback }) => {
  return (
    <div className={styles.feedbackRow}>
      {feedback.map((type, index) => (
        <span key={`feedback-${index}`} className={styles[type]}>
          {iconMap[type]}
        </span>
      ))}
    </div>
  );
};
