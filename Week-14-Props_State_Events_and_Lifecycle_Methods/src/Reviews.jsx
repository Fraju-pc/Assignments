import "./Review.css"
import StarRating from "./StarRating";

const Reviews = props => {
    if (!props.show){
        return null
    }
    const rev= props.reviews;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Reviews</h3>
                </div>
                <div className="modal-body">
                    {rev.map((review, index) => (
                        <div key={index}>
                            <h5>{review.author}</h5>
                            <StarRating defaultRating={review.stars}/>
                            <p>{review.review}</p> 
                        </div>
                    ))}
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Reviews