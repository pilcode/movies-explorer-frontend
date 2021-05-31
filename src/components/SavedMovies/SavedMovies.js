import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


function SavedMovies({cards, isLoading, onSearch, onAddFavoriteCard, onDeleteFavoriteCard}) {

  // const slicedCards = cards.slice(0, 16)


  return (
    <main className="movies__favorite">
      <SearchForm
        onSearch={onSearch}
      />
      {isLoading && <Preloader />}

      <MoviesCardList
        cards={cards}
        onAddFavoriteCard={onAddFavoriteCard}
        onDeleteFavoriteCard={onDeleteFavoriteCard}
      />
    </main>
  );
}

export default SavedMovies;
