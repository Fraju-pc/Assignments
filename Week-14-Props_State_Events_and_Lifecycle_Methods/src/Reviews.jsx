import LeaveReview from "./Leave Review";
import "./Review.css"
import StarRating from "./StarRating";

export default function Reviews ( {show, reviews, handlePost, onClose, id} ) {
    if (!show){
        return null
    }
    
   
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Reviews</h3>
                </div>
                <div className="modal-body">
                    <div>
                        <LeaveReview id={id} handlePost={handlePost} />
                    </div>
                    {reviews.map((review, index) => (
                        <div key={index}>
                            <h5>{review.author}</h5>
                            <StarRating defaultRating={review.stars}/>
                            <p>{review.review}</p> 
                        </div>
                    ))}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="btn btn-secondary">Close</button>
                </div>
            </div>
        </div>
    )
}

