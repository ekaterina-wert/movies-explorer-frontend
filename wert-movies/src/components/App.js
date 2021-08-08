import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer.js';
// import Main from './main/Main.js';
import Profile from './auth/profile/Profile';
import Login from './auth/Login';
import Register from './auth/Register';
// import Profile from './auth/profile/Profile.js';
// import Movies from './movies/Movies.js';
// import SavedMovies from './savedMovies/SavedMovies.js';

function App() {
  return (
    <>
      {/* <CurrentUserContext.Provider value={currentUser}> */}
      <Header
      // loggedIn={loggedIn} onClick={handleSignOut} email={userEmail} 
      />
      <Switch>
        {/* <ProtectedRoute */}
        {/* <Route
          exact path="/"
          // loggedIn={loggedIn}
          component={Main}
        />
        {/* <ProtectedRoute */}
        {/* <Route
          path="/movies"
          // loggedIn={loggedIn}
          component={Movies}
        />
        {/* <ProtectedRoute */}
        {/*<Route
          path="/saves-movies"
          // loggedIn={loggedIn}
          component={SavedMovies}
        /> */}
        {/* <ProtectedRoute */}
        {/* <Route
          path="/profile"
          // loggedIn={loggedIn}
          component={Profile}
        /> */}
        <Route path="/profile">
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
          <Route>
            {/* {loggedIn ? <Redirect exact to="/" /> : <Redirect to="/signin" />} */}
          </Route>
      </Switch>

        <Footer />
        {/* </CurrentUserContext.Provider> */}
    </>
      );
}

      export default App;
