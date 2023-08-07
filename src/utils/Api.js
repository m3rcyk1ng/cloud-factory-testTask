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
    return fetch(`${this._url}/markets/ticker24h`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkStatus);
  }

  getSecondData() {
    return fetch(`${this._url}/markets/ticker24h`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkStatus);
  }
}

export const mainApi = new MainApi({
  url: 'https://api.apoloniex.com',
  credentials: 'includes',
});