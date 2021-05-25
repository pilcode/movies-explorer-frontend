import React from 'react';
import './Portfolio.css';


function Portfolio() {
  return (
    <>
      <h3 className='portfolio'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://pilcode.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт</a>
          <div className='portfolio__arrow' ></div>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://pilcode.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          <div className='portfolio__arrow'></div>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://pilcode.github.io/mesto-react/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          <div className='portfolio__arrow'></div>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
