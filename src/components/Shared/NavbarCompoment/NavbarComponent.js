import React, { useContext, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './NavbarComponent.css';
import jwt_decode from 'jwt-decode';

const NavbarComponent = () => {
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(
    UserContext
  );
  const handleLogOut = () => {
    sessionStorage.removeItem('token');
  };
  // . for show login login information in home page after reload (duplicate code from login page)
  useEffect(() => {
    const loginToken = sessionStorage.getItem('token');
    if (loginToken) {
      const tokenDecoded = jwt_decode(loginToken);
      const { name, email, picture } = tokenDecoded;
      const user = {
        displayName: name,
        email: email,
        photo: picture,
      };
      setLoggedInUser(user);
    }
  }, []);
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
            {admin && (
              <>
                <Link className="links__color" to={'/admin'}>
                  Order List
                </Link>
                <Link className="links__color" to={'/admin/manage-service'}>
                  Manage Service
                </Link>
              </>
            )}
            {!admin && (
              <>
                <Link className="links__color" to={'/admin/book-list'}>
                  Booking List
                </Link>
                <Link className="links__color" to={'/admin/addReview'}>
                  Give Review
                </Link>
              </>
            )}
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
                <Button
                  onClick={handleLogOut}
                  className="btn button d-inline-block"
                >
                  <a href="/" className="btn__link">
                    Log Out
                  </a>
                </Button>
              </>
            ) : (
              <Button className="btn button d-inline-block">
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
