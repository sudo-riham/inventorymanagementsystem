import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Header() {
  return (
    
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto navbar_wrapper">
            <Link to="product/create">Add Products</Link>
            <Link to="/update">Update Products</Link>
          </Nav>
        </Container>
      </Navbar>
      </div>

  );
}

export default Header;