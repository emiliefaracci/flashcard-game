// src/components/Flashcard.js
import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">
        <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
      <div className="back">
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Flashcard;