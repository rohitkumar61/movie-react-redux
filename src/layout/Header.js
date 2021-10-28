import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
			  <h1>Movies</h1>
            {/* <img
              alt=""
              
              width="70"
              height="20"
              className="d-inline-block align-top"
            />{" "} */}
          </Navbar.Brand>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Nav className="me-auto">
                <div style={{color:"white"}}>Home</div>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;