export default class Api {
    constructor({baseUrl, headers, renderCards}) {
        this._baseUrl = baseUrl;
        this._authorization = headers.authorization; 
        this._renderCards = renderCards;
    }

    getUserCard() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    getInitialsCard() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    setUserCard(item) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    addCard(item) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        }); 
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    setAvatar(url) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: url
            })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
}