import React from 'react';
import './Drawer.css';
import { NavLink } from 'react-router-dom';
import account from '../../images/account.svg';

function Drawer({ onClickClose, opened }) {
  // для проверки активной ссылки
  const linkActive = 'drawer__link drawer__link_active';
  const link = 'drawer__link';

  return (
    <div className={`overlay ${opened ? 'visible' : ''}`}>
      <nav className={`drawer ${opened ? 'drawer__active' : ''}`}>
        <button
          type='button'
          className='drawer__remove'
          onClick={onClickClose}
        />
        <ul className='drawer__list'>
          <li className='drawer__item-list'>
            <NavLink
              className={({ isActive }) => (isActive ? linkActive : link)}
              to='/'
            >
              Главная
            </NavLink>
          </li>
          <li className='drawer__item-list'>
            <NavLink
              className={({ isActive }) => (isActive ? linkActive : link)}
              to='/movies'
            >
              Фильмы
            </NavLink>
          </li>
          <li className='drawer__item-list'>
            <NavLink
              className={({ isActive }) => (isActive ? linkActive : link)}
              to='/saved-movies'
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div className='drawer__account'>
          <NavLink className='drawer__link-account' to='/profile'>
            <p className='drawer__text-account'>Аккаунт</p>
            <div className='drawer__item-account'>
              <img
                src={account}
                className='drawer__icon-account'
                alt='Иконка профиля'
              />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Drawer;
