import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div className='not-found'>
            <p className="not-found__title">404</p>
            <p className="not-found__text">Страница не найдена</p>
            <Link onClick={props.onBack} className="not-found__link">Назад</Link>
        </div>
    )
};

export default NotFound;