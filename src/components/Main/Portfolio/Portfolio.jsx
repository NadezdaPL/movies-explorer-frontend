import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/arrow.svg';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__container'>
        <li className='portfolio__container_links'>
          <Link
            className='portfolio__container_link'
            href='https://nadezdapl.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <img
              className='portfolio__container_image'
              src={arrow}
              alt='Ссылка на статичный сайт'
            />
          </Link>
        </li>
        <li className='portfolio__container_links'>
          <Link
            className='portfolio__container_link'
            to='https://nadezdapl.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <img
              className='portfolio__container_image'
              src={arrow}
              alt='Ссылка на адаптивный сайт'
            />
          </Link>
        </li>
        <li className='portfolio__container_links'>
          <Link
            className='portfolio__container_link'
            to='https://project-mesto.nomoredomains.monster'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <img
              className='portfolio__container_image'
              src={arrow}
              alt='Ссылка на одностраничное приложение'
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
