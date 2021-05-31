import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({cards, isLoading, onSearch, onAddFavoriteCard, onDeleteFavoriteCard}) {
  return (
    <main className="movies">
      <SearchForm
        onSearch={onSearch}
      />
      {isLoading && <Preloader />}
      <MoviesCardList
        cards={cards}
        onAddFavoriteCard={onAddFavoriteCard}
        onDeleteFavoriteCard={onDeleteFavoriteCard}
      />
      <button className="movies__more">Еще</button>
    </main>
  );
}

export default Movies;
