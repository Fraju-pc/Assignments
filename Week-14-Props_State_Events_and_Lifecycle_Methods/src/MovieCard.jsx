//Imports
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Reviews from "./Reviews"

//Movie Card Component
export default function MovieCard( {title, synopsis, image, reviews, director, writer, starring, handlePost, rating, id} ){

  //Random Key Generator
  const v4options = {
    random: [
      0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36,
    ],
  };
  
  //State for Review Modal
  const [show, setShow] = useState(false)

  //State for Hover over Synopsis
  const [isHovering, setIsHovering] = useState(false);

  //Synopsis On
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  //Hover Off
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  //HTML Output
    return(
      <>
      
      <div className="col-lg-4">
        <div className="card">
          <img onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} 
            className="card-img-top" 
            src={image} 
            alt="Movie Poster" />
            
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              {isHovering && (
            <div className="hover">
              <p className="card-text">{synopsis}</p>
              
            </div>
        )}
              
              <p className="card-text"><b>Director:</b> {director}</p>
              <p className="card-text"><b>Writer:</b> {writer}</p>
              <p className="card-text"><b>Starring:</b> {starring}</p>
              <p className="card-text"><b>Rated:</b> {rating}</p>
              <div>
              <button className='btn btn-secondary' onClick={ () => setShow(true) }>Reviews</button>
              <Reviews key={uuidv4(v4options)} onClose={ () => setShow(false)} 
              show={show}
              reviews={reviews}
              handlePost={handlePost}
              id={id}/>
              </div>
            </div>
        </div> 
      </div>
      
      </>
    )
}