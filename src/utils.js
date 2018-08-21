export const toJSON = data => (data.json // eslint-disable-line import/prefer-default-export
  ? data.json()
  : data);
