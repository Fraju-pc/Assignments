//imports
//import React, { useState } from 'react';
import "./star.css"

//Star Rating Component
export default function StarRating ({ value, onChange }) {
    
    //Callback function to Leave Review Component
    const handleStarClick = (rating) => {
      onChange(rating);
    };

    //Html Output
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={rating <= value ? 'star active' : 'star'}
            onClick={() => handleStarClick(rating)}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };
  

  
