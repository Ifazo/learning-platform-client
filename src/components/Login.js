import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebaseConfig'
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {

  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogIn = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        setPasswordError('');
        form.reset();
      })
    .catch (error => { 
      console.error(error);
      setPasswordError(error.message);
    })

    signOut(auth)
      .then(() => {
        console.log('Sign-out successful');
      })
        .catch((error) => {
          console.log(error);
        })
  }

  return (
    <div className='w-50 text-center'>
      <h3>LogIn page</h3>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to='/register'>Don't have an account?</Link>
        </Form.Group>

        <p className='text-danger'>{passwordError}</p>
        {success && <p className='text-success'>User LogIn Successfully.</p>}
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;