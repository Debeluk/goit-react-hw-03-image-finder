import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={() => onDeleteContact(contact.id)}
      />
    ))}
  </ul>
);

export default ContactList;