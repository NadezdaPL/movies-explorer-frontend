import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIE_SHORT } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';
import { qtyCards } from '../../../utils/helpers';

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
  onClickAddButton,
}) {
  const [viewedMovies, setViewedMovies] = useState([]);
  const [viewedFilteredMoviesQty, setViewedFilteredMoviesQty] = useState(0);
  React.useEffect(() => {
    setAddMovieButton(qtyCards());

    const handleSize = () => {
      setAddMovieButton(qtyCards());
    };
    handleSize();
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  React.useEffect(() => {
    setAddMovieButton(qtyCards());
  }, [movieFilter]);

  React.useEffect(() => {
    const viewedMoviesNewArr = movieFilter
      ? movies
          .filter((movie) => {
            return movie.duration < MOVIE_SHORT;
          })
          .slice(0, addMoviesButton)
      : movies.slice(0, addMoviesButton);
    setViewedMovies(viewedMoviesNewArr);
  }, [movies, movieFilter, addMoviesButton]);

  React.useEffect(() => {
    const allFilteredCardsQty = movieFilter
      ? movies.filter((movie) => {
          return movie.duration < MOVIE_SHORT;
        }).length
      : movies.length;
    setViewedFilteredMoviesQty(allFilteredCardsQty);
  }, [movies, movieFilter, addMoviesButton]);

  return (
    <>
      {isCardsLoading ? (
        <Preloader />
      ) : (
        <section className='cardlist'>
          <ul className='cardlist__list'>
            {viewedMovies.map((movie) => (
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
          {viewedFilteredMoviesQty > addMoviesButton ? (
            <button className='movies__button' onClick={onClickAddButton}>
              Ещё
            </button>
          ) : (
            ''
          )}
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
