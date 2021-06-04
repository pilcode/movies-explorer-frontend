import React from 'react';
import {FavoriteCardsContext} from '../../contexts/favoriteCardsContext';
import { useLocation } from 'react-router-dom';
import defaultMovieImage from '../../images/default-movie.jpg';
import './MoviesCard.css';


function Card({card, onAddFavoriteCard, onDeleteFavoriteCard}) {
  const { pathname }= useLocation();
  const favoriteCards = React.useContext(FavoriteCardsContext);
  const hasInFavoriteCards = !!favoriteCards.find((c) => c.movieId === card.movieId)

  function handleToggleFavoriteCard() {
    if(!hasInFavoriteCards) {
      onAddFavoriteCard(card);
    } else {
      onDeleteFavoriteCard(card);
    }
  }

  function handleDeleteFavoriteCard() {
    onDeleteFavoriteCard(card);
  }

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч' + minutes + 'м';
};

  const cardLikeButtonClassName = `element__button-like ${hasInFavoriteCards ? 'element__button-like_theme_red' : ''}`;
  let cardButton;

  if(pathname === '/movies') {
    cardButton = (
      <button type="button" className={cardLikeButtonClassName} onClick={handleToggleFavoriteCard} />
    )
  }

  if(pathname === '/saved-movies') {
    cardButton = (
      <button type="button" className="element__button-delete" onClick={handleDeleteFavoriteCard} />
    )
  }

  const imageMovie = card.image ? card.image : defaultMovieImage;

  return (
    <article className="element">
      <div className="element__wrapper">
        <a className="element__link-image" href={card.trailer} target="_blank" rel="noreferrer">
          <img className="element__image" alt={card.nameRU} src={imageMovie} />
        </a>
      </div>
      <div className="element__panel">
        <h2 className="element__title">{card.nameRU}</h2>
        {cardButton}
      </div>
      <p className="element__duration">{getTimeFromMins(card.duration)}</p>
    </article>
  )
}

export default Card;