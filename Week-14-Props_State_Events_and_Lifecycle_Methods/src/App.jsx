import { useState } from 'react'

import NavBar from "../src/NavBar"
import MovieCard from '../src/MovieCard'
//import { movieList } from "./data"



function App() {

  //console.log(movieList[2].reviewList);
  
  // const [count, setCount] = useState(0)

  // console.log(movie.reviewList);
  const [movieList, setMovielist] = useState([{
    id: 1,
    title: 'The Fifth Element',
    image: '../src/images/FifthElement.jpg',
    director: 'Luc Besson',
    writer: 'Luc Besson',
    starring: 'Bruce Willis, Milla Jovovich, Gary Oldman, Chris Tucker, Ian Holm',
    synopsis: "In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.",
    rating: 'PG-13',
    reviewList: [
       {
          id: 1,
          author: 'John Doe',
          stars: 5.0,
          review: 'Great movie! Amazing action sequences and a compelling story.',
       },
       {
          id: 2,
          author: 'Jane Smith',
          stars: 4.0,
          review: 'Good movie, but could have been better. Some scenes felt unnecessary.',
       },
    ],
 },
 {
    id: 2,
    title: 'The Matrix',
    image: '../src/images/TheMatrix.jpg',
    director: 'Lana Wachowski, Lilly Wachowski',
    writer: 'Lana Wachowski, Lilly Wachowski',
    starring: 'Keanu Reves, Laurence Fishburn, Carrie-Anne Moss',
    synopsis: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    rating: 'R',
    reviewList: [
       {
          id: 1,
          author: 'Alice Johnson',
          stars: 5.0,
          review:
             "One of the best movies I've ever seen. Mind-bending and thought-provoking.",
       },
       {
          id: 2,
          author: 'Bob Anderson',
          stars: 4.0,
          review: 'A masterpiece of storytelling. The visuals are stunning.',
       },
       {
          id: 3,
          author: 'Chris Wilson',
          stars: 4.0,
          review: "Good movie, but it's a bit confusing at times.",
       },
    ],
 },
 {
    id: 3,
    title: 'Contact',
    image: '../src/images/Contact.jpg',
    director: 'Robert Zemeckis',
    writer: 'James V. Hart, Michael Goldenberg, Carl Sagan',
    starring: 'Jodie Foster, Matthew McConaughey, Tom Skeritt',
    synopsis: "Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine.",
    rating: 'PG',
    reviewList: [
       {
          id: 1,
          author: 'David Smith',
          stars: 4.0,
          review:
             'A visually stunning and emotionally powerful film. Highly recommend!',
       },
       {
          id: 2,
          author: 'Emily Davis',
          stars: 5.0,
          review: "One of the best sci-fi movies I've ever seen. It's a masterpiece.",
       },
       {
          id: 3,
          author: 'Michael Johnson',
          stars: 4.0,
          review: 'Great movie with exceptional performances and a captivating story.',
       },
       {
          id: 4,
          author: 'Sarah Thompson',
          stars: 5.0,
          review:
             "Contact takes you on an incredible journey and leaves you thinking about it long after it's over.",
       },
    ],
 },
 {
    id: 4,
    title: 'Jurassic Park',
    image: '../src/images/JurassicPark.jpg',
    director: 'Steven Speilberg',
    writer: 'Michael Chriton, David Koepp',
    starring: 'Sam Niell, Laura Dern, Jeff Goldblum',
    synopsis: 'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.',
    rating: 'PG-13',
    reviewList: [
       {
          id: 1,
          author: 'John Williams',
          stars: 5.0,
          review:
             "An absolute masterpiece. This movie is years ahead of it's time",
       },
       {
          id: 2,
          author: 'Rebecca Johnson',
          stars: 4.0,
          review:
             'Awe inspiring with intense action sequences. One of the best movies ever made.',
       },
       {
          id: 3,
          author: 'James Anderson',
          stars: 4.0,
          review:
             "A thrilling and dark movie with exceptional performances. ",
       },
    ],
 },

 {
   id: 5,
   title: 'Independence Day',
   image: '../src/images/Independence.jpg',
   director: 'Roland Emmerich',
   writer: 'Dean Devlin, Roland Emmerich',
   starring: 'Will Smith. Bill Pullman, Jeff Goldblum',
   synopsis: "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
   rating: 'PG-13',
   reviewList: [
      {
         id: 1,
         author: 'John Doe',
         stars: 4.0,
         review: 'Great movie! Amazing action sequences and a compelling story.',
      },
      {
         id: 2,
         author: 'Jane Smith',
         stars: 3.0,
         review:
            'Good movie, but could have been better. Some scenes felt unnecessary.',
      },
   ],
},

{
   id: 6,
   title: 'Starship Troopers',
   image: '../src/images/Troopers.jpg',
   director: 'Paul Verhoeven',
   writer: 'Edward Neumeier, Robert A. Heinlein',
   starring: 'Casper Van Dien, Denise Richards, Dina Meyer, Neil Patrick Harris',
   synopsis: "Humans in a fascist, militaristic future wage war with giant alien bugs.",
   rating: 'R',
   reviewList: [
      {
         id: 1,
         author: 'John Doe',
         stars: 5.0,
         review: 'Great movie! Amazing action sequences and a compelling story.',
      },
      {
         id: 2,
         author: 'Jane Smith',
         stars: 4.0,
         review:
            'Good movie, but could have been better. Some scenes felt unnecessary.',
      },
   ],
},]);
  

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