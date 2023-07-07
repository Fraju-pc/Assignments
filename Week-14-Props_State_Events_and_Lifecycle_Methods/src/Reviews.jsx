//imports
import LeaveReview from "./Leave Review";
import "./Review.css"
import StarRating from "./StarRating";
import { v4 as uuidv4 } from 'uuid';

//Reviews Component (modal)
export default function Reviews ( {show, reviews, handlePost, onClose, id} ) {
    //if show is false, the modal is hidden
    if (!show){
        return null
    }

    //random generator for key
    const v4options = {
        random: [
          0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36,
        ],
      };
   
    //HTML Output
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Reviews</h3>
                </div>
                <div className="modal-body">
                    <div>
                        <LeaveReview key={uuidv4(v4options)} id={id} handlePost={handlePost} />
                    </div>
                    {reviews.map((review, index) => (
                        <div key={index}>
                            <h5>{review.author}</h5>
                            <StarRating value={review.stars}/>
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

