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
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});