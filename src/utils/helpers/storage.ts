export const setInStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : defaultValue;
};
