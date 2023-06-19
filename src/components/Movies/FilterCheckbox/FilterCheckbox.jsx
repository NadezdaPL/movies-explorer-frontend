import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='search__ckeckbox_content'>
      <input
        className='search__checkbox_content_input'
        type='checkbox'
        id='checkbox'
      />
      <label className='search__checkbox_content_label' htmlFor='switch' />
    </div>
  );
}

export default FilterCheckbox;
