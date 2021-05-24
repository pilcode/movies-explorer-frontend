import './NavTab.css'
import React from 'react';
import { Link } from 'react-router-dom';

function NavTab() {
  return (

    <nav className="nav">
      <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to='/movies'>О проекте</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to='/saved-movies'>Технологии</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to='/about-me'>Студент</Link>
          </li>
      </ul>
    </nav>
  );
}

export default NavTab;
