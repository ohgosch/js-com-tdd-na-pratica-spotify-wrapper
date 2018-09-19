const TOKEN_API = 'BQDgfjgMesGD9rDe7XtP8vWXM1qMwiisfRQAtjhJWqBeBEvNXKvTb3G0R7vULUP3-wv1EBBs56f7oktFcK_HvY1C_fet4pCv55PQPlbdt4nFMJv9wcZC3yrI2w58QHvFhO9uKxxBbSKph5iDExjW';

export const API_URL = 'https://api.spotify.com/v1';

export const HEADERS = {
  headers:  {
    Authorization: `Bearer ${TOKEN_API}`,
    Accept: 'application/json',
  }
};

export default API_URL;
