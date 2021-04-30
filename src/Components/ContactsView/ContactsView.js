import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import * as operations from '../../redux/contacts/contacts-operations';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
