import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project' id='about-project'>
      <h2 className='project__title'>О проекте</h2>
      <div className='project__container'>
        <div className='project__content'>
          <h3 className='project__title-content'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__text-content'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__content'>
          <h3 className='project__title-content'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__text-content'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__week'>
        <p className='project__one-week'>1 неделя</p>
        <p className='project__four-week'>4 недели</p>
      </div>
      <div className='project__text'>
        <p className='project__backend-text'>Back-end</p>
        <p className='project__frontend-text'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
