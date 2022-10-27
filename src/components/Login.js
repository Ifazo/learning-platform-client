import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebaseConfig'
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  }

  return (
    <div className='w-50 text-center'>
      <h3>LogIn page</h3>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to='/register'>Don't have an account?</Link>
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;