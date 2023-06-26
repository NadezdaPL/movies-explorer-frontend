import React from 'react';
import './Drawer.css';
import { NavLink } from 'react-router-dom';
import account from '../../images/account.svg';

function Drawer({ onClickClose, opened }) {
  return (
    <div className={`overlay ${opened ? 'visible' : ''}`}>
      <nav className={`drawer ${opened ? 'drawer__active' : ''}`}>
        <button
          type='button'
          className='button__remove'
          onClick={onClickClose}
        />
        <ul className='drawer__list'>
          <li className='drawer__list_item'>
            <NavLink className='drawer__link' to='/'>
              Главная
            </NavLink>
          </li>
          <li className='drawer__list_item'>
            <NavLink className='drawer__link drawer__link_active' to='/movies'>
              Фильмы
            </NavLink>
          </li>
          <li className='drawer__list_item'>
            <NavLink className='drawer__link' to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div className='drawer__account-container'>
          <NavLink className='drawer__account_link' to='/profile'>
            <p className='drawer__account_text'>Аккаунт</p>
            <div className='drawer__account_item'>
              <img
                src={account}
                className='drawer__account-container_icon'
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
