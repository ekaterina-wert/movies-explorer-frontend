import './Header.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile-icon.svg';

function Header(props) {
    return (
        <div className='header'>
            <a href="#" className="header__link" target="_blank" rel="noreferrer">
                <img className="header__logo" src={logo} alt="Это wert-movies." />
            </a>
            <nav className='header__nav'>
                <NavLink className='header__text header__nav-link' activeClassName="header__text_active" to='/movies'>Фильмы</NavLink>
                <NavLink className='header__text header__nav-link' activeClassName="header__text_active" to='/saved-movies'>Сохранённые фильмы</NavLink>
            </nav>

            <Link to='/profile' className='header__container header__nav-link'>
                <p className='header__text header__text_block_profile'>Аккаунт</p>
                <img className='header__profile-icon' src={profileIcon} alt="Иконка профиля" />
            </Link>

            {/* <Switch> */}
            {/* <Route path="/movies"> */}
            {/* <Link to='/movies' className="header__text header__nav-link">Фильмы</Link> */}
            {/* </Route>  */}
            {/*                    
                <Route path="/saved-movies">
                    <Link to='/saved-movies' className="header__text header__nav-link">Сохранённые фильмы</Link>
                </Route>
                
                <Route path="/profile">
                    <div className='header__container'>
                       <Link to='/profile' className="header__text header__nav-link">Аккаунт<img className='header__profile-icon' src={profileIcon} alt="Иконка профиля" /></Link> 
                    </div>
                    
                </Route>

                <Route>
                    {props.loggedIn ? <Redirect exact to="/" /> : <Redirect to="/signin" />}
                </Route> */}
            {/* </Switch> */}
        </div>
    )
};

export default Header;