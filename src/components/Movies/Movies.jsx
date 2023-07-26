import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { moviesApi } from '../../utils/MoviesApi';
import { setToLocalStorage } from '../../utils/helpers';
import {
  MOVIE_ADD_THREE,
  MOVIE_ADD_TWO,
  MOVIE_SCREEN_LARGE,
  MOVIE_SCREEN_MEDIUM,
  MOVIE_SCREEN_MOBILE,
} from '../../utils/constants';

function Movies({
  loggedIn,
  onCardSave,
  savedCards,
  cardList,
  setCardList,
  handleDeleteCard,
  movieFilter,
  setMovieFilter,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [addMoviesButton, setAddMovieButton] = React.useState(0);
  const [isActiveButton, setIsActiveButton] = React.useState(
    cardList.length <= addMoviesButton
  );
  const [isFind, setIsFind] = React.useState(false);

  function handleAddButton() {
    const innerWidth = window.innerWidth;
    if (innerWidth <= MOVIE_SCREEN_MOBILE) {
      setAddMovieButton(addMoviesButton + MOVIE_ADD_TWO);
    } else if (innerWidth <= MOVIE_SCREEN_MEDIUM) {
      setAddMovieButton(addMoviesButton + MOVIE_ADD_TWO);
    } else if (innerWidth <= MOVIE_SCREEN_LARGE) {
      setAddMovieButton(addMoviesButton + MOVIE_ADD_THREE);
    }
    setIsActiveButton(cardList.length === addMoviesButton);
  }

  function addMovies(query) {
    setIsLoading(true);
    moviesApi.getInfo().then((movieResult) => {
      const resultMoviesFilter = moviesFilter(query, movieResult);
      setCardList(resultMoviesFilter);
      setToLocalStorage('mineMovies', resultMoviesFilter);
      setIsLoading(false);
      setToLocalStorage('querySearch', query);
      resultMoviesFilter.length === 0 ? setIsFind(true) : setIsFind(false);
      setIsActiveButton(resultMoviesFilter.length <= addMoviesButton);
    });
  }

  function moviesFilter(query, cardList) {
    const filteredList = cardList.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(query.toLowerCase());
    });
    return filteredList;
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
              cardList={cardList}
              addMovies={addMovies}
              movieFilter={movieFilter}
              setMovieFilter={setMovieFilter}
              setIsFind={setIsFind}
            />
            <MoviesCardList
              movies={cardList}
              addMoviesButton={addMoviesButton}
              setAddMovieButton={setAddMovieButton}
              onCardSave={onCardSave}
              savedCards={savedCards}
              handleDeleteCard={handleDeleteCard}
              movieFilter={movieFilter}
            />
            {isFind && (
              <span className='movies__no-movies'>«Ничего не найдено»</span>
            )}
            {!isActiveButton && (
              <button className='movies__button' onClick={handleAddButton}>
                Ещё
              </button>
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Movies;
