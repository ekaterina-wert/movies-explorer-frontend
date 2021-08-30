import './App.css';
import React from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
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

function App() {
  //стейт-переменные для обновления данных карточки и пользователя
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(null);
  const [message, setMessage] = React.useState('');

  //стейт-переменные для регистрации и логина
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState(null);
  const [newUserData, setNewUserData] = React.useState({});



  //Функции реализации регистрации и авторизации
  function handleRegister(data) {
    return mainApi.register(data)
      .then(() => {
        setNewUserData(data)
        console.log('Успешная регистрация!')
      })
      .catch((err) => {
        console.log('Ошибка при регистрации нового пользователя', err.message)
      });

  };

  function handleLogin(data) {
    return mainApi.login(data)
      .then((res) => {
        setLoggedIn(true);
        setUserEmail(res.email);
        console.log('Успешный логин!')
      })
      .then(() => {
        history.push('/movies');
        setNewUserData({});
      })
      .catch((err) => {
        console.log('Ошибка при входе', err.message)
      });
  };

  function tokenCheck() {
    mainApi.checkToken()
      .then((res) => {
        setUserEmail(res.email);
        setLoggedIn(true)
      })
      .catch((err) => {
        console.log('Ошибка при сохранении данных нового пользователя', err.message)
      });
    // }
  };

  function handleLogout() {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        history.push('/login');
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

  const [savedMoviesArr, setSavedMoviesArr] = React.useState([{
    "id": 3,
    "nameRU": " Без обратного пути",
    "nameEN": "No Distance Left to Run",
    "director": "Уилл Лавлейс, Дилан Сотерн",
    "country": "Великобритания",
    "year": "2010",
    "duration": 104,
    "description": "Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.",
    "trailerLink": "https://www.youtube.com/watch?v=6iYxdghpJZY",
    "created_at": "2020-11-23T14:17:23.257Z",
    "updated_at": "2020-11-23T14:17:23.257Z",
    "image": { "id": 3, "name": "blur", "alternativeText": "", "caption": "", "width": 460, "height": 298, "formats": { "thumbnail": { "hash": "thumbnail_blur_a43fcf463d", "ext": ".jpeg", "mime": "image/jpeg", "width": 241, "height": 156, "size": 8.32, "path": null, "url": "/uploads/thumbnail_blur_a43fcf463d.jpeg" } }, "hash": "blur_a43fcf463d", "ext": ".jpeg", "mime": "image/jpeg", "size": 21.07, "url": "/uploads/blur_a43fcf463d.jpeg", "previewUrl": null, "provider": "local", "provider_metadata": null, "created_at": "2020-11-23T14:17:01.702Z", "updated_at": "2020-11-23T14:17:01.702Z" }
  }])

  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    // const isLiked = card.likes.some(i => i._id === currentUser._id);

    // // Отправляем запрос в API и получаем обновлённые данные карточки
    // api.changeLikeCardStatus(card._id, isLiked)
    //   .then((newCard) => {
    //     setCards((cards) =>
    //       cards.map((c) =>
    //         c._id === card._id ? newCard : c
    //       )
    //     )
    //   })


    setSavedMoviesArr(savedMoviesArr.some(function (el) { return el.id === card.id }) ? [...savedMoviesArr] : [card, ...savedMoviesArr]);
    console.log(savedMoviesArr)
  };

  function handleCardDelete(card) {
    setSavedMoviesArr(savedMoviesArr.filter(function (el) { return el.id !== card.id }));
  }

  return (
    <>
      {/* <CurrentUserContext.Provider value={currentUser}> */}
      <Switch>
        {/* <ProtectedRoute */}
        <Route
          exact path="/"
        // loggedIn={loggedIn}
        // component={Main}
        >
          <Main />
          <Footer />
        </Route>
        {/* <ProtectedRoute */}
        <Route
          path="/movies"
        // loggedIn={loggedIn}
        // component={Movies}
        >
          <Header />
          <Movies
            isSaved={false}
            cardArr={filteredMovies}
            onCardLike={handleCardLike}
            savedMovies={savedMoviesArr}
            onSearch={handleSearch}
            message={message}
          />
          <Footer />
        </Route>
        {/* <ProtectedRoute */}
        <Route
          path="/saved-movies"
        // loggedIn={loggedIn}
        // component={SavedMovies}
        >
          <Header />
          <SavedMovies
            isSaved={true}
            savedCardArr={savedMoviesArr}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </Route>
        {/* <ProtectedRoute */}
        {/* <Route
          path="/profile"
          // loggedIn={loggedIn}
          component={Profile}
        /> */}
        <Route path="/profile">
          <Header />
          <Profile
            // onRegister={handleRegister} 
            name='Alex'
            email='ru@ru.ru'
          />
        </Route>
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
          {/* {loggedIn ? <Redirect exact to="/" /> : <Redirect to="/signin" />} */}
        </Route>
      </Switch>
      {/* </CurrentUserContext.Provider> */}
    </>
  );
}

export default App;
