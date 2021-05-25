import './App.css';
import React from 'react';
// import { Switch } from 'react-router-dom';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/currentUserContext';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';



function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();
  const { pathname }= useLocation();
  React.useEffect(() => {
    setIsBurgerMenuOpen(false);
  }, [pathname])




  function handleLogin() {
    console.log('Сработало в апп handleLogin')
    setLoggedIn(true);
    history.push('/')
  }

  function handleSignout() {
    // localStorage.removeItem('token', data.token);
    // setUserEmail('');
    setLoggedIn(false);
    history.push('/')
  };


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
      loggedIn={loggedIn}
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
          <Route exact path="/">
            {hederElement}
            <Main></Main>
            {footerElement}
          </Route>

          <Route path="/profile">
            {hederElement}
            <Profile
              onLogin={handleLogin}
              onSignout={handleSignout}
            />
          </Route>

          <Route path="/signin">
            <Login
              onLogin={handleLogin}
            />
          </Route>

          <Route path="/signup">
            <Register
              onLogin={handleLogin}
            />
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


