import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  return (
    <>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Find contact by name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </Form.Group>
    </>
  );
}
