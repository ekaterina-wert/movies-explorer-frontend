import './AboutProject.css';
import React from 'react';

function AboutProject() {
    return (
        <div className='aboutProject' id='about'>
            <h2 className='aboutProject__title'>О проекте</h2>
            <div className='aboutProject__text-container'>

                <p className="aboutProject__text aboutProject__text_title">Дипломный проект включал 5 этапов
                    <span className="aboutProject__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </span>
                </p>
                <p className="aboutProject__text aboutProject__text_title">На выполнение диплома ушло 5 недель
                    <span className="aboutProject__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </span>
                </p>
            </div>

            <div className='aboutProject__progress-container'>
                <p className='aboutProject__progress-bar aboutProject__progress-bar_type_backend'>1 неделя</p>
                <p className='aboutProject__progress-bar aboutProject__progress-bar_type_frontend'>4 недели</p>
                <p className="aboutProject__caption">Back-end</p>
                <p className="aboutProject__caption">Front-end</p>
            </div>
        </div>
    )
};

export default AboutProject;