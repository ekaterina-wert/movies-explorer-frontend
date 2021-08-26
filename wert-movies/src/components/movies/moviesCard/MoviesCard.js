import React from 'react';
import './MoviesCard.css';
import imag from '../../../images/city.jpg';
import { timeConverter } from '../../../utils/utils';
// import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function MoviesCard(props) {

    // const [isLiked, setIsLiked] = React.useState(false)

    // const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    // const isOwn = props.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    // const cardDeleteButtonClassName = isOwn? 'place__trash-button' : 'place__trash-button place__trash-button_hidden'; 

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    let isLiked = false;
    if (props.savedMovies) {
        isLiked = props.savedMovies.some(savedMovie => savedMovie.id === props.id)
    } else { isLiked = false };

    // Создаём переменную, которую после зададим в `className` для кнопки лайка/удаления
    let cardButtonClassName = '';
    if (props.isSaved) {
        cardButtonClassName = 'card__button card__button_type_delete'
    }
    else if (isLiked) {
        cardButtonClassName = 'card__button card__button_type_active-like'
    }
    else { cardButtonClassName = 'card__button card__button_type_like' };

    // Передаем id карточки в App через Main
    function handleClick() {
        console.log('click!')
        //    props.onCardClick(props);
    }

    // Передаем id карточки в App через Movies
    function handleLikeClick() {
        isLiked = !isLiked;
        props.onCardLike(props);
    }

    function handleDeleteClick() {
        props.onCardDelete(props);
    }

    return (
        <li className="card">
            <img className="card__image" src={`https://api.nomoreparties.co${props.image.url}`} alt={props.nameRU} onClick={handleClick} />
            <div className="card__title-container">
                <h2 className="card__title" onClick={handleClick} >{props.nameRU}</h2>
                <button className={cardButtonClassName} type="button" aria-label="Сохранить" onClick={props.isSaved ? handleDeleteClick : handleLikeClick} />
            </div>
            <p className="card__duration-text">{timeConverter(props.duration)}</p>
        </li>
    )
}

export default MoviesCard;

// "image": { 
//     "id": 1, 
//     "name": "stones-in-exile", 
//     "alternativeText": "", 
//     "caption": "", 
//     "width": 512, 
//     "height": 279, 
//     "formats": { 
//         "thumbnail": { 
//             "hash": "thumbnail_stones_in_exile_b2f1b8f4b7", 
//             "ext": ".jpeg", 
//             "mime": "image/jpeg", 
//             "width": 245, 
//             "height": 134, 
//             "size": 8.79, 
//             "path": null, 
//             "url": "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg" 
//         }, 
//         "small": { 
//             "hash": "small_stones_in_exile_b2f1b8f4b7", 
//             "ext": ".jpeg", 
//             "mime": "image/jpeg", 
//             "width": 500, 
//             "height": 272, 
//             "size": 25.68, 
//             "path": null, 
//             "url": "/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg" 
//         } 
//     }, 
//     "hash": "stones_in_exile_b2f1b8f4b7", 
//     "ext": ".jpeg", 
//     "mime": "image/jpeg", 
//     "size": 25.53, 
//     "url": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg", 
//     "previewUrl": null, 
//     "provider": "local", 
//     "provider_metadata": null, 
//     "created_at": "2020-11-23T14:11:57.313Z", 
//     "updated_at": "2020-11-23T14:11:57.313Z" 
// }