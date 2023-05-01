import { useState } from 'react'; 
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/contacts/operations';

export default function Form() {
  const [name, setName] = useState(''); 
  const [number, setNumber] = useState(''); 

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        break;
    }
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    };

    dispatch(addContact({name, number }));
    resetForm();
  }
  
  return <form className={css.form} onSubmit={onSubmit}>
          <label className={css.label}>
          Name
          <input className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onChange}
      />
          </label>
          <label className={css.label}>Phone<input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChange}/></label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
  
}