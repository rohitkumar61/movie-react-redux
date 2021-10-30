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
              <div 
              style={{ 
                background: "#FF5F6D",  
              position:"relative"
              
              
              }}>
                <div  style={{ position: "absolute", left: "0px" ,padding:"10px"}}>

                <Button
                  
                 
                  variant="outline-danger"
                  onClick={this.props.onDelete}
                  href="#"
                  style ={{fontSize:"22px",margin:"0px auto"}}
                >
                  Delete show
                </Button>
                </div>
                <div  style={{ position: "absolute", right: "0px" ,padding:"10px"}}>

                <UpdateShow
                 show = {this.props.show}
                  key={this.props.show.id}
                  showId={this.props.show.id}
                  onUpdate={this.props.onUpdate}
                />
                   </div>
              </div>
             
              <Card.Img variant="top" style ={this.props.style}  style ={{backgroundPosition: "center",
  backgroundSize:"cover", height:"55vh",  backgroundImage: `${this.props.style.backgroundImage}`}}/>

<Card className="bg-dark text-white">
  {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
  {/* <Card.ImgOverlay> */}
    <Card.Title>Movie:   {movie_name}</Card.Title>
    <Card.Title>Theatre: {theatre_name}</Card.Title>
    <Card.Title>Rating:  {rating}</Card.Title>
    

    <Card.Text>
      {movie_info}
     
    </Card.Text>
    
  {/* </Card.ImgOverlay> */}
</Card>



             
              {/* <Card.Body style={{ backgroundColor: "#D8E3E7" }}>
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
              </Card.Body> */}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieShows;
