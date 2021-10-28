import React, { Component } from "react";
import { Card } from "react-bootstrap";

class MovieCard extends React.Component {
  render() {
    const { title, director, year, length_minutes } = this.props.movie;

    return (
      <div>
        <Card
          style={{
            width: "18rem",
            height: "7rem",
            margin: "20px",
            color: "white",
            backgroundColor: "blue",
          }}
        >
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{director}</Card.Title>
            <Card.Title>{year}</Card.Title>
            <Card.Title>{length_minutes}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MovieCard;
