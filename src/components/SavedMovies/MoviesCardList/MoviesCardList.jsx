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
  onCardDelete,
  movieFilter,
}) {



  const [width, setWidth] = React.useState(window.innerWidth);


  React.useEffect(() => {
    const handleSize = (e) => {
      setWidth(e.target.innerWidth);
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
              .slice(0, width)
              .map((movie) => (
                  <MoviesCard
                    movie={movie}
                    movies={movies}
                    onCardDelete={onCardDelete}
                    key={movie.id || movie._id}
                  />
              ))
          : movies.slice(0, width).map((movie) => (
                <MoviesCard
                  movie={movie}
                  movies={movies}
                  onCardDelete={onCardDelete}
                  key={movie.id || movie._id}
                />
            ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
