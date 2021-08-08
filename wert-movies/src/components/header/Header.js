import './Header.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile-icon.svg';
import Navigation from '../navigation/Navigation';

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
                <span className="header__burger-middle"></span>
            </div>

            {menuOpened && <Navigation />}

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