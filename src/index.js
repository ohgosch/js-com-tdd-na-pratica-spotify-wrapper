import fetch from 'node-fetch';
import { API_URL } from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
      },
    };

    return fetch(url, headers);
  }
}
