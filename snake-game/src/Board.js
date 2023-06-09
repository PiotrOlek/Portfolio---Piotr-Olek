import React from 'react';

const Board = ({ playing, onGameOver }) => {
  const handleCollision = () => {
    // Logika detekcji kolizji
    onGameOver();
  };

  return (
    <div className="board" style={{ opacity: playing ? 1 : 0.5 }}>
      {/* Logika planszy */}
    </div>
  );
};

export default Board;
