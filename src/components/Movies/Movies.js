import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({cards, isLoading, onSearch, onAddFavoriteCard, onDeleteFavoriteCard}) {

  const slicedCards = cards.slice(0, 16)


  return (
    <main className="movies">
      <SearchForm
        onSearch={onSearch}
      />
      {isLoading && <Preloader />}
      <MoviesCardList
        cards={slicedCards}
        onAddFavoriteCard={onAddFavoriteCard}
        onDeleteFavoriteCard={onDeleteFavoriteCard}
      />
      <button className="movies__more">Еще</button>
    </main>
  );
}

export default Movies;
