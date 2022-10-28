import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const Login = () => {

  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogIn = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn()
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

  }
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        // const user = result.user;
        // setUser(user);
        // console.log(user);
      })
      .catch(error => {
        // console.error(error);
      })
  }
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(result => {
        // const user = result.user;
        // setUser(user);
        // console.log(user);
      })
      .catch(error => {
        // console.error(error);
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
      <button className='btn btn-primary m-2' onClick={handleGoogleSignIn}>Google Sing In</button>
      <button className='btn btn-primary m-2' onClick={handleGithubSignIn}>GitHub Sing In</button>
    </div>
  );
};

export default Login;