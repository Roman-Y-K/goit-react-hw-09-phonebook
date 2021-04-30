import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
} from './contacts-actions';

const getContact = (state, payload) => {
  const verificationContact = state.find(
    contact => contact.name === payload.name,
  );

  if (verificationContact) {
    alert(`${payload.name} is already in contacts`);
  } else {
    return [...state, payload];
  }
};

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => getContact(state, payload),
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
