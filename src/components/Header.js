import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.displayName, user.email, user.photoURL);

  const handleLogout = () => {
    logOut()
      .then(console.log('User logged out!'))
      .catch(error => console.log(error))
  }

    console.log(user);
    
    return (
        <div>
    <Navbar bg="light" expand="lg">
      <Container>
            
       <Navbar.Brand to="/">Tutorial Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Link className='btn btn-link mx-2' to="/">Home</Link>
                <Link className='btn btn-link mx-2' to="/courses">Courses</Link>
                <Link className='btn btn-link mx-2' to="/blog">Blog</Link>
                <div>
                  {user.uid ? <><p>{user.displayName}</p>
                  <img className='rounded-circle' src={user.photoURL} alt="" /></> : <></>}
                </div>
                <div>
                  {
                    user?.uid ? <Link className='btn btn-link mx-2' onClick={handleLogout}>Log Out</Link> : <Link className='btn btn-link mx-2' to="/login">Login</Link>
                  }
                </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;