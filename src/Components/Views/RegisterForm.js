import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux/auth/auth-operations';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onRegister = cred => dispatch(authOperations.register(cred));

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      return setName(value);
    }

    if (name === 'email') {
      return setEmail(value);
    }

    setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister({ name, email, password });

    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}
