import React from 'react';
import Input from '../Input/Input';
import {CurrentUserContext} from '../../contexts/currentUserContext';


import './Profile.css';

function Profile({ onSignout, onUpdateUser }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [editMode, setEditMode] = React.useState(false);
  const [allValid, setAllValid] = React.useState({});

  function handleValidity(target, value) {
    const valid = {
      ...allValid,
      [target]: value
    }
    setAllValid(valid)
  }

  const isValid = Object.values(allValid).every(el => el)


  function handleNameChange(value) {
    setName(value);
  }

  function handleEmailChange(value) {
    setEmail(value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, email })
    setEditMode(false)
  }

  function handleEditProfile() {
    setTimeout(() => {
      setEditMode(true)
    }, 0)
  }

  const toggleButtonElement = !editMode
    ? (<button type="button" className="profile__button" onClick={handleEditProfile}>Редактировать</button>)
    : (<button type="submit" className="profile__button" disabled={!isValid}>Сохранить</button>)
    // : (<button type="submit" className={"profile__button" + classInvalid}>Сохранить</button>)


  return (
    <div className="profile">
      <h3 className="profile__title">Привет, {currentUser.name}!</h3>
      {/* <h1 className="profile__title">Привет, Виталий!</h1> */}
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <Input
          inline
          onChange={handleNameChange}
          className="profile__input"
          label="Имя"
          placeholder="Имя"
          validity={{
            minLength: '2',
            maxLength: '20',
            required: true,
            pattern: "^[\\sA-Za-zА-Яа-я-]+$"
          }}
          onValidate={ (value) => handleValidity('name', value) }
          disabled={ !editMode }
          value={currentUser.name}
          customErrorMessage="Минимально количество символов: 2"
        />

        <Input
          inline
          onChange={handleEmailChange}
          className="profile__input"
          type="email"
          label="E-mail"
          placeholder="e-mail"
          validity={{
            minLength: '2',
            maxLength: '20',
            required: true
          }}
          onValidate={ (value) => handleValidity('email', value) }
          disabled={ !editMode }
          value={currentUser.email}
          customErrorMessage="Неверный формат email"
        />

        {toggleButtonElement}
        <button type='button' className="profile__button" onClick={onSignout}>Выйти из аккаунта</button>
      </form>
    </div>

  )
}

export default Profile;
