import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';


export default function Phonebook({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleFomSubmit = e => {
        e.preventDefault();
        onSubmit({name, number});
        setName('');
        setNumber('');
  };

  return (
    <div className={css.container}>
      <form action="" onSubmit={handleFomSubmit} className={css.form}>
        <label htmlFor={nameInputId} className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
            id={nameInputId}
            className={css.input}
          />
        </label>
        <label htmlFor={phoneInputId} className={css.label}>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone should contain more then 5 numbers (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) ."
            required
            value={number}
            onChange={handleNumberChange}
            id={phoneInputId}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
