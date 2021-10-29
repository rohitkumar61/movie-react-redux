// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Card} from "react-bootstrap";
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";

import UpdateMovie from "./UpdateMovie"

class MovieCard extends React.Component {
  render() {
    const {id, title, director, year, length_minutes } = this.props.movie;

    return (
		<div>
        <Card
          style={{
            width: "26rem",
            height: "19rem",
            margin: "20px",
            color: "white",
            backgroundColor: "blue",
          }}
        >
          <Link to={`/movie/${id}`}> 
    
          <Card.Body style={{marginTop:"2.3rem",fontSize:"3rem",lineHeight:"4rem"}}>
            <Card.Title><h1>{title}</h1></Card.Title>
            <Card.Title><h2>{director}</h2></Card.Title>
            <Card.Title><h2>{year}</h2></Card.Title>
            <Card.Title><h2>{length_minutes}min</h2></Card.Title>
          </Card.Body>
          </Link>
        </Card>
       
    
	 
     <Button variant="outline-danger" onClick={this.props.onDelete}  size="lg">Delete Movie</Button>{' '}
    
     <UpdateMovie
     key = {id}
     id = {id}
     onUpdate = {this.props.onUpdate}
     />
    
     </div>
    );
  }
}

export default MovieCard;
