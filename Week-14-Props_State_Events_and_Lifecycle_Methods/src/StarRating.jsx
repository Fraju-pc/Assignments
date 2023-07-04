import React, { useState } from 'react';

import PropTypes from 'prop-types';
import "./star.css"

const StarRating = ({ defaultRating }) => {
    const [rating, setRating] = useState(defaultRating);
  
    const handleStarClick = (selectedRating) => {
      setRating(selectedRating);
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
  
  StarRating.propTypes = {
    defaultRating: PropTypes.number.isRequired,
  };
  
  export default StarRating;