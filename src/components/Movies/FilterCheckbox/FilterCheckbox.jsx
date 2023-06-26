import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter'>
      <input className='filter__input' type='checkbox' id='checkbox' />
      <label className='filter__label' />
    </div>
  );
}

export default FilterCheckbox;
