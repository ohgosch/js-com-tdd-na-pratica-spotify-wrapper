(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar getAlbum = exports.getAlbum = function getAlbum(id) {\n  return fetch(_config.API_URL + '/albums/' + id).then(_utils.toJSON);\n}; // eslint-disable-line no-undef\n\nvar getAlbums = exports.getAlbums = function getAlbums(ids) {\n  return fetch(_config.API_URL + '/albums/?ids=' + ids).then(_utils.toJSON);\n}; // eslint-disable-line no-undef\n\nvar getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {\n  return fetch(_config.API_URL + '/albums/' + id + '/tracks').then(_utils.toJSON);\n}; // eslint-disable-line no-undef//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9zcmMvYWxidW0uanM/NjE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgdG9KU09OIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGJ1bSA9IGlkID0+IGZldGNoKGAke0FQSV9VUkx9L2FsYnVtcy8ke2lkfWApLnRoZW4odG9KU09OKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5leHBvcnQgY29uc3QgZ2V0QWxidW1zID0gaWRzID0+IGZldGNoKGAke0FQSV9VUkx9L2FsYnVtcy8/aWRzPSR7aWRzfWApLnRoZW4odG9KU09OKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5leHBvcnQgY29uc3QgZ2V0QWxidW1UcmFja3MgPSBpZCA9PiBmZXRjaChgJHtBUElfVVJMfS9hbGJ1bXMvJHtpZH0vdHJhY2tzYCkudGhlbih0b0pTT04pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/album.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar API_URL = exports.API_URL = 'https://api.spotify.com/v1'; // eslint-disable-line import/prefer-default-export//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvc3JjL2NvbmZpZy5qcz9hN2ExIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _search = __webpack_require__(/*! ./search */ \"./src/search.js\");\n\nvar _album = __webpack_require__(/*! ./album */ \"./src/album.js\");\n\nexports.default = {\n  search: _search.search,\n  searchAlbums: _search.searchAlbums,\n  searchArtists: _search.searchArtists,\n  searchPlaylists: _search.searchPlaylists,\n  getAlbum: _album.getAlbum,\n  getAlbums: _album.getAlbums,\n  getAlbumTracks: _album.getAlbumTracks\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9zcmMvaW5kZXguanM/MTJkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBzZWFyY2gsXG4gIHNlYXJjaEFsYnVtcyxcbiAgc2VhcmNoQXJ0aXN0cyxcbiAgc2VhcmNoUGxheWxpc3RzLFxufSBmcm9tICcuL3NlYXJjaCc7XG5cbmltcG9ydCB7XG4gIGdldEFsYnVtLFxuICBnZXRBbGJ1bXMsXG4gIGdldEFsYnVtVHJhY2tzLFxufSBmcm9tICcuL2FsYnVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZWFyY2gsXG4gIHNlYXJjaEFsYnVtcyxcbiAgc2VhcmNoQXJ0aXN0cyxcbiAgc2VhcmNoUGxheWxpc3RzLFxuICBnZXRBbGJ1bSxcbiAgZ2V0QWxidW1zLFxuICBnZXRBbGJ1bVRyYWNrcyxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar search = exports.search = function search(query, type) {\n  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, { // eslint-disable-line no-undef\n    headers: {\n      Accept: 'application/json'\n    }\n  }).then(_utils.toJSON);\n};\n\nvar searchAlbums = exports.searchAlbums = function searchAlbums(query) {\n  return search(query, 'album');\n};\n\nvar searchArtists = exports.searchArtists = function searchArtists(query) {\n  return search(query, 'artist');\n};\n\nvar searchTracks = exports.searchTracks = function searchTracks(query) {\n  return search(query, 'track');\n};\n\nvar searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {\n  return search(query, 'playlist');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvc3JjL3NlYXJjaC5qcz83NTFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyB0b0pTT04gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IChxdWVyeSwgdHlwZSkgPT4gZmV0Y2goYCR7QVBJX1VSTH0vc2VhcmNoP3E9JHtxdWVyeX0mdHlwZT0ke3R5cGV9YCwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gIGhlYWRlcnM6IHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbn0pLnRoZW4odG9KU09OKTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEFsYnVtcyA9IHF1ZXJ5ID0+IHNlYXJjaChxdWVyeSwgJ2FsYnVtJyk7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hBcnRpc3RzID0gcXVlcnkgPT4gc2VhcmNoKHF1ZXJ5LCAnYXJ0aXN0Jyk7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hUcmFja3MgPSBxdWVyeSA9PiBzZWFyY2gocXVlcnksICd0cmFjaycpO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoUGxheWxpc3RzID0gcXVlcnkgPT4gc2VhcmNoKHF1ZXJ5LCAncGxheWxpc3QnKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/search.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar toJSON = exports.toJSON = function toJSON(data) {\n  return data.json // eslint-disable-line import/prefer-default-export\n  ? data.json() : data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9zcmMvdXRpbHMuanM/YTMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG9KU09OID0gZGF0YSA9PiAoZGF0YS5qc29uIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuICA/IGRhdGEuanNvbigpXG4gIDogZGF0YSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ })

/******/ });
});