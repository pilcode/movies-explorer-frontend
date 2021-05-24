import React from 'react';
import logoPath from '../../images/logo.svg';
import './Register.css';

import { Link } from "react-router-dom";


function Register() {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');


  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setPassword(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // onLogin({email, password});
  // }

  return (
    <div className="register">
      <img className="register__logo" src={logoPath} alt="Логотип проекта" />
      <h3 className="register__title">Добро пожаловать!</h3>
      {/* <form className="register__form" onSubmit={handleSubmit}> */}
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input
          className="register__input register__input_type_name"
          type="email"
          name="loginEmail"
          // value={email}
          id="login-name"
          // placeholder="Email"
          minLength="2"
          maxLength="30"
          // onChange={handleEmailChange}
          required
        />


        <label className="register__label">E-mail</label>
        <input
          className="register__input register__input_type_email"
          type="email"
          name="loginEmail"
          // value={email}
          id="login-email"
          // placeholder="Email"
          minLength="2"
          maxLength="30"
          // onChange={handleEmailChange}
          required
        />

        <label className="register__label">Пароль</label>
        <input
          className="register__input register__input_type_password"
          type="password"
          name="loginPassword"
          // value={password}
          id="login-password"
          // placeholder="Пароль"
          minLength="2"
          maxLength="20"
          // onChange={handlePasswordChange}
          required
        />

        <button type="submit" className="register__button">Зарегистрироваться</button>
        <p className="register__question">Уже зарегистрированы? <Link className="register__question-link" to="/">Войти</Link></p>
      </form>

    </div>
  );
}

export default Register;