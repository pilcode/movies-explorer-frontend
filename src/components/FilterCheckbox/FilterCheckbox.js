import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox({ onChange} ) {

  function handleChange(event) {
    onChange(event.target.checked)
  }

  return (
    <div className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        id="switch"
        onChange={handleChange}
      />
      <label className="filter__label" htmlFor="switch"></label>
      <p className="filter__short-films">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;