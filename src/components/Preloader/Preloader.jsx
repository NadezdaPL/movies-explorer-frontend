import React from 'react';
import './Preloader.css';

function Preloader({ isCardsLoading }) {
  return (
    <div className={`preloader ${isCardsLoading ? 'preloader_active' : ''}`}>
      <div className='preloader'>
        <div className='preloader__container'>
          <span className='preloader__round'></span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
