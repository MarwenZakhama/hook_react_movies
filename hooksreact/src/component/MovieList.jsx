import React from 'react'
import '../App.css';
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
function MovieList({movies}) {
    return (
        <div className="mcard">  
            {movies.map((el,i)=><Card style={{ width: '18rem' }} key={i} >
            <Card.Img className="movieimg" variant="top" src={el.imgurl} />
            <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.discription}</Card.Text>
            <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={parseInt( el.rating)} />
            </Card.Body>
            </Card>)}
        </div>
    )
}

export default MovieList