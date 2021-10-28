import React from "react";
import { ListGroup } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";

class MovieShows extends React.Component {
  render() {
    const { movie_name, theatre_name, rating, movie_info } = this.props.show;
    return (
      <div>
        <Row
          xs={2}
          md={1}
          className="g-1"
          style={{
            margin: "4rem",
            minWidth: "20rem",
            maxWidth: "30rem",
            minHeight: "20rem",
          }}
        >
          <Col>
            <Card>
              <DropdownButton
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-2"
                align="end"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyItems: "flex-end",
                  textDecorationStyle: "none",
                  //  marginRight:"100px"
                }}
              >
                <Dropdown.Item onClick={this.props.onDelete} href="#">
                  Remove Show
                </Dropdown.Item>
              </DropdownButton>

              <Card.Body>
                <Card.Title>
                  <span>Movie: {movie_name}</span>
                </Card.Title>
                <Card.Title>
                  <h1> {theatre_name}</h1>
                </Card.Title>
                <Card.Title>
                  <h1> {rating}</h1>
                </Card.Title>
                <Card.Text>
                  <p> {movie_info}</p>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/*          
            <CreateCards
              key={this.state.cardData.id}
              onCreate={this.handleCreateCard}
            /> */}
      </div>
    );
  }
}

export default MovieShows;
