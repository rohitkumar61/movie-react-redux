import React from "react";
import { Card } from "react-bootstrap";


import MovieCard from "./MovieCard";
import ModalMovie from "./ModalMovie";

class MovieContainer extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        <MovieCard />

        <Card
          style={{
            width: "18rem",
            height: "7rem",
            margin: "20px",
            color: "grey",
          }}
        >
          <ModalMovie />
        </Card>
      </div>
    );
  }
}

export default MovieContainer;
