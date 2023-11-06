import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Above from './Above';
import {Link} from 'react-router-dom';

function CollapsibleExample() {
  return (
    <div>
    <Above />
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home" style={{marginLeft:'100px'}}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"style={{marginLeft:'25px'}}>About</Nav.Link>
            <Nav.Link as={Link} to="/reviews"style={{marginLeft:'25px'}}>Reviews</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Roofing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Masonry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Siding</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Services Summary
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features"style={{marginLeft:'25px'}}>Gallery</Nav.Link>
            <Nav.Link href="#features"style={{marginLeft:'25px'}}>Contact Us</Nav.Link>


          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;