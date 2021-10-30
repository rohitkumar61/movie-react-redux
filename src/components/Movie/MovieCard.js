// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import UpdateMovieModal from "./UpdateMovieModal";

class MovieCard extends React.Component {
  render() {
    const { id, title, director, year, length_minutes } = this.props.movie;

    return (
      <div>
        <Card
          style={{
            width: "26rem",
            height: "19rem",
            margin: "30px",
            textColor: "black",
            backgroundColor: "black",
            textDecorationLine:"none"
           
          }}
        > 
        {/* <img
        
        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00314240-cguqzurswh-portrait.jpg"
        width="100vw"
        height="100vh"
        className="d-inline-block align-top"
      />{" "} */}
          <Link to={`/movie/${id}`}>
            <Card.Body
              style={{
                marginTop: "2.3rem",
                fontSize: "3rem",
                lineHeight: "4rem",
                color:"white"
              }}
            >
              <Card.Header >
                <h1>{title}</h1>
              </Card.Header>
              <Card.Title >
                <h1>{director}</h1>
              </Card.Title>
              <Card.Title  >
                <h2>{year}</h2>
              </Card.Title>
              <Card.Title>
                <h2>{length_minutes}min</h2>
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Button
          variant="outline-danger"
          onClick={this.props.onDelete}
          size="lg"
        >
          Delete Movie
        </Button>{" "}
        <UpdateMovieModal key={id} movieId={this.props.movie.id} movie = {this.props.movie} onUpdate={this.props.onUpdate} />
      </div>
    );
  }
}

export default MovieCard;
