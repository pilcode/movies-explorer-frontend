import './AboutProject.css';
import React from 'react';

function AboutProject() {
  return (
    <section className='project' id="project">
      <h2 className='project__title'>О проекте</h2>
      <div className='project__about'>
        <div className='project__diploma-wrapper'>
          <p className='project__diploma'>Дипломный проект включал 5 этапов</p>
          <p className='project__diploma-about'>Составление плана, работу над бэкендом, верстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__diploma-wrapper'>
          <p className='project__diploma'>На выполнение диплома ушло 5 недель</p>
          <p className='project__diploma-about'>У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='project__timing'>
        <div className='project__timing-wrapper'>
          <p className='project__time'>1 неделя</p>
          <p className='project__time-about'>Back-end</p>
        </div>
        <div className='project__timing-wrapper project__timing-wrapper_size_big'>
          <p className='project__time project__time_color_grey'>4 недели</p>
          <p className='project__time-about'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;