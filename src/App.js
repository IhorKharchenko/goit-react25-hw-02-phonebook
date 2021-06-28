import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddContacts from './components/Phonebook/AddContacts';
import Filter from './components/Phonebook/Filter';
import ContactsList from './components/Phonebook/ContactsList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  addContact = (name, number) => {
    // console.log(name, number);
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getFilteredContacts = () => {
    const normilizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter),
    );
  };
  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <AddContacts onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
