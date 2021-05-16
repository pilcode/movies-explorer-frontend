import './App.css';
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import {CurrentUserContext} from '../contexts/CurrentUserContext';
// import ProtectedRoute from './ProtectedRoute';
import Header from '../Header/Header';



function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenu() {
    console.log('да сработало в апп открытие хендлер')
    setIsBurgerMenuOpen(true);
  }

  function closeBurgerMenu () {
    console.log('да сработало в апп при закрытии')

    setIsBurgerMenuOpen(false);
  }

  return (
    // <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {/* <p>Привет, Мир!</p> */}
        <Header
          isOpen={isBurgerMenuOpen}
          onClose={closeBurgerMenu}
          onBurgerMenu={handleBurgerMenu}
        />
        {/* <Switch>
          <ProtectedRoute
            exact path="/"
            // component={Main}
          />
          <Route path="/signin">
            <Login
              onLogin={hsndleLogin}
            />
          </Route>
          <Route path="/signup">
            <Register
              onRegister={handleRegister}
            />
          </Route>
        </Switch>  */}
      </div>
      /* <EditProfilePopup></EditProfilePopup> */

    // </CurrentUserContext.Provider>
  );
}

export default App;
