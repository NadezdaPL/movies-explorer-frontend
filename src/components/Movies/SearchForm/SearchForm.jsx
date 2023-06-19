import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <input
          className='search__form_input'
          type='search'
          placeholder='Фильм'
          required
        />
        <button type='submit' className='search__form_button'>
          Найти
        </button>
      </form>
      <div className='search__checkbox'>
        <FilterCheckbox />
        <span className='search__checkbox_span'>Короткометражки</span>
      </div>
      <hr className='search__line' />
    </section>
  );
}

export default SearchForm;
