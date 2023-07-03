//import { useStat } from "react"

import StarRating from "./StarRating"

export default function MovieCard( {title, synopsis} ){

    
    return(
      <>
      
      <div className="col-lg-4">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <StarRating />
              <p className="card-text">{synopsis}</p>
              <a href="#" className="btn btn-primary">Leave a Review</a>
            </div>
        </div> 
      </div>
      
      </>
    )
}