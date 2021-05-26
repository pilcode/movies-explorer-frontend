// import {CurrentUserContext} from '../../contexts/currentUserContext';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import {FavoriteCardsContext} from '../../contexts/favoriteCardsContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

// Массив фильмов
import { movies } from '../../utils/moviesList';



function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [cards, setCards] = React.useState(movies);
  const [favoriteCards, setFavoriteCards] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const history = useHistory();
  const { pathname }= useLocation();
  React.useEffect(() => {
    setIsBurgerMenuOpen(false);
  }, [pathname])

  function handleAddFavoriteCard(card) {
      const updatedFavoriteCards = [...favoriteCards];
      updatedFavoriteCards.push(card);
      setFavoriteCards(updatedFavoriteCards);
  }

  function handleDeleteFavoriteCard(card) {
    const updatedFavoriteCards = [...favoriteCards];
    const cardIndex = updatedFavoriteCards.findIndex((c) => c === card);
    updatedFavoriteCards.splice(cardIndex, 1);
    setFavoriteCards(updatedFavoriteCards);
  }

  console.log(favoriteCards)


  function handleSearch() {
    setIsLoading(true);
    setTimeout(() => {setIsLoading(false)}, 2000);
  }

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
    setIsBurgerMenuOpen(true);
  }

  function closeBurgerMenu () {
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
    <FavoriteCardsContext.Provider value={favoriteCards}>

      <div className="app">

        <Switch>
          {/* <ProtectedRoute
            exact path="/"
            component={Main}
          /> */}
          <Route exact path="/">
            {hederElement}
            <Main />
            {footerElement}
          </Route>

          <Route path="/movies">
            {hederElement}
            <Movies
              onLogin={handleLogin}
              cards={cards}
              isLoading={isLoading}
              onSearch={handleSearch}
              onAddFavoriteCard={handleAddFavoriteCard}
              onDeleteFavoriteCard={handleDeleteFavoriteCard}
            />
            {footerElement}
          </Route>

          <Route path="/saved-movies">
            {hederElement}
            <SavedMovies
              onLogin={handleLogin}
              cards={favoriteCards}
              // isLoading={isLoading}
              onSearch={handleSearch}
              onAddFavoriteCard={handleAddFavoriteCard}
              onDeleteFavoriteCard={handleDeleteFavoriteCard}
            />
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

    </FavoriteCardsContext.Provider>
  );
}

export default App;


