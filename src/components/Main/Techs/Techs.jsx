import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__container'>
        <h3 className='techs__title-container'>7 технологий</h3>
        <p className='techs__text-container'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className='techs__stacks'>
        <ul className='techs__list'>
          <li className='techs__item-list'>
            <span className='techs__stack-item-list'>HTML</span>
          </li>
          <li className='techs__item-list'>
            <span className='techs__stack-item-list'>CSS</span>
          </li>
          <li className='techs__item-list'>
            <span className='techs__stack-item-list'>JS</span>
          </li>
          <li className='techs__item-list'>
            <span className='techs__stack-item-list'>React</span>
          </li>
          <li className='techs__item-list'>
            <span className='techs__stack-item-list'>Git</span>
          </li>
          <li className='techs__item-list'>
            <span className='techs__stack-item-list'>Express.js</span>
          </li>
          <li className='techs__item-list'>
            <span className='techs__stack-item-list'>mongoDB</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
