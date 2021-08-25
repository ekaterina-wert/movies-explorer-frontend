import './AboutMe.css';
import React from 'react';
import myPhoto from '../../../images/student.jpeg';

function AboutMe() {
    return (
        <div className='student' id='student'>
            <h2 className='student__title'>Студент</h2>
            <div className='student__container'>
                <img className='student__photo' src={myPhoto} alt='Ekaterina L.' />
                <div className='student__about-container'>
                    <h3 className='student__name'>
                        Екатерина
                        <span className='student__job'>Фронтенд-разработчик</span>
                    </h3>
                    <p className='student__about'>Интересуюсь наукой и технологиями. Люблю учиться, пробовать новое и исследовать свои границы (на&#160;текущий момент не обнаружены).</p>
                    <p className='student__about'>Из любопытства начала самостоятельно изучать программирование на JavaScript и осознала, что, наконец, нашла инструмент для самовыражения и реализации своих творческих идей. Решила серьезно погрузиться в тему программирования с Яндекс.Практикумом. Теперь кайфую от создания, организации и написания аккуратного кода.</p>
                    <div className='student__links'>
                        <a className='student__link' href='https://github.com/ekaterina-wert' target="_blank" rel="noreferrer">Github</a>
                        <a className='student__link' href='https://linkedin.com'  target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <h3 className='student__projects'>Портфолио</h3>
            <nav className='student__projects-container'>
                <a className='student__project' href='https://github.com/ekaterina-wert/how-to-learn' target="_blank" rel="noreferrer">Статичный сайт</a>
                <a className='student__project' href='https://ekaterina-wert.github.io/russian-travel/index.html' target="_blank" rel="noreferrer">Адаптивный сайт</a>
                <a className="student__project" href='https://ekaterina-wert.github.io/react-mesto-auth' target="_blank" rel="noreferrer">Одностраничное приложение</a>
                <a className="student__project" href='https://ekaterina-wert.github.io/battleship/index' target="_blank" rel="noreferrer">Игра "Морской Бой"</a>
            </nav>
        </div>
    )
};

export default AboutMe;