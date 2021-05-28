import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <p className="footer__copyright">&copy; 2020</p>
        <ul className="footer__link-list">
          <li className="footer__link-item">
            <a className="footer__link" href="https://praktikum.yandex.ru/web" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="https://github.com/pilcode" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link"  href="https://www.instagram.com/yellowpchela/" target="_blank" rel="noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
