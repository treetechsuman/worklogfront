import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const  MobileNav=({brand, links, bg="dark", varient ="dark"}) => {
  return (
    <Navbar collapseOnSelect expand="lg"  bg={bg} variant={varient}>
      <Container>
        <Navbar.Brand href={brand.href}>{brand.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {links.map((link, index) => (
            <Nav.Link key={index} href={link.href}>
              {link.label}
              </Nav.Link>    
          ))}     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MobileNav;