import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import Footer from '../Footer/Footer';
import SavedDevider from './SavedDevider/SavedDevider';
import { getFromLocalStorage } from '../../utils/helpers';
import { mainApi } from '../../utils/MainApi';

function SavedMovies({
  loggedIn,
  onCardDelete,
  setIsCardsLoading,
  filteredMovies,
  setFilteredMovies,
}) {
  const [movieFilter, setMovieFilter] = React.useState(false);

  async function addMovies(query) {
    setIsCardsLoading(true);
    let mineSavedMovies = getFromLocalStorage('mineSavedMovies');
    if (!mineSavedMovies) {
      const jwt = getFromLocalStorage('jwt');
      mineSavedMovies = await mainApi.getSavedCard(jwt);
    }
    const resultMoviesFilter = moviesFilter(query, mineSavedMovies);
    setFilteredMovies(resultMoviesFilter.reverse());
    setIsCardsLoading(false);
  }

  React.useEffect(() => {
    addMovies('');
  }, []);

  function moviesFilter(query, cardList) {
    const filteredList = cardList?.length
      ? cardList.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(query.toLowerCase());
        })
      : [];
    return filteredList;
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm
          addMovies={addMovies}
          movieFilter={movieFilter}
          setMovieFilter={setMovieFilter}
        />
        <MoviesCardList
          movies={filteredMovies}
          onCardDelete={onCardDelete}
          movieFilter={movieFilter}
        />
        <SavedDevider />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
