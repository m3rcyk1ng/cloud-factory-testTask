// Check ReadMe
class MainApi {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getData() {
    return fetch(`${this._url}`, {
      method: 'GET',
      // credentials: 'include',
      headers: this._headers,
    }).then(this._checkStatus);
  }

  getSecondData() {
    return fetch(`${this._url}`, {
      method: 'GET',
      // credentials: 'include',
      headers: this._headers,
    }).then(this._checkStatus);
  }
}

export const mainApi = new MainApi({
  url: 'http://localhost:3001/markets',
  // url: 'https://api.poloniex.com/markets/ticker24h',
  credentials: 'includes',
  headers: {
    'Content-Type': 'application/json',
  },
});
