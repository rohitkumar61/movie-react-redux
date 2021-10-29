import React, { Component } from "react";

import * as ShowsApi from "./../../services/api.js";
import MovieShows from "./MovieShows.js";
import ShowsModal from "./ShowsModal";

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: { shows: [] },
    };
  }

  fetchMovieShows = async () => {
    let shows = await ShowsApi.getMovieShows(this.props.match.params.id);
    console.log("--------------------data from api");
    console.log(shows);
    this.setState({ showData: shows });
  };

  componentDidMount() {
    this.fetchMovieShows();
  }

  handleAddShow = async(data) => {
    let id = parseInt(this.props.match.params.id);
    let newShow = await ShowsApi.addNewShows(data,id);
    
    this.setState({
      showData:{shows:[...this.state.showData.shows,newShow]}
    });
  };

  render() {
    console.log("------------------------------data from state---------");
    console.log(this.state.showData.shows);
    return (
      <div className="d-flex justify-content-center flex-column">
        {this.state.showData.shows.map((show) => (
          <MovieShows
            show={show}
            key={show.id}
            onDelete={() => this.handleDeleteshow(show.id)}
          />
        ))}
        <div>
          <ShowsModal
            key={this.state.showData.shows.id}
            onCreate={this.handleAddShow}
          />
        </div>
      </div>
    );
  }
}

export default ShowContainer;
