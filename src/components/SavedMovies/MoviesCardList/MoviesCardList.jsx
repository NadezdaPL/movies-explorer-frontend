import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import {
  MOVIE_SCREEN_EIGHT,
  MOVIE_SCREEN_FIVE,
  MOVIE_SCREEN_LARGE,
  MOVIE_SCREEN_MEDIUM,
  MOVIE_SCREEN_MOBILE,
  MOVIE_SCREEN_TWELVE,
  MOVIE_SHORT,
} from '../../../utils/constants';

function MoviesCardList({
  movies,
  setAddMovieButton,
  addMoviesButton,
  onCardDelete,
  movieFilter,
}) {
  React.useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= MOVIE_SCREEN_MOBILE) {
      setAddMovieButton(MOVIE_SCREEN_FIVE);
    } else if (innerWidth <= MOVIE_SCREEN_MEDIUM) {
      setAddMovieButton(MOVIE_SCREEN_EIGHT);
    } else if (innerWidth <= MOVIE_SCREEN_LARGE) {
      setAddMovieButton(MOVIE_SCREEN_TWELVE);
    }

    const handleSize = (e) => {
      if (e.target.innerWidth <= MOVIE_SCREEN_MOBILE) {
        setAddMovieButton(MOVIE_SCREEN_FIVE);
      } else if (e.target.innerWidth <= MOVIE_SCREEN_MEDIUM) {
        setAddMovieButton(MOVIE_SCREEN_EIGHT);
      } else if (e.target.innerWidth <= MOVIE_SCREEN_LARGE) {
        setAddMovieButton(MOVIE_SCREEN_TWELVE);
      }
    };
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <section className='cardlist'>
      <ul className='cardlist__list'>
        {movieFilter
          ? movies
              .filter((movie) => {
                return movie.duration < MOVIE_SHORT;
              })
              .slice(0, addMoviesButton)
              .map((movie) => (
                <li key={movie.movieId} className='cardlist__item-list'>
                  <MoviesCard
                    movie={movie}
                    movies={movies}
                    onCardDelete={onCardDelete}
                    key={movies.id}
                  />
                </li>
              ))
          : movies.slice(0, addMoviesButton).map((movie) => (
              <li key={movie.id} className='cardlist__item-list'>
                <MoviesCard
                  movie={movie}
                  movies={movies}
                  onCardDelete={onCardDelete}
                />
              </li>
            ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
