import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <hr className='techs__line'></hr>
      <div className='techs__container'>
        <h3 className='techs__container_title'>7 технологий</h3>
        <p className='techs__container_text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className='techs__stacks'>
        <span className='techs__stack'>HTML</span>
        <span className='techs__stack'>CSS</span>
        <span className='techs__stack'>JS</span>
        <span className='techs__stack'>React</span>
        <span className='techs__stack'>Git</span>
        <span className='techs__stack'>Express.js</span>
        <span className='techs__stack'>mongoDB</span>
      </div>
    </section>
  );
}

export default Techs;
