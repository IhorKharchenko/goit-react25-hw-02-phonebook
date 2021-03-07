import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Phonebook from './components/Phonebook/Phonebook';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
  };
  addContact = ({ name, number }) => {
    // console.log(data);
    const contact = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Phonebook onSubmit={this.addContact} />
      </div>
    );
  }
}

export default App;
