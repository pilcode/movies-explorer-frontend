import React from 'react';
import Input from '../Input/Input';
// import { Link } from "react-router-dom";
import './Profile.css';

function Profile({ onLogin, onSignout }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [editMode, setEditMode] = React.useState(false);

  function handleNameChange(value) {
    setName(value);
  }

  function handleEmailChange(value) {
    setEmail(value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ name, email });
  }

  function handleValidity(value) {
    console.log('Валидация', value)
  }


  function handleEditProfile() {
    setTimeout(() => {
      setEditMode(true)
    }, 0)
  }

  const toggleButtonElement = !editMode
    ? (<button type="button" className="profile__button" onClick={handleEditProfile}>Редактировать</button>)
    : (<button type="submit" className="profile__button">Сохранить</button>)


  return (
    <div className="profile">
      {/* <h3 className="profile__title">Привет, {name}!</h3> */}
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <Input
          inline
          onChange={handleNameChange}
          className="z__input"
          label="Имя"
          placeholder="Имя"
          validity={{
            minLength: '2',
            maxLength: '20',
            required: true
          }}
          onValidate={ handleValidity }
          disabled={ !editMode }
          value={email}
          customErrorMessage="Минимально допустимое количество символов: 2"
        />

        <Input
          inline
          onChange={handleEmailChange}
          className="z__input"
          type="email"
          label="E-mail"
          placeholder="e-mail"
          validity={{
            minLength: '2',
            maxLength: '20',
            required: true
          }}
          onValidate={ handleValidity }
          disabled={ !editMode }
          value={email}
          customErrorMessage="Неверный формат email"
        />

        {toggleButtonElement}
        <button type='button' className="profile__button" onClick={onSignout}>Выйти из аккаунта</button>
      </form>
    </div>

  )
}

export default Profile;
