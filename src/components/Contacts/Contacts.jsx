import PropTypes from 'prop-types';
import css from './Contact.module.css';


export function ContactsList({ contacts, onDeleteContact }) {

    return (
      <ul className={css.contact__list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contact}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              onClick={() => onDeleteContact(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
}

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};