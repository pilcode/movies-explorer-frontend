import React from 'react';
import logoPath from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css'
// import './__button/header__button.css'

function Header({ isOpen, onClose, onBurgerMenu, loggedIn }) {
  const {pathname }= useLocation();
  React.useEffect(() => {

  }, [pathname])

  let headerLink

  if(!loggedIn) {
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

  if(loggedIn) {
    headerLink = (
      <>
        <Navigation />
        <button className="header__button-burger" type="button" onClick={onBurgerMenu}></button>
      </>
    );
  }

  return (

    <header className="header">
      <div className="header__wrapper">
        <Link className="header__link" to="/">
          <img className="logo" src={logoPath} alt="Логотип проекта" />
        </Link>
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
