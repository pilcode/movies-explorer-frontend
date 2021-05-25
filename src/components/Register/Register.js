import React from 'react';
import logoPath from '../../images/logo.svg';
import './Register.css';

import { Link } from "react-router-dom";


function Register() {
  // const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');


  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }


  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setPassword(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // onLogin({ nsme, email, password });
  // }

  return (
    <div className="register">
      <img className="register__logo" src={logoPath} alt="Логотип проекта" />
      <h3 className="register__title">Добро пожаловать!</h3>
      {/* <form className="register__form" onSubmit={handleSubmit}> */}
      <form className="register__form">
        <label className="register__label" htmlFor="login-name">Имя</label>
        <input
          className="register__input register__input_type_name"
          type="email"
          name="loginEmail"
          // value={email}
          id="login-name"
          // placeholder="Email"
          // minLength="2"
          // maxLength="30"
          // onChange={handleNameChange}
          // required
        />
        <span className="register__input-error" id="register-name-error" />

        <label className="register__label" htmlFor="login-email">E-mail</label>
        <input
          className="register__input register__input_type_email"
          type="email"
          name="loginEmail"
          // value={email}
          id="login-email"
          // placeholder="Email"
          // minLength="2"
          // maxLength="30"
          // onChange={handleEmailChange}
          // required
        />
        <span className="register__input-error" id="register-email-error" />


        <label className="register__label" htmlFor="login-password">Пароль</label>
        <input
          className="register__input register__input_type_password"
          type="password"
          name="loginPassword"
          // value={password}
          id="login-password"
          // placeholder="Пароль"
          // minLength="2"
          // maxLength="20"
          // onChange={handlePasswordChange}
          // required
        />
        <span className="register__input-error" id="register-name-error" />


        <button type="submit" className="register__button">Зарегистрироваться</button>
        <p className="register__question">Уже зарегистрированы? <Link className="register__question-link" to="/signin">Войти</Link></p>
      </form>

    </div>
  );
}

export default Register;