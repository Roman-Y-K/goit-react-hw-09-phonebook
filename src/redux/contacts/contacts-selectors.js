import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => {
  return state.contacts.filter;
};

export const getContacts = state => {
  return state.contacts.items;
};

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
);
