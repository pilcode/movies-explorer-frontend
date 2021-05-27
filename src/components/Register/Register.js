import React from 'react';
import logoPath from '../../images/logo.svg';
import './Register.css';


import { Link } from "react-router-dom";


function Register({ onRegister }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorNameMassage, setErrorNameMassage] = React.useState('');
  const [errorEmailMassage, setErrorEmailMassage] = React.useState('');
  const [errorPasswordMassage, setErrorPasswordMassage] = React.useState('');


  const registerNameError = React.useRef(null);
  const registerEmailError = React.useRef(null);
  const registerPasswordError = React.useRef(null);

  function handleNameChange(e) {
    setName(e.target.value);
    setErrorNameMassage(registerNameError.current.validationMessage);
    console.dir(registerNameError.current.validationMessage)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setErrorEmailMassage(registerEmailError.current.validationMessage);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setErrorPasswordMassage(registerPasswordError.current.validationMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name, email, password });
  }

  return (
    <div className="register">
      <img className="register__logo" src={logoPath} alt="Логотип проекта" />
      <h3 className="register__title">Добро пожаловать!</h3>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label" htmlFor="login-name">Имя</label>
        <input
          ref={registerNameError}
          className="register__input register__input_type_name"
          type="text"
          name="name"
          id="login-name"
          onChange={handleNameChange}
          value={name}
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="register__input-error" id="register-name-error" >{errorNameMassage}</span>

        <label className="register__label" htmlFor="login-email">E-mail</label>
        <input
          ref={registerEmailError}
          className="register__input register__input_type_email"
          type="email"
          name="loginEmail"
          id="login-email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="register__input-error" id="login-email-error">{errorEmailMassage}</span>


        <label className="register__label" htmlFor="login-password">Пароль</label>
        <input
          ref={registerPasswordError}
          className="register__input register__input_type_password"
          type="password"
          name="loginPassword"
          id="login-password"
          value={password}
          placeholder="Пароль"
          onChange={handlePasswordChange}
          minLength="8"
          maxLength="20"
          required
        />
        <span className="register__input-error" id="login-password-error">{errorPasswordMassage}</span>


        <button type="submit" className="register__button">Зарегистрироваться</button>
        <p className="register__question">Уже зарегистрированы? <Link className="register__question-link" to="/signin">Войти</Link></p>
      </form>

    </div>
  );
}

export default Register;