import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <hr className='footer__line' />
      <div className='footer__copyright'>
        <p className='footer__year'>&#169; {new Date().getFullYear()}</p>
        <div className='footer__links'>
          <a
            href='https://practicum.yandex.ru/'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            href='https://github.com/NadezdaPL'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
