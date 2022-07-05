// import { Link } from '@mui/material';
import React from 'react';

import { Navbar,Nav,Container,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Search = ({setSearchTitle}) => {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>MoviesDataBase</Navbar.Brand>
    <Nav.Link> <Link to='/'>Home</Link> </Nav.Link>
    <Nav.Link><Link to='/movie'>MovieList</Link></Nav.Link>
    <Form.Control className='inp' type="text" placeholder="Search movies..." 
    onChange={(e)=>setSearchTitle(e.target.value)} />
   
    
    </Container>
  </Navbar>
    </div>
  )
}

export default Search