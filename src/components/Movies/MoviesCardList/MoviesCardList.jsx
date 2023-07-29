import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  MOVIE_SCREEN_EIGHT,
  MOVIE_SCREEN_FIVE,
  MOVIE_SCREEN_LARGE,
  MOVIE_SCREEN_MEDIUM,
  MOVIE_SCREEN_MOBILE,
  MOVIE_SCREEN_TWELVE,
  MOVIE_SHORT,
} from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList({
  movies,
  addMoviesButton,
  movie,
  setAddMovieButton,
  onCardSave,
  savedCards,
  handleDeleteCard,
  movieFilter,
  isCardsLoading,
}) {
  React.useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= MOVIE_SCREEN_MOBILE) {
      setAddMovieButton(MOVIE_SCREEN_FIVE);
    } else if (innerWidth <= MOVIE_SCREEN_MEDIUM) {
      setAddMovieButton(MOVIE_SCREEN_EIGHT);
    } else if (innerWidth <= MOVIE_SCREEN_LARGE) {
      setAddMovieButton(MOVIE_SCREEN_TWELVE);
    } else if (innerWidth > MOVIE_SCREEN_LARGE) {
      setAddMovieButton(MOVIE_SCREEN_TWELVE);
    }

    const handleSize = (e) => {
      if (e.target.innerWidth <= MOVIE_SCREEN_MOBILE) {
        setAddMovieButton(MOVIE_SCREEN_FIVE);
      } else if (e.target.innerWidth <= MOVIE_SCREEN_MEDIUM) {
        setAddMovieButton(MOVIE_SCREEN_EIGHT);
      } else if (e.target.innerWidth <= MOVIE_SCREEN_LARGE) {
        setAddMovieButton(MOVIE_SCREEN_TWELVE);
      } else {
        setAddMovieButton(MOVIE_SCREEN_TWELVE);
      }
    };

    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <>
      {isCardsLoading ? (
        <Preloader />
      ) : (
        <section className='cardlist'>
          <ul className='cardlist__list'>
            {movieFilter
              ? movies
                  .filter((movie) => {
                    return movie.duration < MOVIE_SHORT;
                  })
                  .slice(0)
                  .map((movie) => (
                      <MoviesCard
                        movie={movie}
                        movies={movies}
                        onCardSave={onCardSave}
                        savedCards={savedCards}
                        handleDeleteCard={handleDeleteCard}
                        key={movie.id}
                      />
                  ))
              : movies.slice(0, addMoviesButton).map((movie) => (
                    <MoviesCard
                      movie={movie}
                      movies={movies}
                      onCardSave={onCardSave}
                      savedCards={savedCards}
                      handleDeleteCard={handleDeleteCard}
                      key={movie.id}
                    />
                ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
