import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import SavedDevider from './SavedDevider/SavedDevider';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/helpers';
import { mainApi } from '../../utils/MainApi';
import {
  MOVIE_ADD_THREE,
  MOVIE_ADD_TWO,
  MOVIE_SCREEN_LARGE,
  MOVIE_SCREEN_MEDIUM,
  MOVIE_SCREEN_MOBILE,
} from '../../utils/constants';

function SavedMovies({
  loggedIn,
  onCardDelete,
  savedMovies,
  setSavedMovies,
  movieFilter,
  setMovieFilter,
  isCardsLoading,
}) {
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
    if (innerWidth <= MOVIE_SCREEN_MOBILE) {
      setAddMovieButton(addMoviesButton + MOVIE_ADD_TWO);
    } else if (innerWidth <= MOVIE_SCREEN_MEDIUM) {
      setAddMovieButton(addMoviesButton + MOVIE_ADD_TWO);
    } else if (innerWidth <= MOVIE_SCREEN_LARGE) {
      setAddMovieButton(addMoviesButton + MOVIE_ADD_THREE);
    }
    setIsActiveButton(savedMovies.length >= addMoviesButton);
  }

  return (
    <>
      {isCardsLoading ? (
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
