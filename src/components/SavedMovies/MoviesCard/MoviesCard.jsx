import React from 'react';
import './MoviesCard.css';
import { converter } from '../../../utils/constants';

function MoviesCard({ movie, onCardDelete }) {
  function handleDeleteClick() {
    onCardDelete(movie._id);
  }

  return (
    <div className='card'>
      <div className='card__context'>
        <div className='card__container'>
          <h2 className='card__title'>{movie.nameRU}</h2>
          <p className='card__duration'>{converter(movie.duration)}</p>
        </div>
        <button
          type='button'
          className='card__button-remove'
          onClick={handleDeleteClick}
        ></button>
      </div>
      <img className='card__item' alt={movie.nameRU} src={movie.image} />
    </div>
  );
}
export default MoviesCard;
