import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <p className='footer__about'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__wrapper'>
        <p className='footer__copyright'>&copy; 2020</p>
        <ul className='footer__link-list'>
          <li className='footer__link-item'>
            <Link className='footer__link' to='/'>Яндекс.Практикум</Link>
          </li>
          <li className='footer__link-item'>
            <Link className='footer__link' to='/'>Github</Link>
          </li>
          <li className='footer__link-item'>
            <Link className='footer__link' to='/'>Facebook</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
