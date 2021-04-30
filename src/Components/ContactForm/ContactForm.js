import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../../redux/contacts/contacts-operations';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onSubmit = contact => dispatch(operations.addContact(contact));

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    if (evt.currentTarget.name !== 'number') {
      setName(evt.currentTarget.value);
    } else {
      setNumber(evt.currentTarget.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control
          placeholder="Number"
          name="number"
          value={number}
          type="tel"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
}
