import React, { Component } from "react";
import { Button, Modal, Row, Form, Col } from "react-bootstrap";
import { toast } from "react-toastify";

class ShowsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_name: "",
      theatre_name: "",
      rating: "",
      movie_info: "",
      photo_url:"",
      show: false,
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const data = this.state;
    let isValid = this.validateInputField(data);

    delete data.show;
    if (isValid) {
      this.props.onCreate(data, this.props.id);
      this.setState({
        movie_name: "",
        theatre_name: "",
        rating: "",
        movie_info: "",
        photo_url:""
      });
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
        <div style={{ margin: "5rem" }}>
          <Button
            onClick={this.handleShow}
            size="lg"
            onClick={this.handleShow}
            variant="outline-secondary"
          >
            {" "}
            Add Shows
          </Button>
        </div>
        <Modal show={this.state.show} onHide={this.handleShow}>
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
                    <Form.Label column sm={4}>
                      Movie
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Movie Name"
                        name="movie_name"
                        onChange={this.handleChange}
                        value={this.state.movie_name}
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
                    <Form.Label column sm={4}>
                      Theatre
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Director Name"
                        name="theatre_name"
                        onChange={this.handleChange}
                        value={this.state.theatre_name}
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
                    <Form.Label column sm={4}>
                      Rating
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Enter Movie Year"
                        name="rating"
                        onChange={this.handleChange}
                        value={this.state.rating}
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
                    <Form.Label column sm={4}>
                      Info
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Movie Run Time"
                        name="movie_info"
                        onChange={this.handleChange}
                        value={this.state.movie_info}
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
                    <Form.Label column sm={4}>
                      Movie Url
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="url"
                        placeholder="Enter Enter Movie Url"
                        name="photo_url"
                        onChange={this.handleChange}
                        value={this.state.photo_url}
                      />
                    </Col>
                  </Form.Group>
                </Col>


                {/* </Row> */}
                <button type="submit" className="btn btn-primary">
                  Add Shows
                </button>
              </Form>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ShowsModal;
