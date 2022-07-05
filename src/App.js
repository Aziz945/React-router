import { useState } from 'react';
import './App.css';
import React from 'react';
import AddMovie from './component/AddMovie';
import Search from './component/SearchButton';
import { moviesData } from './component/MovieData';
import MoviesList from './component/MovieList';
import ReactStars from "react-rating-stars-component";
import {Routes , Route} from 'react-router-dom'
import Trailer from './component/trailer';


const App =  () =>{
  
  const [movies,setMovies]= useState(moviesData);
  const [ratingSearch,setRatingSearch]= useState(0);
  const [searchTitle,setSearchTitle]=useState("");

  const stars = {
    size: 60,
    isHalf: true,
    char: "✰",
    value: 0,
    onChange: newValue => {
      console.log(`Example 4: new value is ${newValue}`);
    }
  };

  

  const handleMovie = (movie)=>{
    console.log(movie)
    setMovies([...movies,movie])
    console.log(movie)
  }
  return (
    <div>
   <Search  setRatingSearch={setRatingSearch} setSearchTitle={setSearchTitle} />
   <AddMovie handleMovie={handleMovie} />
   <ReactStars {...stars} />
   <Routes>
    <>
    
    {/* <Route path='/movie' element={<AddMovie handleMovie={handleMovie} />} /> */}
    <Route  path='/' element={<h2 style={{fontSize : '100px',textAlign:'center',marginTop:'400px',color:'white'}}>Welcome</h2>} />
    <Route path='/movie' element={<MoviesList ratingSearch={ratingSearch} searchTitle={searchTitle} movies={movies} />} />
    <Route path='/trailer/:id' element={<Trailer data={movies} />}></Route>

   </>
   </Routes>
  </div>
  );
}

export default App;
