import rates from '../fixtures/rates.js';
const BASE_URL = 'https://api.apilayer.com/fixer/';

class Api {

  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.text()
      .then((text) => Promise.reject({status: res.status, text}));
  }

  getRates() {
    return fetch(`${this._baseUrl}/latest`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getFixtures() {
    return Promise.resolve(rates);
  }

}

const api = new Api({
  baseUrl: BASE_URL,
  headers: {apikey: 'RKAAIonmVy4CL5YQl6MR1uyUHOX4puUS'}
});

export default api;