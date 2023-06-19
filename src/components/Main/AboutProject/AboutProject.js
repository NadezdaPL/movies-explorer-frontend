import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project' id='about-project'>
      <h2 className='project__title'>О проекте</h2>
      <hr className='project__line'></hr>
      <div className='project__container_content'>
        <div className='project__container_content_stage'>
          <h3 className='project__content_title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__content_text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__container_content_week'>
          <h3 className='project__content_title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__content_text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__container_week'>
        <div className='project__container_week_one'>1 неделя</div>
        <div className='project__container_week_four'>4 недели</div>
      </div>
      <div className='project__container_text'>
        <p className='project__container_text_backend'>Back-end</p>
        <p className='project__container_text_frontend'>Front-end</p>
      </div>
      {/* </div> */}
    </section>
  );
}

export default AboutProject;
