import './App.css';
import React from 'react';
import { useHistory, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './protectedRoute/ProtectedRoute';

import Footer from './footer/Footer.js';
import Main from './main/Main.js';
import Profile from './auth/profile/Profile';
import Login from './auth/Login';
import Register from './auth/Register';
import Movies from './movies/Movies.js';
import SavedMovies from './movies/SavedMovies.js';
import NotFound from './notFound/NotFound';
import { moviesApi } from '../utils/MoviesApi';
import { mainApi } from '../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  //стейт-переменные для обновления данных карточки и пользователя
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(null);
  const [message, setMessage] = React.useState('');

  //стейт-переменные для регистрации и логина
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [newUserData, setNewUserData] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  const [savedMovies, setSavedMovies] = React.useState([])

  //получение данных пользователя с сервера
  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getUserData()
        .then((userData) => {
          setCurrentUser(userData.user);
          console.log(userData.user)
        })
        .catch((err) => {
          console.log('Ошибка при загрузке юзердата', err)
        });
    }
  }, [loggedIn]);

  //Функции реализации регистрации и авторизации
  function handleRegister(data) {
    return mainApi.register(data)
      .then(() => {
        setNewUserData(data);
        setLoggedIn(true)
        console.log('Успешная регистрация!', data)
      })
      .then(() => {
        history.push('/movies')
      })
      .catch((err) => {
        console.log('Ошибка при регистрации нового пользователя', err.message)
      });

  };

  function handleLogin(data) {
    return mainApi.login(data)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .then(() => {
        history.push('/movies');
      })
      .catch((err) => {
        console.log('Ошибка при входе', err.message)
      });
  };

  function tokenCheck() {
    mainApi.checkToken()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res)
      })
      .then(() => {
        history.push('/movies')
      })
      .catch((err) => {
        console.log('Ошибка при сохранении данных нового пользователя', err.message)
      });
  };

  function handleLogout() {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        history.push('/signin');
      })
  };

  //проверка наличия токена в локальном хранилище при первой загрузке сайта
  React.useEffect(() => {
    tokenCheck();
  }, []);

  //получение карточек фильмов с сервера
  React.useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        console.log(movies);
      })
      .catch((err) => {
        setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
        console.log('Ошибка при загрузке карточек фильмов.', err)
      });
  }, []);

  //получение сохраненных фильмов с сервера
  React.useEffect(() => {
    mainApi.getSavedMovies()
      .then((allSavedMovies) => {
        let userSavedMovies = allSavedMovies.filter(movie => {
          return movie.owner === currentUser._id
        })
        setSavedMovies(userSavedMovies);
      })
      .catch((err) => {
        setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
        console.log('Ошибка при загрузке карточек фильмов.', err)
      });
  }, [currentUser]);

  function getFilteredMovies(keyword) {
    const filteredMoviesArr = movies.filter((movie) => {
      const { nameRU, nameEN, country, director, description, year } = movie;

      if ([nameRU, nameEN, country, director, description, year].join('').toLowerCase().includes(keyword.toLowerCase())) {
        return movie;
      }
    });
    setFilteredMovies(filteredMoviesArr);

    console.log(filteredMoviesArr.length)
    if (filteredMoviesArr.length === 0) {
      setMessage('Ничего не найдено')
    }
  }

  function handleSearch(searchData) {
    getFilteredMovies(searchData.keyword);
  }

  function handleChangeUserInfo(userInputs) {
    mainApi.editUserData(userInputs)
      .then((userData) => {
        setCurrentUser(userData.user);
      })
      .catch((err) => {
        console.log("Ошибка при обновлении юзердата", err)
      });
  }


  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const [isSaved] = savedMovies.filter((savedMovie) => {
      return savedMovie.movieId === card.id;
    })
    if (isSaved) {
      mainApi.removeSavedMovie(isSaved._id)
        .then(() => {
          setSavedMovies(savedMovies.splice((savedMovies.indexOf(isSaved)), 1))
          setSavedMovies(savedMovies);

        })
    } else {
      // Отправляем запрос в API и получаем обновлённые данные карточки
      mainApi.saveMovie({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        image: `https://api.nomoreparties.co${card.image.url}`,
        movieId: card.id,
        trailer: card.trailerLink,
        thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`
      })
        .then((newCard) => {
          setSavedMovies([...savedMovies, newCard]);
        })
    }
  };

  function handleCardDelete(card) {
    mainApi.removeSavedMovie(card._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(el => {
          return (el._id !== card._id)
        }))
      })
      .catch((err) => {
        console.log("Ошибка при удалении фильма", err)
      });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>

          <Route
            exact path="/"
          >
            <Main />
            <Footer />
          </Route>

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            isSaved={false}
            cardArr={filteredMovies}
            onCardLike={handleCardLike}
            savedMovies={savedMovies}
            onSearch={handleSearch}
            message={message}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            isSaved={true}
            savedCardArr={savedMovies}
            onCardDelete={handleCardDelete}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            name={currentUser.name}
            email={currentUser.email}
            onLogout={handleLogout}
            onChangeUserInfo={handleChangeUserInfo}
          />

          <Route path="/signup">
            <Register
              onRegister={handleRegister}
            />
          </Route>

          <Route path="/signin">
            <Login
              onLogin={handleLogin} data={newUserData}
            />
          </Route>

          <Route path="*">
            <NotFound
              onBack={handleBack}
            />
          </Route>

          <Route>
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
