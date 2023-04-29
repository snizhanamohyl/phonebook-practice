import PropTypes from 'prop-types'; 
import css from './Filter.module.css';

export default function Filter({filterValue, updateFilter}) {
    const onChange = ({target}) => {
        updateFilter(target.value);
    }
    
    return <label className={css.label}>Find contacts by name<input className={css.input} type="text" onChange={onChange} value={filterValue} /></label>
}

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    updateFilter: PropTypes.func.isRequired,
};