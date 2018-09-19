'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOKEN_API = 'BQDgfjgMesGD9rDe7XtP8vWXM1qMwiisfRQAtjhJWqBeBEvNXKvTb3G0R7vULUP3-wv1EBBs56f7oktFcK_HvY1C_fet4pCv55PQPlbdt4nFMJv9wcZC3yrI2w58QHvFhO9uKxxBbSKph5iDExjW';

var API_URL = exports.API_URL = 'https://api.spotify.com/v1';

var HEADERS = exports.HEADERS = {
  headers: {
    Authorization: 'Bearer ' + TOKEN_API,
    Accept: 'application/json'
  }
};

exports.default = API_URL;