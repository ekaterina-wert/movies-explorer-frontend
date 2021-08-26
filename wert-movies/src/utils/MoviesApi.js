class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    //проверка ответа сервера
    _checkApiRespond(respond) {
        if (respond.ok) {
            return respond.json()
        }
        return Promise.reject(new Error(`Ошибка! Статус-код:${respond.status}`));
    }

    //получить все фильмы с сервера (GET)
    getMovies() {
        return fetch(`${this._baseUrl}`, {
                headers: this._headers
            })
            .then(res => this._checkApiRespond(res))
    };

//     //добавить собственную карточку (POST)
//     addNewCard(data) {
//         return fetch(`${this._baseUrl}/cards`, {
//                 method: 'POST',
//                 headers: this._headers,
//                 body: JSON.stringify({
//                     name: data.name,
//                     link: data.link
//                 })
//             })
//             .then(res => this._checkApiRespond(res))
//     }

//     //удалить карточку (DELETE)
//     deleteMyCard(cardId) {
//         return fetch(`${this._baseUrl}/cards/${cardId}`, {
//                 method: 'DELETE',
//                 headers: this._headers
//             })
//             .then(res => this._checkApiRespond(res))
//     }

//     //получить данные пользователя (GET)
//     getUserData() {
//         return fetch(`${this._baseUrl}/users/me`, {
//                 headers: this._headers
//             })
//             .then(res => this._checkApiRespond(res))
//     }

//     //изменить данные пользователя (PATCH)
//     editUserData(data) {
//         return fetch(`${this._baseUrl}/users/me`, {
//                 method: 'PATCH',
//                 headers: this._headers,
//                 body: JSON.stringify({
//                     name: data.name,
//                     about: data.about
//                 })
//             })
//             .then(res => this._checkApiRespond(res))
//     }

//     //изменить аватар (PATCH)
//     editUserAvatar(url) {
//         return fetch(`${this._baseUrl}/users/me/avatar`, {
//                 method: 'PATCH',
//                 headers: this._headers,
//                 body: JSON.stringify({
//                     avatar: url,
//                 })
//             })
//             .then(res => this._checkApiRespond(res))
//     }

//     //поставить и убрать лайк
//     changeLikeCardStatus(cardId, isLiked) {
//         return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//             method: isLiked ? 'DELETE' : 'PUT',
//             headers: this._headers,
//         })
//         .then(res => this._checkApiRespond(res))    
//     }

//     // getAllData() {
//     //     return Promise.all([this.getUserData(), this.getInitialCards()])
//     // }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});