import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList(props) {
    let isMovies = props.cards.length !== 0;

    return (
        <div className='card-list'>
            {isMovies ?
                <ul className='card-list__container'>
                    {props.cards.map((card) => (
                        <MoviesCard key={card.id}
                            {...card}
                            onCardClick={props.onCardClick}
                            onCardDelete={props.onCardDelete}
                            onCardLike={props.onCardLike}
                            savedMovies={props.savedMovies}
                            isSaved={props.isSaved}
                        />
                    ))}
                </ul>
                : <p className='card-list__text'>Ничего не найдено.</p>}
            <button className='card-list__button'>Ещё</button>
        </div>
    )
};

export default MoviesCardList;