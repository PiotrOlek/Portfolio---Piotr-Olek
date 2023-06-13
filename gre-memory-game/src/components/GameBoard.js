import React, { useState, useEffect } from 'react';
import Card from './Card';
import cardsData from './cardsData';
import './GameBoard.css';

const shuffleArray = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [correctPairs, setCorrectPairs] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let interval = null;
    if (gameStarted && !gameOver) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (!gameStarted && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    setCards(shuffleArray(cardsData));
  }, []);

  const handleCardClick = (clickedCard, clickedIndex) => {
    if (flippedIndexes.length === 1) {
      if (cards[flippedIndexes[0]].id === clickedCard.id && flippedIndexes[0] !== clickedIndex) {
        setCorrectPairs(correctPairs + 1);
        setMatchedPairs([...matchedPairs, flippedIndexes[0], clickedIndex]);
        setFlippedIndexes(prev => [...prev, clickedIndex]);
        if (correctPairs + 1 === cards.length / 2) {
          setGameOver(true);
          setShowNotification(true);
        }
      } else {
        setFlippedIndexes([clickedIndex]);
      }
    } else {
      setFlippedIndexes([clickedIndex]);
    }
  }

  const handlePlayAgain = () => {
    setCards(shuffleArray(cardsData));
    setFlippedIndexes([]);
    setCorrectPairs(0);
    setGameStarted(true);
    setGameOver(false);
    setTimer(0);
    setMatchedPairs([]);
    setShowNotification(false);
  }

  return (
    <div className="GameBoard">
      {!gameStarted && (
        <button onClick={() => setGameStarted(true)}>Rozpocznij grę</button>
      )}
      {gameStarted && (
        <>
          <div className="cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                onCardClick={() => handleCardClick(card, index)}
                isFlipped={flippedIndexes.includes(index) || matchedPairs.includes(index)}
              />
            ))}
          </div>
          <div className="info">
            <p>Czas: {timer} sekund</p>
          </div>
        </>
      )}
      {gameOver && (
        <div className={`notification ${showNotification ? 'show' : ''}`}>
          <p>Twój czas: {timer} sekund</p>
          <button onClick={handlePlayAgain}>Zagraj ponownie</button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
