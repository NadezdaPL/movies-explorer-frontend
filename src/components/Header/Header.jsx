import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  // useState для проверки данных в хедере
  const [loggedIn, setLoggedIn] = React.useState(true);
  const navigate = useNavigate();
  console.log(setLoggedIn);

  return (
    <header className='header'>
      <Link className='header__logo' to='/'></Link>
      {loggedIn ? (
        <Navigation />
      ) : (
        <div className='header__box'>
          <button
            type='button'
            className='header__button'
            onClick={() => navigate('/signup')}
          >
            Регистрация
          </button>
          <button
            type='button'
            className='header__button'
            onClick={() => navigate('/signin')}
          >
            Войти
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
