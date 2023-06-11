import React from 'react';
import './Card.css';

const Card = ({ card, index, onCardClick, isFlipped }) => {
  return (
    <div className={`Card ${isFlipped ? 'Card-flip' : ''}`} onClick={() => onCardClick(card, index)}>
      <div className="Card-front">Odwróć kartę</div>
      <div className="Card-back">
        <img src={card.image} alt="" />
      </div>
    </div>
  );
};

export default Card;
