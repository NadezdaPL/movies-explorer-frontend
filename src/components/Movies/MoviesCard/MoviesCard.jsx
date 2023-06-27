import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <div className='card'>
      <div className='card__context'>
        <div className='card__container'>
          <h2 className='card__title'>{movie.nameRU}</h2>
          <p className='card__duration'>{movie.duration}</p>
        </div>
        <button
          type='button'
          className={`card__like-button ${
            movie.isActive ? 'card__like-button_active' : ''
          }`}
        ></button>
      </div>
      <a
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
        className='card__link'
      >
        <img className='card__item' alt={movie.nameRU} src={movie.image} />
      </a>
    </div>
  );
}
export default MoviesCard;
