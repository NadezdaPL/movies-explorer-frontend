import React from 'react';
import './Drawer.css';
import { NavLink } from 'react-router-dom';
import accountIcon from '../../images/accountIcon.svg';

function Drawer({ onClickClose, opened }) {
  return (
    <div className={`drawer_hidden ${opened ? 'drawer_visible' : ''}`}>
      <div className={`drawer ${opened ? 'drawer_active' : ''}`}>
        <div className='drawer__button'>
          <button className='button__remove' onClick={onClickClose} />
        </div>
        <div className='drawer__links'>
          <NavLink className='drawer__link' to='/'>
            Главная
          </NavLink>
          <NavLink className='drawer__link drawer__link_active' to='/movies'>
            Фильмы
          </NavLink>
          <NavLink className='drawer__link' to='/saved-movies'>
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className='drawer__account-container'>
          <NavLink className='drawer__account-link' to='/profile'>
            Аккаунт
          </NavLink>
          <NavLink className='drawer__account-container_link' to='/profile'>
            <img
              src={accountIcon}
              className='drawer__account-container_icon'
              alt='Иконка профиля'
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
