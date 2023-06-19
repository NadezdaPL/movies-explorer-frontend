import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { items } from '../../utils/movies.js';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import SavedDevider from './SavedDevider/SavedDevider';

function SavedMovies() {
  // useState проверить лоудер
  const [isLoading, setIsLoading] = React.useState(false);
  console.log(setIsLoading);

  return (
    <section className='movies'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <SearchForm />
          <MoviesCardList movies={items} />
          <SavedDevider />
          <Footer />
        </>
      )}
    </section>
  );
}

export default SavedMovies;
