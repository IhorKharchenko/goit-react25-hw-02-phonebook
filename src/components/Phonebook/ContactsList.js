import React from 'react';

const Contacts = ({ contacts }) => (
  <>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}: </span>
          <span>{number}</span>
        </li>
      ))}
    </ul>
  </>
);
export default Contacts;
