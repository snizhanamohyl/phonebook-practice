import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'components/redux/selectors';
import { setFilter } from 'components/redux/filter/filterSlice';

export default function Filter() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectFilter);

    const onChange = ({target}) => {
        dispatch(setFilter(target.value));
    }
    
    return <label className={css.label}>Find contacts by name<input className={css.input} type="text" onChange={onChange} value={filterValue} /></label>
}
