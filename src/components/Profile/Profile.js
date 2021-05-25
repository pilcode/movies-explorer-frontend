import React from 'react';
// import { Link } from "react-router-dom";
import './Profile.css';

function Profile({ name, onLogin, onSignout }) {

  function handleSubmit(e) {
    e.preventDefault();
    // onLogin({ name, email });
    onLogin();
  }


  return (
    <div className="profile">
      {/* <h3 className="profile__title">Привет, {name}!</h3> */}
      <h3 className="profile__title">Привет, Виталий!</h3>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__wrapper">
          <label className="profile__label" htmlFor="login-name">Имя</label>
          <input
            className="profile__input profile__input_type_name"
            type="email"
            name="loginEmail"
            // value={name}
            id="login-name"
            // placeholder="Email"
            // minLength="2"
            // maxLength="30"
            // onChange={handleEmailChange}
            // required
          />
        </div>

        <div className="profile__wrapper">
          <label className="profile__label" htmlFor="login-email">E-mail</label>
          <input
            className="profile__input profile__input_type_email"
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
        </div>

        <button type="submit" className="profile__button">Редактировать</button>
        <button type='button' className="profile__button" onClick={onSignout}>Выйти из аккаунта</button>
      </form>
    </div>

  )
}

export default Profile;
