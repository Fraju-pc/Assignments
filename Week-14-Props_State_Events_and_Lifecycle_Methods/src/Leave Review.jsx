//Imports
import { useState } from "react"
import StarRating from "./StarRating";
import { v4 as uuidv4 } from 'uuid';

//Leave Review Component
export default function LeaveReview({ id, handlePost}){
  //States to pull from form
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  
  //Random Key Generator
  const v4options = {
   random: [
     0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36,
   ],
 };

   //On Submit Function from the form
  const postReview = (e) => {
   e.preventDefault();

   //Variables to be passed back to App to update Array
   let index = id;
   let newReview = {
      author: userName,
      stars: rating,
      review: review
   }

//Callback Function from App component
handlePost(index, newReview);

//Clear the form fields
setUserName("");
setReview("");
setRating(0);
 };

//State for the Star Component
const [rating, setRating] = useState(0);

const handleRatingChange = (newRating) => {
   setRating(newRating);
};



   //HTML Output
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
                <StarRating key={uuidv4(v4options)} value={rating} onChange={handleRatingChange}/>
               <br/>
               <button id="post" className="btn btn-secondary" type="submit">Post Review</button>
               <br/>
            </form>
            <br/>
            </div>
      </div>
      </>
   )
};