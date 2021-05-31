import React from 'react';
import myFoto from '../../images/my_foto.jpg';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';


function AboutMe() {
  return (
    <section className='student' id="student">
      <h2 className='student__title'>Студент</h2>
      <div className='student__wrapper'>
        <div className='student__info-wrapper'>
          <p className='student__subtitle'>Ирина</p>
          <p className='student__info'>Фронтенд-разработчик, 32года</p>
          <p className='student__about'>Первую половину жизни жила и училась в Красноярском крае. Высшее образование по специальности "Экономист в ракотостроении". Люблю слушать музыку, хожу в походы, катаюсь на горных лыжах и сноуборде. Заканчиваю обучение на факультете Яндекс.Практикума, планирую пойти на курс "Дизайн интерфейсов".</p>
          <ul className='student__link-list'>
            <li className='student__link-item'>
              <a className='student__info-link' href="https://www.instagram.com/yellowpchela/" target="_blank" rel="noreferrer">Instagram</a>
            </li>
            <li className='student__link-item'>
              <a className='student__info-link' href="https://github.com/pilcode" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className='student__foto' src={myFoto} alt="Фотография студентки" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
