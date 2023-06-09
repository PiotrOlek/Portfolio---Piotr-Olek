import React, { useState, useEffect } from 'react';
import Board from './Board';
import Snake from './Snake';

const Game = () => {
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      // Rozpoczęcie logiki gry
      const intervalId = setInterval(() => {
        // Aktualizacja stanu gry
      }, 150);
      return () => clearInterval(intervalId); // Czyszczenie interwału po zakończeniu gry
    }
  }, [playing]);

  const handlePlay = () => {
    setScore(0);
    setPlaying(true);
  };

  const handleGameOver = () => {
    setPlaying(false);
  };

  return (
    <div className="game">
      <h2>Snake Game</h2>
      <p>Score: {score}</p>
      {!playing && <button onClick={handlePlay}>Play</button>}
      <Board playing={playing} onGameOver={handleGameOver} />
      {playing && <Snake onScoreUpdate={setScore} />}
    </div>
  );
};

export default Game;
