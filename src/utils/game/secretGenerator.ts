export const generateSecret = (): number[] => {
  const secret = Array.from({ length: 3 }, () => Math.floor(Math.random() * 21));

  if (import.meta.env.DEV) {
    console.log("[DEBUG] Generated secret numbers:", secret);
  }

  return secret;
};
