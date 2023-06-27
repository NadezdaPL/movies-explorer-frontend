import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { items } from '../../utils/movies.js';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies() {
  // useState для проверки лоудера
  const [isLoading, setIsLoading] = React.useState(false);
  console.log(setIsLoading);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main className='movies'>
            <SearchForm />
            <MoviesCardList movies={items} />
            <button className='movies__button'>Ещё</button>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Movies;
