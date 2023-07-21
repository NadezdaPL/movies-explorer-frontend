import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ movieFilter, setMovieFilter }) {
  function handleButtonClick(e) {
    setMovieFilter(e.target.checked);
  }

  return (
    <div className='filter'>
      <input
        className='filter__input'
        type='checkbox'
        id='checkbox'
        onChange={handleButtonClick}
        checked={movieFilter}
      />
      <label className='filter__label' />
    </div>
  );
}

export default FilterCheckbox;
