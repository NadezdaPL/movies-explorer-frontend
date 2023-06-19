import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import accountIcon from '../../images/accountIcon.svg';
import Drawer from '../Drawer/Drawer';

function Navigation() {
  // useState для проверки Drawer
  const [opened, setOpened] = React.useState(false);

  return (
    <div className='navigation'>
      <nav className='navigation__container'>
        <div className='navigation__movie-container'>
          <NavLink
            className='navigation__link navigavion__movies_active'
            to='/movies'
          >
            Фильмы
          </NavLink>
          <NavLink
            className='navigation__link navigavion__movies'
            to='/saved-movies'
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className='navigation__account-container'>
          <NavLink className='navigation__link' to='/profile'>
            Аккаунт
          </NavLink>
          <NavLink className='navigation__account-container_link' to='/profile'>
            <img
              src={accountIcon}
              className='navigation__account-container_icon'
              alt='Иконка профиля'
            />
          </NavLink>
        </div>
        <div className='navigation__burger-container'>
          <button
            className='navigation__burger_button'
            onClick={() => setOpened(true)}
          >
            <div className='navigation__burger_button_line' />
            <div className='navigation__burger_button_line' />
            <div className='navigation__burger_button_line' />
          </button>
          {opened && <Drawer onClickClose={() => setOpened(false)} />}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
