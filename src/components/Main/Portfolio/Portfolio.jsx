import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__container'>
        <li className='portfolio__container_links'>
          <div className='portfolio__container_link'>
            <a
              href='https://nadezdapl.github.io/how-to-learn/'
              className='portfolio__container_link'
              target='_blank'
              rel='noreferrer'
            >
              Статичный сайт
            </a>
            <img
              className='portfolio__container_image'
              src={arrow}
              alt='Ссылка на статичный сайт'
            />
          </div>
          <hr className='portfolio__container_line' />
        </li>
        <li className='portfolio__container_links'>
          <div className='portfolio__container_link'>
            <a
              href='https://nadezdapl.github.io/russian-travel/'
              className='portfolio__container_link'
              target='_blank'
              rel='noreferrer'
            >
              Адаптивный сайт
            </a>
            <img
              className='portfolio__container_image'
              src={arrow}
              alt='Ссылка на адаптивный сайт'
            />
          </div>
          <hr className='portfolio__container_line' />
        </li>
        <li className='portfolio__container_links'>
          <div className='portfolio__container_link'>
            <a
              href=' https://project-mesto.nomoredomains.monster'
              className='portfolio__container_link'
              target='_blank'
              rel='noreferrer'
            >
              Одностраничное приложение
            </a>
            <img
              className='portfolio__container_image'
              src={arrow}
              alt='Ссылка на одностраничное приложение'
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
