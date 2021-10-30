import React from "react";
import { Card } from "react-bootstrap";

import * as MovieApi from "./../../services/api";
import MovieCard from "./MovieCard";
import ModalMovie from "./ModalMovie";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
    };
  }

  fetchMovies = async () => {
    let movies = await MovieApi.getMovies();
    console.log(movies);
    this.setState({ movieData: movies });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  handleCreateMovie = async (data) => {
    let newMovie = await MovieApi.addNewMovie(data);
    this.setState({
      movieData: [...this.state.movieData, newMovie],
    });
  };

  handleDeleteMovie = async (movieId) => {
    let deletedMovie = await MovieApi.deleteMovie(movieId);

    this.setState({
      movieData: this.state.movieData.filter((movie) => movie.id !== movieId),
    });
  };

  handleUpdateMovie = async (data) => {
    let id = data.id;
    delete data.id;
    let updatedMovie = await MovieApi.updateMovie(data, id);
    console.log(updatedMovie);
    data.id = id;
    if (updatedMovie.message.indexOf("successfull" > -1)) {
      const newMovieState = this.state.movieData.map((movie) => {
        if (id === movie.id) {
          return data;
        }
        return movie;
      });
      this.setState({ movieData: newMovieState });
    }
  };

  render() {
   

    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.state.movieData.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              key={movie.id}
              onDelete={() => this.handleDeleteMovie(movie.id)}
              onUpdate={this.handleUpdateMovie}
            />
          );
        })}

        <Card
          style={{
            width: "26rem",
            height: "19rem",
            margin: "30px",
            color: "white",
            
            backgroundColor: "Blue",
          
          }}
        >
          <ModalMovie
            key={this.state.movieData.id}
            onCreate={this.handleCreateMovie}
          />
        </Card>
      </div>
    );
  }
}

export default MovieContainer;
