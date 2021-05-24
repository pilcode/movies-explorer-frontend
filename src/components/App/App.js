import './App.css';
import React from 'react';
// import { Switch } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
// import {CurrentUserContext} from '../contexts/CurrentUserContext';
// import ProtectedRoute from './ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';



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
        <Main></Main>
        {/* <Switch>
          <ProtectedRoute
            exact path="/"
            component={Main}
          />
        </Switch> */}
        <Footer />
      </div>

          // <Route path="/signin">
          //   <Login
          //     onLogin={hsndleLogin}
          //   />
          // </Route>
          // <Route path="/signup">
          //   <Register
          //     onRegister={handleRegister}
          //   />
          // </Route>

      /* <EditProfilePopup></EditProfilePopup> */

    // </CurrentUserContext.Provider>
  );
}

export default App;


