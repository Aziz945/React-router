import React, {useState} from 'react';
import  {Modal,Button,Form} from   "react-bootstrap"

const AddMovie = ({handleMovie}) => {
    const [show, setShow] = useState(false);
    const [name,setName]= useState("");
    const [image,setImage]= useState("");
    const [description,setDes]= useState("");
    const [rating,setRating] =useState(0);
    const [year,setYear] =useState("");
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
  
    return (
      <>
        <Button style={{backgroundColor : 'white',color : 'black',marginLeft:'1750px'}} variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Drop Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
 
  <Form.Group className="mb-3">
    <Form.Label>Movie Image</Form.Label>
    <Form.Control type="text" placeholder="Enter Image.." onChange={(e)=>setImage(e.target.value)} />
     <Form.Group className="mb-3">
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name.." onChange={(e)=>setName(e.target.value)} />
  </Form.Group>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Movie description</Form.Label>
    <Form.Control type="text" placeholder="Enter description.." onChange={(e)=>setDes(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Movie year</Form.Label>
    <Form.Control type="text" placeholder="Enter year.." onChange={(e)=>setYear(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
  </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{ handleMovie({name,image,description,year,rating}) ; handleClose()}}>
             Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddMovie