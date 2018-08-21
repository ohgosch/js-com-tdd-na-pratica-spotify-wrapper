"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = exports.toJSON = function toJSON(data) {
  return data.json // eslint-disable-line import/prefer-default-export
  ? data.json() : data;
};