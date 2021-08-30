import { MAIN_URL, BASE_HEADERS } from "./constants";
class MainApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._headers = BASE_HEADERS
    }

    //проверка ответа сервера
    _checkApiRespond(respond) {
        if (respond.ok) {
            return respond.json()
        }
        return Promise.reject(new Error(`Ошибка! Статус-код:${respond.status}`));
    }

    // Регистрация нового пользователя
    register(password, email, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(password, email, name)
        })
            .then(res => this._checkApiRespond(res))
    };

    // Получение токена
    login(data) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            credentials: "include",
            body: JSON.stringify(data)
        })
            .then(res => this._checkApiRespond(res))
    };

    // Проверка токена и получение информации о пользователе
    checkToken() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: "include",
        })
            .then(res => this._checkApiRespond(res))
    }

    logout() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            headers: this._headers,
            credentials: "include",
        })
            .then(res => this._checkApiRespond(res))
    }
}

export const mainApi = new MainApi(MAIN_URL);
