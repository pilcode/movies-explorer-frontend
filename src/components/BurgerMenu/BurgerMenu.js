import './BurgerMenu.css'
// import './burger__opened/burger__opened.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

function BurgerMenu({isOpen, onClose}) {
  console.log('сработало в бургерменю')
  let openClass = '';
  if (isOpen) openClass = ' burger__opened';

  return (
    <nav className={"burger" + openClass}>
      <button className="burger__button-close" onClick={onClose}></button>
      <ul className="burger__list">
        <li className="burger__item">
          <NavLink className="burger__link" activeClassName="burger__link_active" exact to='/'>Главная</NavLink>
        </li>
        <li className="burger__item">
          <NavLink className="burger__link" activeClassName="burger__link_active" to='/movies'>Фильмы</NavLink>
        </li>
        <li className="burger__item">
          <NavLink className="burger__link" activeClassName="burger__link_active" to='/saved-movies'>Сохраненные фильмы</NavLink>
        </li>
        <li className="burger__item">
          <NavLink className="burger__link burger__link_type_oval" activeClassName="burger__link_active" to='/profile'>Аккаунт</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
