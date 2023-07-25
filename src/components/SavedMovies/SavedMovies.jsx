import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
// import { items } from '../../utils/movies.js';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import SavedDevider from './SavedDevider/SavedDevider';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/helpers';
import { mainApi } from '../../utils/MainApi';

function SavedMovies({
  loggedIn,
  onCardDelete,
  savedMovies,
  setSavedMovies,
  movieFilter,
  setMovieFilter,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [addMoviesButton, setAddMovieButton] = React.useState(0);
  const [isActiveButton, setIsActiveButton] = React.useState(
    savedMovies.length === 0 || savedMovies.length <= addMoviesButton
  );

  React.useEffect(() => {
    const jwt = getFromLocalStorage('jwt');
    mainApi
      .getSavedCard(jwt)
      .then((data) => {
        setSavedMovies(data);
        setToLocalStorage('mineSavedMovies', data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAddButton() {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 500) {
      setAddMovieButton(addMoviesButton + 2);
    } else if (innerWidth <= 950) {
      setAddMovieButton(addMoviesButton + 2);
    } else if (innerWidth <= 1280) {
      setAddMovieButton(addMoviesButton + 3);
    }
    setIsActiveButton(savedMovies.length >= addMoviesButton);
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header loggedIn={loggedIn} />
          <main className='movies'>
            <SearchForm
              movieFilter={movieFilter}
              setMovieFilter={setMovieFilter}
            />
            <MoviesCardList
              addMoviesButton={addMoviesButton}
              movies={savedMovies}
              setAddMovieButton={setAddMovieButton}
              onCardDelete={onCardDelete}
              movieFilter={movieFilter}
            />
            {!isActiveButton && (
              <button className='movies__button' onClick={handleAddButton}>
                Ещё
              </button>
            )}
            <SavedDevider />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default SavedMovies;
