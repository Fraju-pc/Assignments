import React, { useState } from 'react';
import "./star.css"

export default function StarRating ({ defaultRating, onRatingChange }) {
    const [rating, setRating] = useState(defaultRating);
  
    const handleStarClick = (selectedRating) => {
      setRating(selectedRating);
      onRatingChange(selectedRating);
    };
  
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'star active' : 'star'}
            onClick={() => handleStarClick(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };
  

  
