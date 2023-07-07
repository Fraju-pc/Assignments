//Imports
import { useState } from 'react'
import NavBar from "../src/NavBar"
import MovieCard from '../src/MovieCard'
import { movies } from "./data"

//App Component
export default function App() {

  //Putting the Array in State
  const [movieList, setMovielist] = useState(movies);
  
    //Callback Function sent down to form Component to Add Review to Array
    const handlePost = (index, newReview) =>{
    //Push to Array
    movieList[index].reviewList.push(newReview);
    //Update the State
    setMovielist((prevArray) => {
      const newArray = [...prevArray];
      const objectToUpdate = { ...newArray[index] };
      const subArrayToUpdate = [...objectToUpdate.reviewList];
      subArrayToUpdate[(subArrayToUpdate.length + 1)] = { id: (subArrayToUpdate.length + 1), value: newReview };
      objectToUpdate.subArray = subArrayToUpdate;
      newArray[index] = objectToUpdate;
      return newArray;
    });  
  }

  //HTML Output
  return (
    <>
     <NavBar />
     <div className="row">
      {movieList.map((movie, index) => (
        <MovieCard 
        key={index}
        id={index} 
        title={movie.title} 
        synopsis={movie.synopsis}
        image={movie.image}
        reviews={movie.reviewList}
        director={movie.director}
        writer={movie.writer}
        starring={movie.starring}
        rating={movie.rating}
        handlePost={handlePost}
        />
        ))} 
      </div>
    </>
  )
}