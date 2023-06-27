import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        <li className='nav-tab__item'>
          <a href='#about-project' className='nav-tab__button'>
            О проекте
          </a>
        </li>
        <li className='nav-tab__item'>
          <a href='#techs' className='nav-tab__button'>
            Технологии
          </a>
        </li>
        <li className='nav-tab__item'>
          <a href='#about-me' className='nav-tab__button'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
