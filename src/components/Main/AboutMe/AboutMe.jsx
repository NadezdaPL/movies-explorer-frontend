import React from 'react';
import './AboutMe.css';
import mine from '../../../images/mine.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className='student' id='about-me'>
      <h2 className='student__title'>Студент</h2>
      <div className='student__container'>
        <div className='student__content-container'>
          <h3 className='student__title-container'>Надежда</h3>
          <p className='student__profession-container'>
            Фронтенд-разработчик, 32 лет
          </p>
          <p className='student__description-container'>
            Я родилась и живу в Омске, закончила факультет мировой экономики
            ОмГУПС. Люблю путешествовать, играть в настольные игры, а ещё
            увлекаюсь йогой. Недавно начала кодить. С сентября 2022 года прохожу
            курс Веб-разработчик. В планах сделать несколько пет-проектов и
            найти классную работу.
          </p>
          <a
            href='https://github.com/NadezdaPL'
            className='student__github-container'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <div className='student__photo-container'>
          <img className='student__mine-container' src={mine} alt='Мое фото' />
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
