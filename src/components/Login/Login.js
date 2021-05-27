import React from 'react';
import { Link } from "react-router-dom";
import logoPath from '../../images/logo.svg';
import './Login.css';



function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorEmailMassage, setErrorEmailMassage] = React.useState('');
  const [errorPasswordMassage, setErrorPasswordMassage] = React.useState('');

  const loginEmailError = React.useRef(null);
  const loginPasswordError = React.useRef(null);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setErrorEmailMassage(loginEmailError.current.validationMessage);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setErrorPasswordMassage(loginPasswordError.current.validationMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <div className="authorization">
      <img className="authorization__logo" src={logoPath} alt="Логотип проекта" />
      <h3 className="authorization__title">Рады видеть!</h3>
      <form className="authorization__form" onSubmit={handleSubmit}>
        <label className="authorization__label" htmlFor="login-email">E-mail</label>
        <input
          ref={loginEmailError}
          className="authorization__input authorization__input_type_email"
          type="email"
          name="loginEmail"
          value={email}
          id="login-email"
          minLength="2"
          maxLength="30"
          onChange={handleEmailChange}
          // required
        />
        <span className="authorization__input-error" id="login-email-error">{errorEmailMassage}</span>


        <label className="authorization__label" htmlFor="login-password">Пароль</label>
        <input
          ref={loginPasswordError}
          className="authorization__input authorization__input_type_password"
          type="password"
          name="loginPassword"
          value={password}
          id="login-password"
          placeholder="Пароль"
          minLength="8"
          maxLength="20"
          onChange={handlePasswordChange}
          // required
        />
        <span className="authorization__input-error" id="login-password-error">{errorPasswordMassage}</span>

        <button type="submit" className="authorization__button">Войти</button>
        <p className="authorization__question">Ещё не зарегистрированы? <Link className="authorization__question-link" to="/signup">Регистрация</Link></p>
      </form>

    </div>
  );
}

export default Login;
