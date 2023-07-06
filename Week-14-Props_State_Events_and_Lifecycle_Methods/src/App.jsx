import { useState } from 'react'
import NavBar from "../src/NavBar"
import MovieCard from '../src/MovieCard'
import { movies } from "./data"



function App() {


  const [movieList, setMovielist] = useState(movies);
  

    const handlePost = (index, newReview) =>{
    
    movieList[index].reviewList.push(newReview);

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

    //console.log(reviews)


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

export default App