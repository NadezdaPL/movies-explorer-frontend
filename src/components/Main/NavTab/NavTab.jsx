import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav__buttons'>
      <a href='#about-project' className='nav__button'>
        О проекте
      </a>
      <a href='#techs' className='nav__button'>
        Технологии
      </a>
      <a href='#about-me' className='nav__button'>
        Студент
      </a>
    </nav>
  );
}

export default NavTab;
