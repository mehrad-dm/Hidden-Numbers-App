import React, { useReducer, useState, useEffect } from "react";
import { Card, InputRow, GameBoard } from "./components";
import { gameReducer, initialGameState } from "./reducers/gameReducer";
import { playSound, triggerParticles } from "./utils";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(gameReducer, undefined, initialGameState);
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

  return (
    <main className="text-center">
      <h1>🔐 Hidden Numbers</h1>

      <section className="mb-1">
        <p>Attempts Left: {state.attemptsLeft}</p>
        <p>Total Coins: {state.coins}</p>
      </section>

      <section className="container">
        {state.secret.map((num, i) => (
          <Card
            key={`card-${i}`}
            value={num}
            revealed={state.guesses.some((guess) => guess.feedback[i] === "correct")}
          />
        ))}
      </section>

      {!state.isGameOver && (
        <>
          <InputRow guess={currentGuess} onChange={handleInputChange} />
          <div>
            <button onClick={handleSubmit}>Guess</button>
          </div>
        </>
      )}

      <GameBoard guesses={state.guesses} />

      {state.isGameOver && (
        <section>
          <h2>{state.win ? "🎉 You Win!" : "💀 Game Over"}</h2>
          <p className="mb-1">The correct numbers were: {state.secret.join(", ")}</p>
          <button onClick={handleReset}>Play Again</button>
        </section>
      )}
    </main>
  );
};

export default App;
