import React from 'react';
import logoPath from '../../images/logo.svg';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
// import './Header.css'
import './__button/header__button.css'

//все фильмы, сохраненные фильмы и профиль(аккаунт)
function Header({isOpen, onClose, onBurgerMenu}) {
  const {pathname }= useLocation();
  // console.log('сработало в бургерменю')

  // const [isOpenBurger, setIsOpenBurger] = React.useState(false);

  // let openClass = '';
  // if (isOpen) openClass = ' burger__opened';

  React.useEffect(() => {

  }, [pathname])

  let headerLink

  // function handleBurgerClick() {
  //   setIsOpenBurger(!isOpenBurger)
  // }

  if(pathname === '/') {
    headerLink = (
      <>
        <Navigation />
        {/* <button className="burger-button" type="button" onClick={onBurgerMenu}></button> */}
        <button className="header__button-burger" type="button" onClick={onBurgerMenu}></button>

        {/* <div className="header__checkbox">
          <input type="checkbox" className="header__checkbox-input" id="checkbox" onClick={onBurgerMenu}></input>
          <label className="header__checkbox-label" htmlFor="checkbox"></label>
        </div> */}

      </>
    );
  }

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
      {/* <div className={"header__burger-menu" + openClass }> */}
    </header>
  );
}

export default Header;