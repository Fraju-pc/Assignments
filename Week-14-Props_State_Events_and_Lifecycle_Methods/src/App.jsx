//import { useState } from 'react'

import NavBar from "../src/NavBar"
import MovieCard from '../src/MovieCard'
import { movieList } from "./data"

//console.log(movieList);

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <div className="row">
      {movieList.map((movie, index) => (
        <MovieCard 
        key={index} 
        title={movie.title} 
        synopsis={movie.synopsis}
        />
        ))} 
      </div>
    </>
  )
}

export default App