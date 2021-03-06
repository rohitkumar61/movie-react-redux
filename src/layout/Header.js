import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="">
          <Link to = "/">
			  <h1 style={{color:"white", fontSize:"2rem", textDecoration:"none"}}>Movies</h1>
        </Link>
          </Navbar.Brand>
          <Navbar bg="secondary" variant="dark">
            <Container>
              <Nav className="me-auto">
              {/* <Link to = "/">
                <div style={{color:"white", fontSize:"1.3rem", textDecoration:"none"}}>Home</div>
                </Link> */}
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </Navbar>
    </div>

  );
}

export default Header;