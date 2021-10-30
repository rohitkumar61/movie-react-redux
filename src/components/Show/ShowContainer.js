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

  
  handleDeleteshow = async (showId) => {
    let deletedShowId = await ShowsApi.deleteShows(showId);

    this.setState({
      showData:{shows:this.state.showData.shows.filter((show) => show.id !== deletedShowId),
    }});
  };

  handleUpdateShows = async (data) => {
    console.log(data, "dededed")
    let id = data.id;
    delete data.id;
    let updatedShow = await ShowsApi.updateShows(data, id);
    console.log(updatedShow);
    data.id = id;
    if (updatedShow.message.indexOf("successfull" > -1)) {
      const newShowsState = this.state.showData.shows.map((show) => {
        if (id === show.id) {
          return data;
        }
        return show;
      });
      this.setState({ showData:{shows:newShowsState}});
    }
  };


  render() {
   
    return (
      <>
      <div>
          <ShowsModal
            key={this.state.showData.shows.id}
            onCreate={this.handleAddShow}
          />
        </div>
      <div className="d-flex justify-content-center flex-row flex-wrap">
        {this.state.showData.shows.map((show) => {
           let style = {
            backgroundImage: `url(${show.photo_url})`,
          }
        return(  <MovieShows
            show={show}
            key={show.id}
            onDelete={() => this.handleDeleteshow(show.id)}
            onUpdate={this.handleUpdateShows}
            style ={style}
           
          />
        )
  })}
        {/* <div>
          <ShowsModal
            key={this.state.showData.shows.id}
            onCreate={this.handleAddShow}
          />
        </div> */}
      </div>
      </>
    );
  }
}

export default ShowContainer;
