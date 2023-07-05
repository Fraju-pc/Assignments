import React, { useState } from 'react';

import Reviews from "./Reviews"


export default function MovieCard( 
  {title, synopsis, image, reviews, director, writer, starring, handlePost, rating, id} ){

  //console.log(id);

  const [show, setShow] = useState(false)

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


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
              <Reviews onClose={ () => setShow(false)} 
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