import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className='not-found'>
      <section className='not-found__section'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <button
          type='button'
          className='not-found__button'
          onClick={() => navigate('/')}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;
