// import './SearchForm.css';
import React from 'react';
import SearchForm from './searchForm/SearchForm';
import MoviesCardList from './moviesCardList/MoviesCardList';

function SavedMovies(props) {
    return (
        <div className='saved-movies'>
            <SearchForm />
            <MoviesCardList
                cards={props.savedCardArr}
                onCardDelete={props.onCardDelete}
                isSaved={props.isSaved} />
        </div>
    )
};


export default SavedMovies;