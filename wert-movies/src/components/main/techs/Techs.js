import './Techs.css';
import React from 'react';

function Techs() {
    return (
        <div className='techs' id='techs'>
            <h2 className='techs__title'>Технологии</h2>

            <p className="techs__text techs__text_title">7 технологий
                <span className="techs__text">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </span>
            </p>

            <ul className='techs__skills-container'>
                <li className='techs__skill'>HTML</li>
                <li className='techs__skill'>CSS</li>
                <li className="techs__skill">JS</li>
                <li className="techs__skill">React</li>
                <li className='techs__skill'>Git</li>
                <li className="techs__skill">Express.js</li>
                <li className="techs__skill">mongoDB</li>
            </ul>
        </div>
    )
};

export default Techs;