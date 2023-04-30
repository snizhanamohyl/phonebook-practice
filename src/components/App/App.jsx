import { useEffect } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'components/redux/contacts/operations';
import { selectIsLoading } from 'components/redux/selectors';

export default function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <div className={css.container}>
    <h1>Phonebook</h1>
    <Form />  
    {isLoading && <p>Is Loading...</p>}
    <div>
      <h2>Contacts</h2>
      <Filter/>
      <Contacts/></div>
    </div>
}
