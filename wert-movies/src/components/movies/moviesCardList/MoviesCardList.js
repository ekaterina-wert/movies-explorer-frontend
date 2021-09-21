import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../moviesCard/MoviesCard';

function MoviesCardList(props) {

    const [isMovies, setIsMovies] = React.useState(null);
    const [showMore, setShowMore] = React.useState(false);
    const [cardNumber, setCardNumber] = React.useState(0)

    let index = 0;

    function handleResize() {
        if (window.innerWidth > 1090) {
            index = 3;
        }
        else if (window.innerWidth <= 1090 && window.innerWidth >= 634) {
            index = 8;
        } else {
            index = 5;
        }
    }

    React.useEffect(() => {
        if (props.cards !== null) {
            if (props.cards.length !== 0) {
                handleResize();
                if (props.cards.length > index) {
                    setShowMore(true)
                }
                setIsMovies(true)
                setCardNumber(index)
            }
        } else {
            setIsMovies(false)
        }
    }, [index, props.cards])

    React.useEffect(() => {
        window.addEventListener('resize', handleResize)
    });

    function addCards() {
        if (window.innerWidth > 1090) {
            setCardNumber(cardNumber + 3);
        } else {
            setCardNumber(cardNumber + 2);
        }
    }

    function handleShowMore() {
        addCards();
        if (props.cards.length > (window.innerWidth > 1090 ? cardNumber + 3 : cardNumber + 2)) {
            setShowMore(true);
        } else {
            setShowMore(false);
        }
    }

    return (
        <div className='card-list'>
            {isMovies ?
                <ul className='card-list__container'>
                    {
                        props.cards.slice(0, cardNumber).map((card) => (
                            <MoviesCard key={card.id ? card.id : card._id}
                                {...card}
                                onCardClick={props.onCardClick}
                                onCardDelete={props.onCardDelete}
                                onCardLike={props.onCardLike}
                                savedMovies={props.savedMovies}
                                isSaved={props.isSaved}
                            />
                        ))
                    }
                </ul>
                : <p className='card-list__text'>{props.message ? props.message : ''}</p>
            }
            {showMore && <button className='card-list__button' onClick={handleShowMore}>Ещё</button>}
        </div >
    )
};

export default MoviesCardList;