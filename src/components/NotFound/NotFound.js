import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound() {
  return (
    <section className="error">
      <p className="error__num">404</p>
      <p className="error__title">Страница не найдена</p>
      <Link className="error__link">Назад</Link>
    </section>
  )

}

export default NotFound;