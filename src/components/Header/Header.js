import React from 'react';
import logoPath from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css'
// import './__button/header__button.css'

function Header({isOpen, onClose, onBurgerMenu}) {
  const {pathname }= useLocation();
  React.useEffect(() => {

  }, [pathname])

  let headerLink

  if(pathname === '/') {
    headerLink = (
      <>
        <nav className="navigation navigation__main">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to='/signup'>Регистрация</Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link navigation__link_type_square" to='/signin'>Войти</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  if(pathname === '/movies') {
    headerLink = (
      <>
        <Navigation />
        <button className="header__button-burger" type="button" onClick={onBurgerMenu}></button>
      </>
    );
  }

  // if(pathname === '/signin' || '/signup') {
  //   return null;
  // }

  return (

    <header className="header">
      <div className="header__wrapper">
        <img className="logo" src={logoPath} alt="Логотип проекта" />
        {headerLink}
      </div>
      <BurgerMenu
        isOpen={isOpen}
        onClose={onClose}
      />
    </header>
  );
}

export default Header;
