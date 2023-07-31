import React from 'react';
import './FilterCheckbox.css';
import { setToLocalStorage } from '../../../utils/helpers';

function FilterCheckbox({ movieFilter, setMovieFilter }) {
  function handleButtonClick(e) {
    setMovieFilter(e.target.checked);
    setToLocalStorage('checkedButton', e.target.checked);
  }

  return (
    <div className='filter'>
      <input
        className='filter__input'
        type='checkbox'
        id='checkbox'
        onChange={handleButtonClick}
        checked={movieFilter}
        value={undefined}
      />
      <label className='filter__label' />
    </div>
  );
}

export default FilterCheckbox;
