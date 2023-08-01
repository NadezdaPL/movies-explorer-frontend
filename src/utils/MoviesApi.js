class MoviesApi {
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._headers = this._options.headers;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Error: ${response.status}: ${response.statusText}`)
    );
  }

  getInfo() {
    return fetch(`${this._baseUrl}`, { headers: this._headers }).then(
      (response) => this._checkResponse(response)
    );
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});
