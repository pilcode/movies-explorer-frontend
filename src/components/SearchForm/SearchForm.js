import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm({onSearch}) {
  const [search, setSearch] = React.useState('');
  const [isShortMovies, setIsShortMovies] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleSearchInput(event) {
    setSearch(event.target.value)
    setErrorMessage('')
  }

  function handleSearchSubmit(value) {
    let v

    if (value !== undefined) {
      v = value
    } else {
      v = isShortMovies
    }

    if (search) {
      onSearch(search, v)
      setErrorMessage('')
    } else {
      setErrorMessage('Нужно ввести ключевое слово')
    }
  }

  function handleShortMovies(value) {
    setIsShortMovies(value)
    handleSearchSubmit(value)
  }

  return (
    <section className="search-form" aria-label="Поиск">
      <div className="search-form__wrapper">
        <input
          className="search-form__input search-form__input_tupe_search"
          type="text"
          name="searchForm"
          placeholder="Фильм"
          required
          onChange={handleSearchInput}
          value={search || ''}
        />
        <button className="search-form__button" type="button" onClick={() => handleSearchSubmit()}>Поиск</button>
        {!!errorMessage && (<span className="search-form__error">{errorMessage}</span>)}
      </div>
      <FilterCheckbox
        onChange={handleShortMovies}
      />
    </section>
  );
}

export default SearchForm;
