import React from 'react';
import './Preloader.css';

function Preloader() {
  const [isLoading, setIsLoading] = React.useState(true);
  console.log(setIsLoading);

  return (
    <div className={`preloader ${isLoading ? 'preloader_active' : ''}`}>
      <div className='preloader'>
        <div className='preloader__container'>
          <span className='preloader__round'></span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
