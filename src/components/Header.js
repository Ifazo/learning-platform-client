import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebaseConfig'
const auth = getAuth(app);

const Header = () => {

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user.displayName);
      })
      .catch(error => {
        console.error(error);
    })
  }

    return (
        <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">Tutorial Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Link className='btn btn-primary' to="/">Home</Link>
                <Link className='btn btn-primary' to="/blog">Blog</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link onClick={handleGoogleSignIn} className='btn btn-primary' to="/login">Log In</Link>
                  <Link className='btn btn-primary' to="/register">Register</Link>
                  <Link className='btn btn-primary' to="#action/3.3">FAQ</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;