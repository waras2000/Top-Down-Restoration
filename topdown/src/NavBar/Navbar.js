import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Above from './Above';

function CollapsibleExample() {
  return (
    <div>
      <Above />
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Reviews</Nav.Link>
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
            <Nav.Link href="#features">Gallery</Nav.Link>
            <Nav.Link href="#features">Contact Us</Nav.Link>


          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;