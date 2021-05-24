import './App.css';
import React from 'react';
// import { Switch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/currentUserContext';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';


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

  const hederElement = (
    <Header
      isOpen={isBurgerMenuOpen}
      onClose={closeBurgerMenu}
      onBurgerMenu={handleBurgerMenu}
    />
  )

  const footerElement = (
    <Footer />
  )

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <CurrentUserContext.Provider>

      <div className="app">

        <Switch>
          {/* <ProtectedRoute
            exact path="/"
            component={Main}
          /> */}
          <Route path="/" exact>
            {hederElement}
            <Main></Main>
            {footerElement}
          </Route>


          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>


        </Switch>
        {/* <Footer /> */}
      </div>


      {/* <EditProfilePopup></EditProfilePopup> */}

    </CurrentUserContext.Provider>
  );
}

export default App;


