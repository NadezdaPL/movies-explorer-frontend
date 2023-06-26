import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__container'>
        <h3 className='techs__container_title'>7 технологий</h3>
        <p className='techs__container_text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className='techs__stacks'>
        <ul className='techs__list'>
          <li className='techs__list_item'>
            <span className='techs__stacks_stack'>HTML</span>
          </li>
          <li className='techs__list_item'>
            <span className='techs__stacks_stack'>CSS</span>
          </li>
          <li className='techs__list_item'>
            <span className='techs__stacks_stack'>JS</span>
          </li>
          <li className='techs__list_item'>
            <span className='techs__stacks_stack'>React</span>
          </li>
          <li className='techs__list_item'>
            <span className='techs__stacks_stack'>Git</span>
          </li>
          <li className='techs__list_item'>
            <span className='techs__stacks_stack'>Express.js</span>
          </li>
          <li className='techs__list_item'>
            <span className='techs__stacks_stack'>mongoDB</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
