import React from 'react';
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



const MovieCard = ({movie}) => {
  return (
   
    <Card className='cardStyle' style={{ width: '22rem',marginLeft:'25px'}}>
   <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
      <Card.Text>
        {movie.year}
      </Card.Text>
      <Link to= {`/trailer/${movie.id}`}><Button variant='primary' >Watch Trailer</Button> </Link>
    </Card.Body>
  </Card>
  
  
  )
}

export default MovieCard ;