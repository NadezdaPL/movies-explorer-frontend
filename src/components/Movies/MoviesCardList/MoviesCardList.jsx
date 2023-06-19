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
    <div className='cardlist'>
      {width <= 500
        ? movies.slice(0, 5).map((movie) => {
            return <MoviesCard key={movie.movieId} movie={movie} />;
          })
        : width <= 950
        ? movies.slice(0, 8).map((movie) => {
            return <MoviesCard key={movie.movieId} movie={movie} />;
          })
        : movies.map((movie) => {
            return <MoviesCard key={movie.movieId} movie={movie} />;
          })}
    </div>
  );
}

export default MoviesCardList;
