import { useState, useEffect } from "react";
import { GameAction, GameState } from "../types";
import { playSound, triggerParticles } from "../utils";

export const useGameControls = (
  state: GameState,
  dispatch: React.Dispatch<GameAction>,
) => {
  const [currentGuess, setCurrentGuess] = useState<number[]>([0, 0, 0]);

  const handleInputChange = (value: number, index: number) => {
    const updatedGuess = [...currentGuess];
    updatedGuess[index] = value;
    setCurrentGuess(updatedGuess);
  };

  const handleSubmit = () => {
    if (currentGuess.length === 3) {
      playSound("click");
      dispatch({ type: "MAKE_GUESS", payload: currentGuess });
      setCurrentGuess([0, 0, 0]);
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET_GAME" });
  };

  useEffect(() => {
    if (!state.isGameOver) return;

    if (state.win) {
      playSound("win");
      triggerParticles();
    } else {
      playSound("fail");
    }
  }, [state.isGameOver, state.win]);

  return {
    currentGuess,
    handleInputChange,
    handleSubmit,
    handleReset,
  };
};
