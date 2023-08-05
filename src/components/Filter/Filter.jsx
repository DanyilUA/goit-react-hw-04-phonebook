import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';


const Filter = ({ value, onChange }) => {
  return (
    <label className={ css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}