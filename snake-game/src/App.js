import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [boardSize, setBoardSize] = useState({ width: 20, height: 20 });
  const [snake, setSnake] = useState([
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
  ]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState('up');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!playing) return;

      if (event.key === 'ArrowUp' && direction !== 'down') {
        setDirection('up');
      } else if (event.key === 'ArrowDown' && direction !== 'up') {
        setDirection('down');
      } else if (event.key === 'ArrowLeft' && direction !== 'right') {
        setDirection('left');
      } else if (event.key === 'ArrowRight' && direction !== 'left') {
        setDirection('right');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [direction, playing]);

  useEffect(() => {
    if (playing) {
      const gameLoop = setInterval(() => {
        moveSnake();
      }, 150);

      return () => {
        clearInterval(gameLoop);
      };
    }
  }, [playing]);

  useEffect(() => {
    if (playing) {
      const collisionInterval = setInterval(() => {
        checkCollision();
      }, 100);

      return () => {
        clearInterval(collisionInterval);
      };
    }
  }, [playing]);

  const handlePlay = () => {
    setScore(0);
    setPlaying(true);
  };

  const moveSnake = () => {
    const head = { ...snake[0] };

    if (direction === 'up') {
      head.y -= 1;
    } else if (direction === 'down') {
      head.y += 1;
    } else if (direction === 'left') {
      head.x -= 1;
    } else if (direction === 'right') {
      head.x += 1;
    }

    const newSnake = [head, ...snake.slice(0, -1)];
    setSnake(newSnake);
  };

  const checkCollision = () => {
    const head = snake[0];

    if (
      head.x < 0 ||
      head.x >= boardSize.width ||
      head.y < 0 ||
      head.y >= boardSize.height
    ) {
      setGameOver(true);
    }

    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        setGameOver(true);
        break;
      }
    }

    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood(generateFood());
      extendSnake();
    }
  };

  const generateFood = () => {
    const x = Math.floor(Math.random() * boardSize.width);
    const y = Math.floor(Math.random() * boardSize.height);
    return { x, y };
  };

  const extendSnake = () => {
    const tail = { ...snake[snake.length - 1] };
    setSnake((prevSnake) => [...prevSnake, tail]);
  };

  useEffect(() => {
    if (playing && !gameOver) {
      const gameLoop = setInterval(() => {
        moveSnake();
        checkCollision();
      }, 150);

      return () => {
        clearInterval(gameLoop);
      };
    }
  }, [playing, gameOver]);

  return (
    <div className="App">
      <h1>Snake Game</h1>
      {!playing && <button onClick={handlePlay}>Play</button>}
      <div className="board">
        {gameOver && <div className="game-over">Game Over</div>}
        {snake.map((segment, index) => (
          <div
            className={`snake-segment ${
              index === 0 ? 'snake-head' : 'snake-body'
            }`}
            key={index}
            style={{ top: segment.y * 20, left: segment.x * 20 }}
          ></div>
        ))}
        <div
          className="food"
          style={{ top: food.y * 20, left: food.x * 20 }}
        ></div>
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default App;
