import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';


class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  phoneInputId = nanoid();

  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleFomSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {

    return (
      <div className={css.container}>
        <form action="" onSubmit={this.handleFomSubmit} className={css.form}>
          <label htmlFor={this.nameInputId} className={css.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
              id={this.nameInputId}
              className={css.input}
            />
          </label>
          <label htmlFor={this.phoneInputId} className={css.label}>
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone should contain more then 5 numbers (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) ."
              required
              value={this.state.number}
              onChange={this.handleInputChange}
              id={this.phoneInputId}
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
}

    export default Phonebook;

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
