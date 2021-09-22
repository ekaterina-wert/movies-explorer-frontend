// import './SearchForm.css';
import React from 'react';
import MoviesCardList from './moviesCardList/MoviesCardList';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function SavedMovies(props) {
    return (
        <>
            <Header />
            <div className='saved-movies'>
                <MoviesCardList
                    cards={props.savedCardArr}
                    onCardDelete={props.onCardDelete}
                    isSaved={props.isSaved} />
            </div>
            <Footer />
        </>
    )
};


export default SavedMovies;