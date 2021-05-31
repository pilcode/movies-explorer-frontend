import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({cards, onAddFavoriteCard, onDeleteFavoriteCard}) {

  return (
    <section className="elements" aria-label="Фильмы, которыe стоит посмотреть">
      {cards.map((card) => (
        <MoviesCard
          card={card}
          key={card.id}
          onAddFavoriteCard={onAddFavoriteCard}
          onDeleteFavoriteCard={onDeleteFavoriteCard}
        />
      ))}
    </section>
  )
}

export default MoviesCardList;
