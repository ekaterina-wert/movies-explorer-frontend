import './Footer.css';
import React from 'react';

function Footer() {
    let year = new Date();

    return (
        <div className='footer'>
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <p className="footer__copyright">&copy; {year.getFullYear()}</p>
            <nav className='footer__nav'>
                <a className='footer__link' href='https://praktikum.yandex.ru'  target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                <a className='footer__link' href='https://github.com/ekaterina-wert'  target="_blank" rel="noreferrer">Github</a>
                <a className='footer__link' href='https://facebook.com'  target="_blank" rel="noreferrer">Facebook</a>
            </nav>
        </div>
    )
};

export default Footer;