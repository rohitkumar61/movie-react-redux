import React from "react";
import { ListGroup } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Card, Row, Col, Button } from "react-bootstrap";
import UpdateShow from "./UpdateShow";

class MovieShows extends React.Component {
  render() {
    const { movie_name, theatre_name, rating, movie_info } = this.props.show;
    return (
      <div>
        <Row
          xs={1}
          md={1}
          className="g-9"
          style={{
            margin: "6rem",
           
          }}
        >
          <Col>
         
            <Card>
              <div style ={{display:"flex" ,justifyContent:"spaceBetween", position:"relative"}}>
              <Button 
                style={{ width: "130px", height: "50px" ,marginRight:"54.30rem", }}
                variant="outline-danger"
                onClick={this.props.onDelete}
                href="#"
              >
                Delete show
              </Button>
              {/* <Button   variant="outline-danger"> */}
              <UpdateShow
              style ={{position:"absolute",right:"0px"}}
                key={this.props.show.id}
                showId = {this.props.show.id}
                onUpdate={this.props.onUpdate}
              />
              </div>
                {/* </Button> */}
              <Card.Body style={{ backgroundColor: "lawngreen" }}>
                <Card.Title
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1 style={{ marginRight: "30px" }}>Movie:</h1>
                  <h1> {movie_name}</h1>
                </Card.Title>
                <Card.Title
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1 style={{ marginRight: "30px" }}> Theatre:</h1>
                  <h1> {theatre_name}</h1>
                </Card.Title>
                <Card.Title
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h1 style={{ marginRight: "30px" }}> Ratings:</h1>
                  <h1> {rating}</h1>
                </Card.Title>
                <Card.Text>
                  <h1>About Movie</h1>
                  <p style={{ fontSize: "1.2rem", lineHeight: "2.5rem" }}>
                    {" "}
                    {movie_info}
                  </p>
                  .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieShows;
