import React, { Component } from "react";
import { Button, Modal, Row, Form, Col } from "react-bootstrap";
import { toast } from "react-toastify";

class UpdateMovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.id = this.props.movieId;
    const data = this.state;
    let isValid = this.validateInputField(data);
    delete data.show;
    if (isValid) {
      this.props.onUpdate(data);
    } else {
      toast("Enter All Input Field... ", {
        position: "top-center",
        draggable: true,
        type: "warning",
      });
      console.error("Input field can't be empty");
    
    }
  };

  validateInputField = (data) => {
    let isValid = true;
    let newData = { ...data };
    Object.values(newData).forEach((element) => {
      if (!`${element}`) {
        isValid = false;
      }
    });

    return isValid;
  };

  handleShow = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <>
        <Button
          onClick={this.handleShow}
          size="lg"
          onClick={this.handleShow}
          variant="outline-secondary"
        >
          {" "}
          Update Movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
        <Modal.Header closeButton>
           
           </Modal.Header>
          <Modal.Header>
            <Modal.Title>
              <Form onSubmit={this.handleSubmit}>
                {/* <Row> */}
                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={5}>
                      Title
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Movie Name"
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={5}>
                      Director
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Director Name"
                        name="director"
                        onChange={this.handleChange}
                        value={this.state.director}
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={5}>
                      Year
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="number"
                        placeholder="Enter Movie Year"
                        name="year"
                        onChange={this.handleChange}
                        value={this.state.year}
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={5}>
                      Run Time(min)
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="number"
                        placeholder="Enter Movie Run Time(min...)"
                        name="length_minutes"
                        onChange={this.handleChange}
                        value={this.state.length_minutes}
                      />
                    </Col>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={5}>
                     Movie Url
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="url"
                        placeholder="Enter Movie Url)"
                        name="photo"
                        onChange={this.handleChange}
                        value={this.state.photo}
                      />
                    </Col>
                  </Form.Group>
                </Col>

                {/* </Row> */}
                <button type="submit" className="btn btn-primary">
                  Update Movie
                </button>
              </Form>
            </Modal.Title>
          </Modal.Header>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

export default UpdateMovieModal;
