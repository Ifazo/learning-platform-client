import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebaseConfig'
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Register = () => {

    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false);


        const form = event.target;
        const name = form.name.value;
        const text = form.text.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, text, email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setPasswordError(error.message);
            })
    }

    return (
        <div className='w-50 text-center'>
            <h3>Register page</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full-name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo-url</Form.Label>
                    <Form.Control type="text" name="text" placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Link to='/login'>Already have an account?</Link>
                </Form.Group>

                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User Created Successfully.</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;