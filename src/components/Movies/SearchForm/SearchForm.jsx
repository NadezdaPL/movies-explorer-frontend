import React, { useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../../../hooks/useForm';
import { getFromLocalStorage } from '../../../utils/helpers';

function SearchForm({ addMovies, movieFilter, setMovieFilter, isLoading }) {
  const { values, handleChange, setValues, setValid } = useForm();
  const [isSpan, setIsSpan] = React.useState(false);

  useEffect(() => {
    setValues({ name: getFromLocalStorage('querySearch') });
    if (values.name) {
      setValid(true);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (values.name) {
      addMovies(values.name);
    } else {
      setIsSpan(true);
    }
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
          minLength='1'
        />
        <button
          type='submit'
          className='search__button-form'
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Найти
        </button>
      </form>
      {isSpan && (
        <span className='search__span'>Нужно ввести ключевое слово</span>
      )}
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
