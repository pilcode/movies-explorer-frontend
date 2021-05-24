import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';


function Portfolio() {
  return (
    <>
      <h3 className='portfolio'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/'>Статичный сайт</Link>
          <div className='portfolio__arrow' ></div>
        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/'>Адаптивный сайт</Link>
          <div className='portfolio__arrow'></div>
        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__link' to='/'>Одностраничное приложение</Link>
          <div className='portfolio__arrow'></div>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
