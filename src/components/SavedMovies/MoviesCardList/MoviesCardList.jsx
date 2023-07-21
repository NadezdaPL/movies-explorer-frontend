import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList({
  movies,
  setAddMovieButton,
  addMoviesButton,
  onCardDelete,
  movieFilter,
}) {
  React.useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 500) {
      setAddMovieButton(5);
    } else if (innerWidth <= 950) {
      setAddMovieButton(8);
    } else if (innerWidth <= 1280) {
      setAddMovieButton(12);
    }

    const handleSize = (e) => {
      if (e.target.innerWidth <= 500) {
        setAddMovieButton(5);
      } else if (e.target.innerWidth <= 950) {
        setAddMovieButton(8);
      } else if (e.target.innerWidth <= 1280) {
        setAddMovieButton(12);
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
                return movie.duration < 40;
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
              <li key={movie.movieId} className='cardlist__item-list'>
                <MoviesCard
                  movie={movie}
                  movies={movies}
                  onCardDelete={onCardDelete}
                  key={movies.id}
                />
              </li>
            ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
