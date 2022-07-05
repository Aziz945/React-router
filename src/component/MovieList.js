import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies,searchTitle}) => {
  console.log(movies)
  return (
    <div style={{display:"flex"}}>
        {movies
        .filter((movie)=>movie.name.toLowerCase().includes(searchTitle.toLowerCase().trim()))
        
        .map((el)=><MovieCard  key={el.id} movie={el} />)}
    </div>
  )
}

export default MoviesList ;