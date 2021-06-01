import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({cards, filterCards, errorMessage, isLoading, onSearch, onAddFavoriteCard, onDeleteFavoriteCard, onMore}) {
  // const moreButtonElement = (
  //   cards.length
  //     ? (cards.length < filterCards.lenght
  //         ? (<button className="movies__more" onClick={onMore}>Еще</button>)
  //         : null
  //       )
  //     : (cardsError
  //         ? ('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
  //         : ('Ничего не найдено')
  //       )
  // )

  const moreButtonElement = cards.length < filterCards.length
    ? (<button className="movies__more" onClick={onMore}>Еще</button>)
    : null

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
      {moreButtonElement}
      {!!errorMessage && (<div className="movies__message">{errorMessage}</div>)}
    </main>
  );
}

export default Movies;
