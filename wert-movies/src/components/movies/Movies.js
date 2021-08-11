// import './SearchForm.css';
import React from 'react';
import SearchForm from './searchForm/SearchForm';
import MoviesCardList from './moviesCardList/MoviesCardList';

function Movies(props) {
    function onCardLike(card) {
        console.log(card.id)
    }

    return (
        <div className='movies'>
            <SearchForm />
            <MoviesCardList
                cards={props.cardArr}
                onCardLike={props.onCardLike} 
                savedMovies={props.savedMovies} 
                isSaved={props.isSaved} />
        </div>
    )
};


export default Movies;