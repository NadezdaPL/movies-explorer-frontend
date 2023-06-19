import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  // useState для проверки данных в хедере
  const [loggedIn, setLoggedIn] = React.useState(true);
  console.log(setLoggedIn);

  return (
    <header className='header'>
      <Link className='header__logo' to='/'></Link>
      {loggedIn ? (
        <Navigation />
      ) : (
        <nav className='header__nav'>
          <NavLink className='header__link' to='/signup'>
            Регистрация
          </NavLink>
          <NavLink className='header__link' to='/signin'>
            Войти
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
