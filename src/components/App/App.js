import {CurrentUserContext} from '../../contexts/currentUserContext';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { FavoriteCardsContext } from '../../contexts/favoriteCardsContext';
import { getInitialCards } from '../../utils/moviesApi';
import { register, login, getMe, updateUser, likeCard, deleteCard } from '../../utils/mainApi';


import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltipe from '../InfoTooltipe/InfoTooltipe';



// Массив фильмов
// import { movies } from '../../utils/moviesList';



function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [filterCards, setFilterCards] = React.useState([]);
  const [favoriteCards, setFavoriteCards] = React.useState([]);
  const [filterFavoriteCards, setFilterFavoriteCards] = React.useState([]);
  const [sliceCounter, setSliceCounter] = React.useState(0);
  const [infoTooltip, setInfoTooltip] = React.useState({ isOpen: false, infoText: '', infoImage: '' });
  const [cardsError, setCardsError] = React.useState('');
  const [windowWidth, setWindowWidth] = React.useState(null);
  const [user, setUser] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const history = useHistory();
  const { pathname }= useLocation();
  React.useEffect(() => {
    setIsBurgerMenuOpen(false);
    if (pathname === '/saved-movies') {
      setFilterFavoriteCards([])
    }
  }, [pathname])

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);

    // setTimeout
    let countCards = 0;
    if (window.innerWidth > 1024) {
      countCards = 16
    } else if (window.innerWidth > 425) {
      countCards = 8
    } else {
      countCards = 5
    }
    setSliceCounter(countCards)

    function handleResize(event) {
      setWindowWidth(event.target.innerWidth);
    }

    function debounce(f, ms) {
      let isCooldown = false;
      return function() {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
      };
    }

    const handleResizeWithDebounce = debounce(handleResize, 500);

    window.addEventListener('resize', handleResizeWithDebounce)
    if (localStorage.movies) {
      setCards(JSON.parse(localStorage.movies));
    }
  }, [])

  //=========================
  const checkToken = React.useCallback(() => {

    if (localStorage.token) {
      getMe({ token: localStorage.token })
        .then(({data}) => {
          if(data.email) {
            setUser(data);
            setLoggedIn(true);
          }
        })
        .catch((error) => {
          if(error.status === 401) {
            setInfoTooltip({ isOpen: true, infoText: 'Токен не передан или передан не в том формате.', infoImage: 'error' })
          } else if(error.status === 401) {
            setInfoTooltip({ isOpen: true, infoText: 'Переданный токен некорректен.', infoImage: 'error' })
          } else {
            setInfoTooltip({ isOpen: true, infoText: 'Что-то пошло не так! Попробуйте еще раз.', infoImage: 'error' })
          }
        })
    }
  }, [])

  React.useEffect(() => {
    checkToken();
  }, [checkToken])

  function handleLogin({ email, password }) {
    login({ email, password })
    .then((data) => {
      localStorage.setItem('token', data.token);
      setLoggedIn(true);
      checkToken();
      history.push('/');
    })
    .catch((error) => {
      if(error.status === 400) {
        setInfoTooltip({ isOpen: true, infoText: 'Не передано одно из полей.', infoImage: 'error' });
      } else if(error.status === 401) {
        setInfoTooltip({ isOpen: true, infoText: 'Пользователь с email не найден.', infoImage: 'error' });
      } else {
        setInfoTooltip({ isOpen: true, infoText: 'Что-то пошло не так! Попробуйте еще раз.', infoImage: 'error' });
      }
    })
  }

  function handleSignout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUser({});
    history.push('/')
  };

  function handleRegister({name, email, password}) {
    register({ name, email, password })
      .then((res) => {
        if(res) {
          setInfoTooltip({ isOpen: true, infoText: 'Вы успешно зарегистрировались!', infoImage: 'success' });
          history.push('/signin');
        }
      })
      .catch((error) => {
        if(error.status === 400) {
          setInfoTooltip({ isOpen: true, infoText: 'Некорректно заполнено одно из полей.', infoImage: 'error' });
        } else {
          setInfoTooltip({ isOpen: true, infoText: 'Что-то пошло не так! Попробуйте еще раз.', infoImage: 'error' });
        }
      });
  };

  function handleUpdateUser({name, email}) {
    updateUser({ name, email, token: localStorage.token })
      .then((res) => {
        if(res) {
          setInfoTooltip({ isOpen: true, infoText: 'Данные успешно обновлены!', infoImage: 'success' });
          checkToken();
        }
      })
      .catch((error) => {
        if(error.status === 400) {
          setInfoTooltip({ isOpen: true, infoText: 'Некорректно заполнено одно из полей.', infoImage: 'error' });
        } else {
          setInfoTooltip({ isOpen: true, infoText: 'Что-то пошло не так! Попробуйте еще раз.', infoImage: 'error' });
        }
      });
  };



//====================

  function filterMovies(target, set, search, isShortMovies) {
    const movies = target.filter(({ nameRU, nameEN, duration }) => {
      const matchesRu = nameRU ? nameRU.toLowerCase().includes(search.toLowerCase()) : false
      const matchesEn = nameEN ? nameEN.toLowerCase().includes(search.toLowerCase()) : false
      const matchesDuration = (isShortMovies && duration) ? duration < 41 : true
      return (matchesRu || matchesEn) && matchesDuration
    })
    set(movies)
    return movies.length
  }

  function handleSearch(search, isShortMovies) {
    setCardsError('');
    if (!localStorage.movies) {
      setIsLoading(true);
      getInitialCards()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res))

        const movies = res.map((movie) => {
          return {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image.formats.thumbnail.url ? 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url : '',
            trailer: movie.trailerLink,
            thumbnail: movie.thumbnail,
            movieId: movie.movieId,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN
          }
        })

        setCards(res);
        setIsLoading(false);
        const filterMoviesLength = filterMovies(res, setFilterCards, search, isShortMovies)
        if (filterMoviesLength === 0) {
          setCardsError('Ничего не найдено');
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setCardsError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
    } else {
      const filterMoviesLength = filterMovies(cards, setFilterCards, search, isShortMovies)
      if (filterMoviesLength === 0) {
        setCardsError('Ничего не найдено');
      }
    }
  }

  function handleSearchInFavorite(search, isShortMovies) {
    setCardsError('');
    filterMovies(favoriteCards, setFilterFavoriteCards, search, isShortMovies)
  }

  function handleSlice() {
    let countCards = 0;
    if (windowWidth > 1024) {
      countCards = 4
    } else {
      countCards = 2
    }
    setSliceCounter(sliceCounter + countCards)
  }

  function slice(movies) {
    return movies.slice(0, sliceCounter);
  }

  function handleAddFavoriteCard(card) {
    console.log(card)
    likeCard({
      token: localStorage.token,
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: card.image.formats.thumbnail.url ? 'https://api.nomoreparties.co' + card.image.formats.thumbnail.url : '',
      trailer: card.trailerLink,
      thumbnail: card.thumbnail,
      movieId: card.movieId,
      nameRU: card.nameRU,
      nameEN: card.nameEN
    })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    const updatedFavoriteCards = [...favoriteCards];
    updatedFavoriteCards.push(card);
    setFavoriteCards(updatedFavoriteCards);
    // setInfoTooltip({ isOpen: true, infoText: 'Фильм добавлен в коллекцию.', infoImage: 'success' });
  }

  function handleDeleteFavoriteCard(card) {
    const updatedFavoriteCards = [...favoriteCards];
    const cardIndex = updatedFavoriteCards.findIndex((c) => c === card);
    updatedFavoriteCards.splice(cardIndex, 1);
    setFavoriteCards(updatedFavoriteCards);
    // setInfoTooltip({ isOpen: true, infoText: 'Фильм удален из Вашей коллекции.', infoImage: 'error' });
  }

  function handleBurgerMenu() {
    setIsBurgerMenuOpen(true);
  }

  function closeBurgerMenu () {
    setIsBurgerMenuOpen(false);
  }

  function closePopup () {
    setInfoTooltip({isOpen: false});
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
    <CurrentUserContext.Provider value={user}>
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
              cards={slice(filterCards)}
              filterCards={filterCards}
              isLoading={isLoading}
              onSearch={handleSearch}
              onAddFavoriteCard={handleAddFavoriteCard}
              onDeleteFavoriteCard={handleDeleteFavoriteCard}
              onFilterMovies={filterMovies}
              onMore={handleSlice}
              errorMessage={cardsError}
            />
            {footerElement}
          </Route>

          <Route path="/saved-movies">
            {hederElement}
            <SavedMovies
              onLogin={handleLogin}
              cards={filterFavoriteCards.length ? filterFavoriteCards : favoriteCards}
              isLoading={isLoading}
              onSearch={handleSearchInFavorite}
              onAddFavoriteCard={handleAddFavoriteCard}
              onDeleteFavoriteCard={handleDeleteFavoriteCard}
            />
            {footerElement}
          </Route>



          <Route path="/profile">
            {hederElement}
            <Profile
              onUpdateUser={handleUpdateUser}
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
              onRegister={handleRegister}
            />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>


        </Switch>
      </div>

      <InfoTooltipe
        isOpen={infoTooltip.isOpen}
        onClose={closePopup}
        infoText={infoTooltip.infoText}
        infoImage={infoTooltip.infoImage}
      />

    </FavoriteCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;


