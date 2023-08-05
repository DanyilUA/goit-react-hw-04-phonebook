import { useState, useEffect } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import { ContactsList } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

  const LS_KEY = 'contact_index';

export default function AppPhoneBook() {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  // };

  const [contacts, setContacts] = useState(loadContactsFromLocalStorage);
  const [filter, setFilter] = useState('');


  const formSubmit = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert('This contact already exists.');
      return;
    }
 
    newContact.id = nanoid();

    setContacts(prevState => [...prevState, newContact])
  };

  const changeFilter = e => {
    const filterValue = e.currentTarget.value;
    setFilter(filterValue.toLowerCase());
  };

  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  }


  useEffect(() => {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  

    function loadContactsFromLocalStorage() {
      const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
      return savedContacts ? savedContacts : [];
    }

  
  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   }
  // }, []);



   const filterContacts = contacts.filter(contact =>
     contact.name.toLowerCase().includes(filter)
   );

    return (
      <div className="container">
        <h1 className="mainTitle">Phonebook</h1>
        <Phonebook onSubmit={formSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
