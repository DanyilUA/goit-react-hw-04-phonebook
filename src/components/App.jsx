import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import { ContactsList } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

  const LS_KEY = 'contact_index';

export class App extends Component {
  state = {
    // contacts: [],
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };


  formSubmit = newContact => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert('This contact already exists.');
      return;
    }
 
    newContact.id = nanoid();

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  componentDidMount() {
    const savedContact = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedContact) {
      this.setState({ contacts: savedContact });
    }
    console.log(typeof localStorage.getItem(LS_KEY));
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
          console.log('update');
    }
  }

  render() {

    const normalizeFilter = this.state.filter.toLocaleLowerCase();
    const filterContact = this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div className='container'>
        <h1 className="mainTitle">Phonebook</h1>
        <Phonebook onSubmit={this.formSubmit}  />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList contacts={filterContact} onDeleteContact={ this.deleteContact} />
      </div>
    );
  }
};
