import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  // useState для проверки неактивной кнопки
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  console.log(setButtonDisabled);

  return (
    <div className='search'>
      <form className='search__form' name='searching'>
        <input
          className='search__form_input'
          type='search'
          placeholder='Фильм'
          required
        />
        <button
          disabled={buttonDisabled ? true : false}
          type='submit'
          className='search__form_button'
        >
          Найти
        </button>
      </form>
      <div className='search__checkbox'>
        <FilterCheckbox />
        <span className='search__checkbox_span'>Короткометражки</span>
      </div>
    </div>
  );
}

export default SearchForm;
