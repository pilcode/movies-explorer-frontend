import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox() {
  return (
    <div className="filter">
      <input className="filter__checkbox" type="checkbox" id="switch" />
      <label className="filter__label" htmlFor="switch"></label>
      <p className="filter__short-films">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;