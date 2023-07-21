import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  addMoviesButton,
  movie,
  setAddMovieButton,
  onCardSave,
  savedCards,
  handleDeleteCard,
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
                return movie.duration < 40
              })
              .slice(0, addMoviesButton)
              .map((movie, index) => (
                <li key={index} className='cardlist__item-list'>
                  <MoviesCard
                    movie={movie}
                    movies={movies}
                    onCardSave={onCardSave}
                    key={movies._id}
                    savedCards={savedCards}
                    handleDeleteCard={handleDeleteCard}
                  />
                </li>
              ))
          : movies.slice(0, addMoviesButton).map((movie, index) => (
              <li key={index} className='cardlist__item-list'>
                <MoviesCard
                  movie={movie}
                  movies={movies}
                  onCardSave={onCardSave}
                  key={movies._id}
                  savedCards={savedCards}
                  handleDeleteCard={handleDeleteCard}
                />
              </li>
            ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
