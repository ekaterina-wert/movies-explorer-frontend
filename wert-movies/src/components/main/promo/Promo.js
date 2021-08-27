import './Promo.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

function Promo() {
    return (
        <div className='promo'>
            <div className='promo__header'>
                <Link to='/' className="promo__link">
                    <img className="promo__logo" src={logo} alt="Это wert-movies." />
                </Link>
                <div className='promo__auth-container'>
                    <Link to='/signup' className="promo__link promo__link_type_signup">
                        Регистрация
                    </Link>
                    <Link to='/signin' className="promo__link promo__link_type_login">
                        Войти
                    </Link>
                </div>
            </div>

            <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>

            <nav className='promo__nav'>
                <a className='promo__nav-link' href='#about'>О проекте</a>
                <a className='promo__nav-link' href='#techs'>Технологии</a>
                <a className='promo__nav-link' href='#student'>Студент</a>
            </nav>
        </div>
    )
};

export default Promo;