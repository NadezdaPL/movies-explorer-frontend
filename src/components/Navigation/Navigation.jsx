import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import account from '../../images/account.svg';
import Drawer from '../Drawer/Drawer';

function Navigation() {
  const linkActive = 'navigation__link navigation__active-link';
  const link = 'navigation__link';
  const [opened, setOpened] = React.useState(false);

  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__content'>
          <NavLink
            className={({ isActive }) => (isActive ? linkActive : link)}
            to='/movies'
          >
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__content'>
          <NavLink
            className={({ isActive }) => (isActive ? linkActive : link)}
            to='/saved-movies'
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <div className='navigation__account'>
        <NavLink className='navigation__link' to='/profile'>
          Аккаунт
          <div className='navigation__link-account navigation__active-link'>
            <img
              src={account}
              className='navigation__icon-account'
              alt='Иконка профиля'
            />
          </div>
        </NavLink>
      </div>
      <div className='navigation__burger'>
        <div
          role='button'
          className='navigation__button-burger'
          onClick={() => setOpened(true)}
        >
          <div className='navigation__line-burger' />
          <div className='navigation__line-burger' />
          <div className='navigation__line-burger' />
        </div>
        {opened && (
          <Drawer opened={opened} onClickClose={() => setOpened(!true)} />
        )}
      </div>
    </nav>
  );
}

export default Navigation;
