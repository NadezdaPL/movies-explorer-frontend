import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__copyright'>
        <p className='footer__year'>&#169; {new Date().getFullYear()}</p>
        <nav className='footer__list'>
          <ul className='footer__links'>
            <li className='footer__links_item'>
              <Link
                href='https://practicum.yandex.ru/'
                className='footer__link'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className='footer__links_item'>
              <Link
                href='https://github.com/NadezdaPL'
                className='footer__link'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
