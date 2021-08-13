import './App.css';
import React from 'react';
import { useParams, useHistory, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer.js';
import Main from './main/Main.js';
import Profile from './auth/profile/Profile';
import Login from './auth/Login';
import Register from './auth/Register';
// import Profile from './auth/profile/Profile.js';
import Movies from './movies/Movies.js';
import SavedMovies from './movies/SavedMovies.js';
import NotFound from './notFound/NotFound';

function App() {
  const cardArr = [
    {
      "id": 1,
      "nameRU": "«Роллинг Стоунз» в изгнании",
      "nameEN": "Stones in Exile",
      "director": "Стивен Кайак ",
      "country": "США", "year": "2010",
      "duration": 61,
      "description": "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
      "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
      "created_at": "2020-11-23T14:12:21.376Z",
      "updated_at": "2020-11-23T14:12:21.376Z",
      "image": {
        "id": 1, "name": "stones-in-exile",
        "alternativeText": "",
        "caption": "",
        "width": 512,
        "height": 279,
        "formats": {
          "thumbnail": { "hash": "thumbnail_stones_in_exile_b2f1b8f4b7", "ext": ".jpeg", "mime": "image/jpeg", "width": 245, "height": 134, "size": 8.79, "path": null, "url": "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg" },
          "small": { "hash": "small_stones_in_exile_b2f1b8f4b7", "ext": ".jpeg", "mime": "image/jpeg", "width": 500, "height": 272, "size": 25.68, "path": null, "url": "/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg" }
        },
        "hash": "stones_in_exile_b2f1b8f4b7",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 25.53,
        "url": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2020-11-23T14:11:57.313Z",
        "updated_at": "2020-11-23T14:11:57.313Z"
      }
    },
    {
      "id": 2,
      "nameRU": "All Tomorrow's Parties",
      "nameEN": "All Tomorrow's Parties",
      "director": " Джонатан Кауэтт",
      "country": "Великобритания", "year": "2009",
      "duration": 82,
      "description": "Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любят вздорных людей — основатель фестиваля Барри Хоган однажды сказал, что никогда больше не станет иметь дело с группой Killing Joke, «потому что они му...аки». Эта демократичность сказалась и на фильме: часть съемок сделана адептами фестиваля на мобильный телефон.",
      "trailerLink": "https://www.youtube.com/watch?v=D5fBhbEJxEU",
      "created_at": "2020-11-23T14:15:19.238Z",
      "updated_at": "2020-11-23T14:15:19.238Z",
      "image": { "id": 2, "name": "all-tommoros-parties", "alternativeText": "", "caption": "", "width": 699, "height": 266, "formats": { "thumbnail": { "hash": "thumbnail_all_tommoros_parties_33a125248d", "ext": ".jpeg", "mime": "image/jpeg", "width": 245, "height": 93, "size": 10.33, "path": null, "url": "/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg" }, "small": { "hash": "small_all_tommoros_parties_33a125248d", "ext": ".jpeg", "mime": "image/jpeg", "width": 500, "height": 190, "size": 35.24, "path": null, "url": "/uploads/small_all_tommoros_parties_33a125248d.jpeg" } }, "hash": "all_tommoros_parties_33a125248d", "ext": ".jpeg", "mime": "image/jpeg", "size": 67.06, "url": "/uploads/all_tommoros_parties_33a125248d.jpeg", "previewUrl": null, "provider": "local", "provider_metadata": null, "created_at": "2020-11-23T14:14:08.595Z", "updated_at": "2020-11-23T14:14:08.595Z" }
    },
    {
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
    }];


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
            cardArr={cardArr}
            onCardLike={handleCardLike}
            savedMovies={savedMoviesArr}
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
          // onRegister={handleRegister} 
          />
        </Route>
        <Route path="/signin">
          <Login
          // onLogin={handleLogin} data={newUserData} 
          />
        </Route>
        <Route path="/signin">
          <Login
          // onLogin={handleLogin} data={newUserData} 
          />
        </Route>
        <Route path="/404">
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
