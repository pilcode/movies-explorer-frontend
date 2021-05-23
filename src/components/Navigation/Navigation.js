import './Navigation.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (

    <nav className="navigation">
      <ul className="navigation__list">
          <li className="navigation__item">
            <Link className="navigation__link" to='/movies'>Фильмы</Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to='/saved-movies'>Сохраненные фильмы</Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link navigation__link_type_oval" to='/profile'>Аккаунт</Link>
          </li>
      </ul>
    </nav>
  );
}

export default Navigation;

// const menus = {
//   startMenu: [
//     { name: 'Фильмы', link: '/movies' },
//     { name: 'Сохраненные фильмы', link: '/saved-movies' },
//     { name: 'Аккаунт', link: '/profile', classMod: "navigation__link_type_oval" },
//   ],
  // burgerMenu: [
  //   { name: 'Главная', link: '/' },
  //   { name: 'Фильмы', link: '/movies' },
  //   { name: 'Сохраненные фильмы', link: '/saved-movies' },
  //   { name: 'Аккаунт', link: '/profile', classMod: "navigation__link_type_oval" },
  // ]
// }

// const startMenu = [
//   { name: 'Фильмы', link: '/movies', classMod: ''},
//   { name: 'Сохраненные фильмы', link: '/saved-movies', classMod: ''},
//   { name: 'Аккаунт', link: '/profile', classMod: "navigation__link_type_oval" },
// ]
// function Navigation() {
//   return (

    // <nav className="navigation">
    //   <ul className="navigation__list">
    //     { startMenu.map((item) => (
    //       <li className="navigation__item" key={index}>
    //         <Link className={"navigation__link" + (!!item.classMod ? ' ' + item.classMod : '')  } to={item.link}>{item.name}</Link>
    //       </li>
    //     )) }
    //   </ul>
    // </nav>

//   );
// }
