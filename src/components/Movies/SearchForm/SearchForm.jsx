import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../../../hooks/useForm';

function SearchForm({ addMovies, movieFilter, setMovieFilter }) {
  const { values, handleChange } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    addMovies(values.name);
  }

  return (
    <section className='search'>
      <form className='search__form' name='searching'>
        <input
          className='search__input-form'
          type='search'
          placeholder='Фильм'
          required
          name='name'
          value={values.name || ''}
          onChange={handleChange}
        />
        <button
          disabled={values.name ? false : true}
          type='submit'
          className='search__button-form'
          onClick={handleSubmit}
        >
          Найти
        </button>
      </form>
      <div className='search__checkbox'>
        <FilterCheckbox
          movieFilter={movieFilter}
          setMovieFilter={setMovieFilter}
        />
        <span className='search__span-checkbox'>Короткометражки</span>
      </div>
    </section>
  );
}

export default SearchForm;
