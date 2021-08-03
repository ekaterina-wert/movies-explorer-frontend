import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Header from './header/Header.js';
// import Footer from './footer/Footer.js';
// import Main from './main/Main.js';
import Login from './auth/login/Login.js';
// import Register from './auth/register/Register.js';
// import Profile from './auth/profile/Profile.js';
// import Movies from './movies/Movies.js';
// import SavedMovies from './savedMovies/SavedMovies.js';

function App() {
  return (
    <>
      {/* <CurrentUserContext.Provider value={currentUser}> */}
      {/* <Header
      // loggedIn={loggedIn} onClick={handleSignOut} email={userEmail} 
      /> */}
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
        {/*<Route path="/signup">
          <Register 
          // onRegister={handleRegister} 
          />
        </Route> */}
        <Route path="/signin">
          <Login 
          // onLogin={handleLogin} data={newUserData} 
          />
        </Route>
        <Route>
          {/* {loggedIn ? <Redirect exact to="/" /> : <Redirect to="/signin" />} */}
        </Route>
      </Switch>
      
      {/* <Footer /> */}
      {/* </CurrentUserContext.Provider> */}
    </>
  );
}

export default App;
