import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

import './NavbarComponent.css';

const NavbarComponent = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogOut = () => {
    sessionStorage.removeItem('token');
  };

  return (
    <Navbar className="menu fixed-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="links__color menu__icon primary__color" to={'/'}>
            CarService
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto menu__items">
            <Link className="links__color" to={'/'}>
              Home
            </Link>
            <Link className="links__color" to={'/admin'}>
              Admin
            </Link>
            <Link className="links__color" to={'/admin/book-list'}>
              Booking List
            </Link>
            {loggedInUser.email ? (
              <>
                <a>
                  <span className="primary__color">
                    <img
                      style={{ width: '35px', borderRadius: '50%' }}
                      src={loggedInUser.photo}
                      alt=""
                    />
                  </span>
                </a>
                <Button onClick={handleLogOut} className="btn button ">
                  <a href="/" className="btn__link">
                    Log Out
                  </a>
                </Button>
              </>
            ) : (
              <Button className="btn button">
                <Link className="btn__link" to={'/login'}>
                  Log In
                </Link>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
