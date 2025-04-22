import React, { useReducer } from "react";
import {
  CardList,
  InputRow,
  GameBoard,
  StatusPanel,
  GameResult,
} from "./components";
import { gameReducer, initialGameState } from "./reducers/gameReducer";
import { useGameControls } from "./hooks";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(
    gameReducer,
    undefined,
    initialGameState,
  );

  const { currentGuess, handleInputChange, handleSubmit, handleReset } =
    useGameControls(state, dispatch);

  return (
    <main className="text-center">
      <h1>🔐 Hidden Numbers</h1>

      <StatusPanel attemptsLeft={state.attemptsLeft} coins={state.coins} />

      <CardList revealed={state.revealed} />

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
        <GameResult
          win={state.win}
          secret={state.secret}
          onReset={handleReset}
        />
      )}
    </main>
  );
};

export default App;
