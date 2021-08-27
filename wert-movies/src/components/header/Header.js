import './Header.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile-icon.svg';

function Header(props) {
    // Определяем режим выпадающего меню
    const [menuOpened, setMenuOpened] = React.useState(false);

    function handleMenuToggle(e) {
        setMenuOpened(!menuOpened);

    }

    return (
        <div className='header'>
            <Link to='/' className="header__link">
                <img className="header__logo" src={logo} alt="Это wert-movies." />
            </Link>

            <div className="header__burger" onClick={handleMenuToggle}>
                <span className={menuOpened ? "header__burger-line header__burger-line_cross" : "header__burger-line"}/>
                <span className={menuOpened ? "header__burger-line header__burger-line_cross" : "header__burger-line"}/>
                <span className={menuOpened ? "header__burger-line header__burger-line_cross" : "header__burger-line"}/>
            </div>


            <div className={menuOpened ? 'header__sidebar-cover header__sidebar-cover_opened' : 'header__sidebar-cover'} >
                <div className={menuOpened ? 'header__sidebar header__sidebar_opened' : 'header__sidebar'}>

                    <nav className='header__sidebar-container'>
                        <NavLink className='header__text header__nav-link' activeClassName="header__text_active" exact to='/' onClick={handleMenuToggle}>Главная</NavLink>
                        <NavLink className='header__text header__nav-link' activeClassName="header__text_active" to='/movies' onClick={handleMenuToggle}>Фильмы</NavLink>
                        <NavLink className='header__text header__nav-link' activeClassName="header__text_active" to='/saved-movies' onClick={handleMenuToggle}>Сохранённые фильмы</NavLink>
                    </nav>

                    <Link to='/profile' className='header__profile-sidebar header__nav-link' onClick={handleMenuToggle}>
                        <p className='header__text header__text_block_profile'>Аккаунт</p>
                        <img className='header__profile-icon' src={profileIcon} alt="Иконка профиля" />
                    </Link>

                </div>
            </div>


            <nav className='header__nav'>
                <NavLink className='header__text header__nav-link' activeClassName="header__text_active" to='/movies'>Фильмы</NavLink>
                <NavLink className='header__text header__nav-link' activeClassName="header__text_active" to='/saved-movies'>Сохранённые фильмы</NavLink>
            </nav>

            <Link to='/profile' className='header__profile-container header__nav-link'>
                <p className='header__text header__text_block_profile'>Аккаунт</p>
                <img className='header__profile-icon' src={profileIcon} alt="Иконка профиля" />
            </Link>

        </div>
    )
};

export default Header;