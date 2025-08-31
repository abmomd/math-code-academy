import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        {/* Brand (on the left in mobile) */}
        <Navbar.Brand as={Link} to="/">
          Math Code Academy
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/our-courses">
              Our Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonials">
              Testimonials
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/python-basics">
              Python Basics
            </Nav.Link> */}
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
