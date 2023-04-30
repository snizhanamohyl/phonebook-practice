import css from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'components/redux/selectors';
import { deleteContact } from 'components/redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const filterContacts = () => {   
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));

    return filterValue === "" ?  contacts : filteredContacts;
  }

  const onDelete = ({ target }) => {
    const id = target.parentElement.getAttribute('data-key');
    dispatch(deleteContact(id));
  }
  return <ul>
      {filterContacts().map((contact) => { return <li key={contact.id} data-key={contact.id } className={css.item}>{contact.name}: { contact.number} <button className={css.btn} onClick={onDelete}>Delete</button></li>})}
    </ul>
};