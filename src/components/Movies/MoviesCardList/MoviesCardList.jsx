import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  const [width, setWidth] = React.useState(window.innerWidth);

  // useEffect для проверки рендера карточек в зависимости от ширины экрана
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
        {width <= 500
          ? movies.slice(0, 5).map((movie) => (
              <li key={movie.movieId} className='cardlist__list_item'>
                <MoviesCard movie={movie} />
              </li>
            ))
          : width <= 950
          ? movies.slice(0, 8).map((movie) => (
              <li key={movie.movieId} className='cardlist__list_item'>
                <MoviesCard movie={movie} />
              </li>
            ))
          : movies.map((movie) => (
              <li key={movie.movieId} className='cardlist__list_item'>
                <MoviesCard movie={movie} />
              </li>
            ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
