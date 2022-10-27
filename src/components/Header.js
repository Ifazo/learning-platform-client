import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebaseConfig'
import { useState } from 'react';
const auth = getAuth(app);

const Header = () => {

  const [user, setUser] = useState({

  })

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch(error => {
        // console.error(error);
    })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch(error => {
        // console.error(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({})
      })
  }

    return (
        <div>
    <Navbar bg="light" expand="lg">
      <Container>
            
            <Navbar.Brand to="/">Tutorial Wiki</Navbar.Brand>
            <div className='d-flex'>
              <p>User name: {user.displayName}</p>
                <img className='rounded-circle' src={user.photoURL} alt="" />
            </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Link className='btn btn-primary' to="/">Home</Link>
                <Link className='btn btn-primary' to="/courses">Courses</Link>
                <Link className='btn btn-primary' to="/blog">Blog</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link className='btn btn-primary' to="/login">Register/Sign-in</Link>
          
                  {user.uid ?
                    <button className='btn btn-primary' onClick={handleSignOut}>Sign Out</button> :
                    <>
                      <button className='btn btn-primary' onClick={handleGoogleSignIn}>Google Sing In</button>
                      <button className='btn btn-primary' onClick={handleGithubSignIn}>Github Sign IN</button>
                    </>
                  }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;