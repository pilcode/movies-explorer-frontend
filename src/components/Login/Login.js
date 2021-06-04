import React from 'react';
import { Link } from "react-router-dom";
import logoPath from '../../images/logo.svg';
import Input from '../Input/Input';
import './Login.css';



function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [allValid, setAllValid] = React.useState({email: false, password: false});

  function handleValidity(target, value) {
    const valid = {
      ...allValid,
      [target]: value
    }
    setAllValid(valid)
  }

  const isValid = Object.values(allValid).every(el => el)


  function handleEmailChange(value) {
    setEmail(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <div className="authorization">
      <img className="authorization__logo" src={logoPath} alt="Логотип проекта" />
      <h1 className="authorization__title">Рады видеть!</h1>
      <form className="authorization__form" onSubmit={handleSubmit} noValidate >
        <Input
          onChange={handleEmailChange}
          className="authorization__input"
          type="email"
          label="E-mail"
          placeholder="e-mail"
          validity={{
            minLength: '2',
            maxLength: '20',
            required: true
          }}
          onValidate={ (value) => handleValidity('email', value) }
          disabled={ false }
          value={email}
          customErrorMessage="Неверный формат email"
        />

        <Input
          onChange={handlePasswordChange}
          className="authorization__input"
          type="password"
          label="Пароль"
          placeholder="Пароль"
          validity={{
            minLength: '8',
            maxLength: '20',
            required: true
          }}
          onValidate={ (value) => handleValidity('password', value) }
          disabled={ false }
          value={password}
          customErrorMessage="Минимально допустимое количество символов: 8"
        />

        <button type="submit" className="authorization__button" disabled={!isValid}>Войти</button>
        <p className="authorization__question">Ещё не зарегистрированы? <Link className="authorization__question-link" to="/signup">Регистрация</Link></p>
      </form>

    </div>
  );
}

export default Login;


        /* <Input
          className="authorization__test2"
          inline
          type="password"
          label="Наше поле"
          placeholder="Плейсхолдер"
          validate={{
            minLength: '8',
            maxLength: '20',
            required: true
          }}
          disabled={ false }
        /> */
        // <label className="authorization__label" htmlFor="login-password">Пароль</label>
        // <input
        //   ref={loginPasswordError}
        //   className="authorization__input authorization__input_type_password"
        //   type="password"
        //   name="loginPassword"
        //   value={password}
        //   id="login-password"
        //   placeholder="Пароль"
        //   minLength="8"
        //   maxLength="20"
        //   onChange={handlePasswordChange}
        //   // required
        // />
        // <span className="authorization__input-error" id="login-password-error">{errorPasswordMassage}</span>
        // <label className="authorization__label" htmlFor="login-email">E-mail</label>
        // <input
        //   ref={loginEmailError}
        //   className="authorization__input authorization__input_type_email"
        //   type="email"
        //   name="loginEmail"
        //   placeholder="Email"
        //   value={email}
        //   id="login-email"
        //   minLength="2"
        //   maxLength="30"
        //   onChange={handleEmailChange}
        //   // required
        // />
        // <span className="authorization__input-error" id="login-email-error">{errorEmailMassage}</span>

