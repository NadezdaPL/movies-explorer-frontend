import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  // useState для проверки неактивной кнопки
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  console.log(setButtonDisabled);

  return (
    <section className='search'>
      <form className='search__form' name='searching'>
        <input
          className='search__input-form'
          type='search'
          placeholder='Фильм'
          required
        />
        <button
          disabled={buttonDisabled ? true : false}
          type='submit'
          className='search__button-form'
        >
          Найти
        </button>
      </form>
      <div className='search__checkbox'>
        <FilterCheckbox />
        <span className='search__span-checkbox'>Короткометражки</span>
      </div>
    </section>
  );
}

export default SearchForm;
