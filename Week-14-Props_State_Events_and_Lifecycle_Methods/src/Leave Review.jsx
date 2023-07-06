import { useState } from "react"
import StarRating from "./StarRating";

export default function LeaveReview({ id, handlePost}){
   //States to pull from form
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  
  const postReview = (e) => {
   e.preventDefault();



   let index = id;
   let newReview = {
      author: userName,
      stars: selectedRating,
      review: review
   }

handlePost(index, newReview);

setUserName("");
setReview("");

handleRatingChange(0);
 };

 const [selectedRating, setSelectedRating] = useState();

 const handleRatingChange = (rating) => {
   setSelectedRating(() => rating);
 };
  //html form
   return (
      
      <>
      
      <div id="wrapper">
            <div className="reviewForm">
                <h5>Feel Free to Leave a Review:</h5>
            <form onSubmit={postReview}>
               <label >Your Name:</label><br/>
               <input type="text"  id="username" 
               value={userName} className="form-control" placeholder="Please enter your name:"
               onChange={(e) => setUserName(e.target.value)} />
               <br/>
               <label >Please Share Your Thoughts:</label><br/>
               <input type="text" className="form-control" id="review" 
               value={review} placeholder="Leave a review here:"
               onChange={(e) => setReview(e.target.value)} />
                <br/>
                <label>How Many Stars Would You Give?</label>
                <StarRating key={selectedRating} defaultValue={0} onRatingChange={handleRatingChange}/>
               <br/>
               <button id="post" className="btn btn-secondary" type="submit">Post Review</button>
               <br/>
            </form>
            <br/>
            </div>
      </div>
      </>
   )
}