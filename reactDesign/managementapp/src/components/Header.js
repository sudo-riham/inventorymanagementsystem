import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Header() {
  return (
    
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#products">  Inventory Management Software</Navbar.Brand>
          <Nav className="mr-auto navbar_wrapper">
            <Link to="/products">List Products</Link>
            <Link to="/product/create">Add Products</Link>
          </Nav>
      </Navbar>
      </div>

  );
}

export default Header;