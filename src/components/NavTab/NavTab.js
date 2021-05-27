import './NavTab.css'
import React from 'react';
import { Link } from 'react-scroll';


function NavTab() {
  return (

    <nav className="nav">
      <ul className="nav__list">
          <li className="nav__item">
            <Link
              className="nav__link"
              to='project'
              spy={true}
              smooth={true}
              offset={+10}
              duration= {500}
            >О проекте</Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to='techs'
              spy={true}
              smooth={true}
              offset={+10}
              duration= {500}
            >Технологии</Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to='student'
              spy={true}
              smooth={true}
              offset={+10}
              duration= {500}
            >Студент</Link>
          </li>
      </ul>
    </nav>
  );
}

export default NavTab;
