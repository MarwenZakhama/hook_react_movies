import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import { useState } from "react";
import '../App.css';
function Add({add}) {
  const[show,setShow]=useState(false);
  const[newmovie,setNewmovie]=useState({
    title:"marwen",
  rating:1});
  const handelchange=(e)=>{setNewmovie({...newmovie,[e.target.name]:e.target.value})}
  return (
    <div className="aa">
    {show ? <div>
      <Modal.Dialog>
      <Modal.Header closeButton>
      <Modal.Title>Add Movie</Modal.Title>
    </Modal.Header>
          <Modal.Body>
        <label>title</label>
        <input type="text" name="title" onChange={handelchange}/>
        </Modal.Body>
          <Modal.Body>
        <label>URL</label>
        <input type="url" name="imgurl" onChange={handelchange}/>
        </Modal.Body>
          <Modal.Body>
          <label>desc</label>
          <input type="text" name="discription" onChange={handelchange}/>
          </Modal.Body>
          <Modal.Body>
          <label>rating</label>
          <input type="number" name="rating" onChange={handelchange}/>
      
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() =>{setShow(false)}}>Close</Button>
      <Button variant="primary" onClick={() => add(newmovie)}>Save</Button>
    </Modal.Footer>
  </Modal.Dialog>
  </div>: null
    } 
    <button style={{floatRight:10 ,backgroundColor:'#1E90FF',borderRadius:5}} onClick={()=>{setShow(true)}}>+</button>
  </div>
    )
}

export default Add