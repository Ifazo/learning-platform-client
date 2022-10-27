import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

// const auth = getAuth(app);

const Register = () => {

    const { createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleRegister = (event) => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const text = form.text.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, text, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
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

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;