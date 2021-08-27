import React from 'react';
import Promo from './promo/Promo';
import AboutProject from './aboutProject/AboutProject';
import Techs from './techs/Techs';
import AboutMe from './aboutMe/AboutMe';


function Main() {
    return (
        <div className='main'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
        </div>
    )
};


export default Main;