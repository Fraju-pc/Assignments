import React, { useState } from 'react';
//import StarRating from "./StarRating"
import Reviews from "./Reviews"

export default function MovieCard( {title, synopsis, image, reviews} ){

  const [show, setShow] = useState(false)
    //console.log(reviews)
    return(
      <>
      
      <div className="col-lg-4">
        <div className="card">
          <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              
              <p className="card-text">{synopsis}</p>
              <div>
              <button onClick={ () => setShow(true) }>Reviews</button>
              <Reviews onClose={ () => setShow(false)} 
              show={show}
              reviews={reviews}/>
              </div>
            </div>
        </div> 
      </div>
      
      </>
    )
}