import React from 'react';
import logoPath from '../../images/logo.svg';
import { Link } from "react-router-dom";
import Input from '../Input/Input';
import './Register.css';


function Register({ onRegister }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleNameChange(value) {
    setName(value);
  }

  function handleEmailChange(value) {
    setEmail(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name, email, password });
  }

  function handleValidity(value) {
    console.log('Валидация', value)
  }


  return (
    <div className="register">
      <img className="register__logo" src={logoPath} alt="Логотип проекта" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit} noValidate>

        <Input
          onChange={handleNameChange}
          className="register__input"
          label="Имя"
          placeholder="Имя"
          validity={{
            minLength: '2',
            maxLength: '20',
            required: true
          }}
          onValidate={ handleValidity }
          disabled={ false }
          value={email}
          customErrorMessage="Минимально допустимое количество символов: 2"
        />

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
          onValidate={ handleValidity }
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
          onValidate={ handleValidity }
          disabled={ false }
          value={password}
          customErrorMessage="Минимально допустимое количество символов: 8"
        />

        <button type="submit" className="register__button">Зарегистрироваться</button>
        <p className="register__question">Уже зарегистрированы? <Link className="register__question-link" to="/signin">Войти</Link></p>
      </form>

    </div>
  );
}

export default Register;