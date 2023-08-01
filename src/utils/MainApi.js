import { BASE_URL } from './auth';

class MainApi {
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
  };

  async _request(url, options) {
    const response = await fetch(url, options);
    return this._checkResponse(response);
  };

  async getUser(jwt) {
    const response = await this._request(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
    });
    return response;
  };

  async editUser(data, jwt) {
    const response = await this._request(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      method: 'PATCH',
      body: JSON.stringify({
        name: `${data.name}`,
        email: `${data.email}`,
      }),
    });
    return response;
  };

  async getSavedCard(jwt) {
    const response = await this._request(`${this._baseUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
    });
    return response;
  };

  savedCard(data, jwt) {
    return this._request(`${this._baseUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      method: 'POST',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: 'https://api.nomoreparties.co/' + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail:
          'https://api.nomoreparties.co/' + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    });
  };

  deleteCard(id, jwt) {
    return this._request(`${this._baseUrl}/movies/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      method: 'DELETE',
    });
  }
};

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});
