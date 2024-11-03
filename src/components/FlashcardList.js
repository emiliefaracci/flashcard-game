// src/components/FlashcardList.js
import React from 'react';
import Flashcard from './Flashcard';
import './FlashcardList.css';

const FlashcardList = ({ items }) => {
  return (
    <div className="flashcard-list">
      {items.map((item, index) => (
        <Flashcard key={index} item={item} />
      ))}
    </div>
  );
};

export default FlashcardList;