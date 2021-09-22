import React, { Suspense } from 'react';
import SearchForm from './searchForm/SearchForm';
import Preloader from '../preloader/Preloader';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const MoviesCardList = React.lazy(() => import('./moviesCardList/MoviesCardList'));


function Movies(props) {
    return (
        <>
            <Header />
            <div className='movies'>
                <SearchForm
                    onSearch={props.onSearch} />
                <Suspense fallback={<Preloader />}>
                    <MoviesCardList
                        cards={props.cardArr}
                        onCardLike={props.onCardLike}
                        savedMovies={props.savedMovies}
                        isSaved={props.isSaved}
                        message={props.message} />
                </Suspense>
            </div>
            <Footer />
        </>
    )
};


export default Movies;