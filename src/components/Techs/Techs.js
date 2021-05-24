import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Tехнологии</h2>
      <p className='techs__subtitle'>7 технологий</p>
      <p className='techs__about'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        <li className='techs__item'>HTML</li>
        <li className='techs__item'>CSS</li>
        <li className='techs__item'>JS</li>
        <li className='techs__item'>React</li>
        <li className='techs__item'>Git</li>
        <li className='techs__item'>Express.js</li>
        <li className='techs__item'>MongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
