import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="">
			  <h1>Movies</h1>
            {/* <img
              alt=""
              
              width="70"
              height="20"
              className="d-inline-block align-top"
            />{" "} */}
          </Navbar.Brand>
          <Navbar bg="secondary" variant="dark">
            <Container>
              <Nav className="me-auto">
              <Link to = "/">
                <div style={{color:"white", fontSize:"1.3rem", textDecoration:"none"}}>Home</div>
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;