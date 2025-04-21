import { useState } from "react";
import { getFromStorage, setInStorage } from "../utils/helpers";

type UseHistoryProps<T> = {
  key: string;
  defaultValue: T[];
  equalityKey: keyof T;
};

export const useHistory = <T>({
  key,
  defaultValue,
  equalityKey,
}: UseHistoryProps<T>) => {
  const value = getFromStorage<T[]>(key, defaultValue);
  const [history, setHistory] = useState(value);

  const handleSetHistory = (newItem: T) => {
    const filteredHistory = history.filter(
      (item) => item[equalityKey] !== newItem[equalityKey],
    );
    const updatedHistory = [newItem, ...filteredHistory];
    const trimmedHistory = updatedHistory.slice(0, 4);

    setHistory(trimmedHistory);
    setInStorage(key, trimmedHistory);
  };

  return [history, handleSetHistory] as const;
};
