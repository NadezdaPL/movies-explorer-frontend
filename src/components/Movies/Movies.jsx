import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { moviesApi } from '../../utils/MoviesApi';
import {
  getFromLocalStorage,
  qtyAddCards,
  qtyCards,
  setToLocalStorage,
} from '../../utils/helpers';

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
  setIsCardsLoading,
  setIsLoading,
  isLoading,
}) {
  const [addMoviesButton, setAddMovieButton] = React.useState(0);
  const [isFind, setIsFind] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  function handleAddButton() {
    setAddMovieButton(addMoviesButton + qtyAddCards());
  }

  async function addMovies(query) {
    setAddMovieButton(qtyCards());
    setIsCardsLoading(true);
    let mineMovies = getFromLocalStorage('mineMovies');
    if (!mineMovies || mineMovies.length === 0) {
      const jwt = getFromLocalStorage('jwt');
      try {
        setIsLoading(true);
        mineMovies = await moviesApi.getInfo(jwt);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    const resultMoviesFilter = moviesFilter(query, mineMovies);
    setFilteredMovies(resultMoviesFilter);
    setCardList(mineMovies);
    setToLocalStorage('querySearch', query);
    setToLocalStorage('mineMovies', mineMovies);
    resultMoviesFilter.length === 0 ? setIsFind(true) : setIsFind(false);
    setIsCardsLoading(false);
  }

  React.useEffect(() => {
    const query = getFromLocalStorage('querySearch');
    if (query) addMovies(query);
  }, []);

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
          isLoading={isLoading}
        />
        <MoviesCardList
          movies={filteredMovies}
          addMoviesButton={addMoviesButton}
          setAddMovieButton={setAddMovieButton}
          onCardSave={onCardSave}
          savedCards={savedCards}
          handleDeleteCard={handleDeleteCard}
          movieFilter={movieFilter}
          isCardsLoading={isCardsLoading}
          onClickAddButton={handleAddButton}
        />
        {isFind && (
          <span className='movies__no-movies'>«Ничего не найдено»</span>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
