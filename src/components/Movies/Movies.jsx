import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { moviesApi } from '../../utils/MoviesApi';
// import { filter } from '../../utils/constants';
import { setToLocalStorage } from '../../utils/helpers';

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

  function handleAddButton() {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 500) {
      setAddMovieButton(addMoviesButton + 2);
    } else if (innerWidth <= 950) {
      setAddMovieButton(addMoviesButton + 2);
    } else if (innerWidth <= 1280) {
      setAddMovieButton(addMoviesButton + 3);
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
