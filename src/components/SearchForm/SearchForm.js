import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm({onSearch}) {
  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <input
          className="search-form__input search-form__input_tupe_search"
          type="text"
          name="searchForm"
          placeholder="Фильм"
        />
        <button className="search-form__button" type="button" onClick={onSearch}>Поиск</button>
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
