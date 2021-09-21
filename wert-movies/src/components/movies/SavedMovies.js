// import './SearchForm.css';
import React from 'react';
import MoviesCardList from './moviesCardList/MoviesCardList';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function SavedMovies(props) {
    return (
        <div className='saved-movies'>
            <Header />
            <MoviesCardList
                cards={props.savedCardArr}
                onCardDelete={props.onCardDelete}
                isSaved={props.isSaved} />
            <Footer />
        </div>
    )
};


export default SavedMovies;