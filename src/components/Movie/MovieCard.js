// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button, ListGroupItem, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import UpdateMovieModal from "./UpdateMovieModal";

class MovieCard extends React.Component {
  render() {
    const { id, title, director, year, length_minutes, photo } =
      this.props.movie;
    console.log(this.props.style);
    return (
      <div>
        <Card
          style={{
            width: "25rem",
            height: "32rem",
            margin: "40px",
            textColor: "black",
            // backgroundColor: "black",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
           
            textDecorationLine: "none",
          }}
        >
          <Link to={`/movie/${id}`}>
            <Card>
              <Card.Img
                variant="top"
                style={this.props.style}
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat:"no-repeat",
                 
                  
                  
                 height: "33vh",
                 width:"100%",
                  backgroundImage: `${this.props.style.backgroundImage}`,
                }}
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{director}</ListGroupItem>
                <ListGroupItem>{year}</ListGroupItem>
                <ListGroupItem>{length_minutes}min</ListGroupItem>
              </ListGroup>
            </Card>
          </Link>
        </Card>
        <Button
          variant="outline-danger"
          onClick={this.props.onDelete}
          size="lg"
        >
          Delete Movie
        </Button>{" "}
        <UpdateMovieModal
          key={id}
          movieId={this.props.movie.id}
          movie={this.props.movie}
          onUpdate={this.props.onUpdate}
        />
      </div>
    );
  }
}

export default MovieCard;
