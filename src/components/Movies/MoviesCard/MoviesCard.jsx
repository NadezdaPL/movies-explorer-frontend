import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <div className='card'>
      <div className='card__context'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <p className='card__duration'>{movie.duration}</p>
        <button
          type='button'
          className={`card__like_button ${
            movie.isActive ? 'card__like_button_active' : ''
          }`}
        ></button>
      </div>
      <img className='card__item' alt={movie.nameRU} src={movie.image} />
    </div>
  );
}
export default MoviesCard;
