import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
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
  isCardsLoading,
  setIsCardsLoading
}) {
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
    } else {
      setAddMovieButton(addMoviesButton + MOVIE_ADD_THREE);
    }
    setIsActiveButton(cardList.length === addMoviesButton);
  }

  React.useEffect(() => {
    handleAddButton(); 
    window.addEventListener('resize', handleAddButton);
    return () => {
      window.removeEventListener('resize', handleAddButton);
    };
  }, []);

  function addMovies(query) {
    setIsCardsLoading(true);
    moviesApi.getInfo().then((movieResult) => {
      const resultMoviesFilter = moviesFilter(query, movieResult);
      setCardList(resultMoviesFilter);
      setToLocalStorage('mineMovies', resultMoviesFilter);
      setToLocalStorage('querySearch', query);
      resultMoviesFilter.length === 0 ? setIsFind(true) : setIsFind(false);
      setIsActiveButton(resultMoviesFilter.length <= addMoviesButton);
      setIsCardsLoading(false);
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
          isCardsLoading={isCardsLoading}
          isActiveButton={isActiveButton}
          handleAddButton={handleAddButton}
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
  );
}

export default Movies;
