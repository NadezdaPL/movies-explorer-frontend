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
        {width >= 500
          ? movies.slice(0, 3).map((movie) => (
              <li key={movie.movieId} className='cardlist__item-list'>
                <MoviesCard movie={movie} />
              </li>
            ))
          : width <= 500
          ? movies.slice(0, 2).map((movie) => (
              <li key={movie.movieId} className='cardlist__item-list'>
                <MoviesCard movie={movie} />
              </li>
            ))
          : ''}
      </ul>
    </section>
  );
}

export default MoviesCardList;
