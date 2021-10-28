import React, { Component } from "react";

import * as ShowsApi from "./../../services/api.js";

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: [],
    };
  }

  fetchMovieShows = async () => {
    let shows = await ShowsApi.getMovieShows(this.props.match.params.id);
    this.setState({ showData: shows });
  };

  componentDidMount() {
    this.fetchMovieShows();
  }

  render() {
    return (
      <div
        className="d-flex m-2"
        style={{ overflowX: "auto", flex: "1" }}
      ></div>
    );
  }
}

export default ShowContainer;
