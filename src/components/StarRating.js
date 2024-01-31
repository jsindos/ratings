import React, { useState } from 'react';

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index);
    onRatingChange(index);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <button
      key={index}
      className={`star ${index < rating ? 'star-filled' : 'star-empty'}`}
      onClick={() => handleStarClick(index + 1)}
      role="radio"
      aria-checked={index < rating}
      aria-label={`Rate ${index + 1} out of 5`}
    >
      {index < rating ? '★' : '☆'}
    </button>
  ));

  return (
    <div className="star-rating" role="radiogroup" aria-label="Rating">
      {stars}
    </div>
  );
};

export default StarRating;

// Styling (assuming a CSS-in-JS approach)
const styles = {
  star: {
    cursor: 'pointer',
    fontSize: '2rem',
    color: 'gray',
    background: 'none',
    border: 'none',
  },
  'star-filled': {
    color: 'gold',
  },
  'star-empty': {
    color: 'gray',
  },
};
