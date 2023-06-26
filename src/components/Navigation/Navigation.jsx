import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import account from '../../images/account.svg';
import Drawer from '../Drawer/Drawer';

function Navigation() {
  // useState для проверки Drawer
  const [opened, setOpened] = React.useState(false);

  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__content'>
          <NavLink
            className='navigation__link navigation__link_active'
            to='/movies'
          >
            Фильмы
          </NavLink>
          <NavLink className='navigation__link' to='/saved-movies'>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className='navigation__account-container'>
          <NavLink className='navigation__link' to='/profile'>
            Аккаунт
            <div
              className='navigation__account_link navigation__link_active'
            >
              <img
                src={account}
                className='navigation__account_icon'
                alt='Иконка профиля'
              />
            </div>
          </NavLink>
        </li>
        <li className='navigation__burger-container'>
          <div
            role='button'
            className='navigation__burger_button'
            onClick={() => setOpened(true)}
          >
            <div className='navigation__burger_line' />
            <div className='navigation__burger_line' />
            <div className='navigation__burger_line' />
          </div>
          {opened && <Drawer onClickClose={() => setOpened(false)} />}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
