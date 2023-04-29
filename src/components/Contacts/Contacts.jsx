import PropTypes from 'prop-types'; 
import css from './Contacts.module.css'
import { useContext } from 'react';
import authContext from 'context/authContext';

export default function Contacts({ contacts, deleteContact }) {
  const onClick = ({ target }) => {
    const id = target.parentElement.getAttribute('data-key');
    deleteContact(id);
  }
  const { decrement } = useContext(authContext);
    return <ul>
      {contacts.map((contact) => { return <li key={contact.id} data-key={contact.id } className={css.item}>{contact.name}: { contact.number} <button className={css.btn} onClick={onClick}>Delete</button></li>})}
      <button onClick={decrement}>DECR</button>
    </ul>
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
     number: PropTypes.string.isRequired,
  })),
  deleteContact: PropTypes.func.isRequired,
};