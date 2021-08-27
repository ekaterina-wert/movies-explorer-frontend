import React from 'react';
import SearchForm from './searchForm/SearchForm';
import MoviesCardList from './moviesCardList/MoviesCardList';

function Movies(props) {
    return (
        <div className='movies'>
            <SearchForm
                onSearch={props.onSearch} />
            <MoviesCardList
                cards={props.cardArr}
                onCardLike={props.onCardLike}
                savedMovies={props.savedMovies}
                isSaved={props.isSaved} />
        </div>
    )
};


export default Movies;