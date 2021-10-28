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

  handleCreateMovie =async (data) => {
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

  render() {
    // let { id } = this.state.movieData;

    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.state.movieData.map((movie)=>{
         return(
            <MovieCard
            movie = {movie}
            key = {movie.id}
            onDelete={() => this.handleDeleteMovie(movie.id)}
            />
         )
        })
      }
       
        <Card
          style={{
            width: "26rem",
            height: "19rem",
            margin: "20px",
            color: "white",
            backgroundColor: "blue",
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
