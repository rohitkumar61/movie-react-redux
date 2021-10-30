import React from "react";
import { ListGroup } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Card, Row, Col, Button } from "react-bootstrap";
import UpdateShow from "./UpdateShow";

class MovieShows extends React.Component {
  render() {
    const { movie_name, theatre_name, rating, movie_info } = this.props.show;
    return (
      <div style={{width:"33%", margin:"10px"}}>
        {/* <Row
          xs={1}
          md={1}
          className="g-9"
          style={{
            margin: "6rem",
          }}
        > */}
          {/* <Col> */}

            <Card>
              <div
                style={{
                  background: "red",
                  position: "relative",
                }}
              >
                <div
                  style={{ position: "absolute", right: "200px", padding: "10px" }}
                >
                  <Button
                    variant="outline-danger"
                    onClick={this.props.onDelete}
                    href="#"
                    style={{ fontSize: "22px", margin: "0px auto" }}
                  >
                    Delete show
                  </Button>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "0px",
                    padding: "10px",
                  }}
                >
                  <UpdateShow
                    show={this.props.show}
                    key={this.props.show.id}
                    showId={this.props.show.id}
                    onUpdate={this.props.onUpdate}
                  />
                </div>
              </div>

              <Card.Img 
                variant="top"
                style={this.props.style}
                style={{
                  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "55vh",
                  backgroundImage: `${this.props.style.backgroundImage}`,
                }}
              />

              <Card className="bg-dark text-white">
                <Card.Title>Movie: {movie_name}</Card.Title>
                <Card.Title>Theatre: {theatre_name}</Card.Title>
                <Card.Title>Rating: {rating}</Card.Title>

                <Card.Text>{movie_info}</Card.Text>
              </Card>
            </Card>
          {/* </Col> */}
        {/* </Row> */}
      </div>
    );
  }
}

export default MovieShows;
