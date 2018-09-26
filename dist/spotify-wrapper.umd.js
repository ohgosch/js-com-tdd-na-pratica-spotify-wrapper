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

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = exports = self.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = self.fetch.bind(self);\n\nexports.Headers = self.Headers;\nexports.Request = self.Request;\nexports.Response = self.Response;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9icm93c2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9icm93c2VyLmpzP2ExOGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHNlbGYuZmV0Y2g7XG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBhbmQgV2VicGFjay5cbmV4cG9ydHMuZGVmYXVsdCA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcblxuZXhwb3J0cy5IZWFkZXJzID0gc2VsZi5IZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gc2VsZi5SZXF1ZXN0O1xuZXhwb3J0cy5SZXNwb25zZSA9IHNlbGYuUmVzcG9uc2U7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/node-fetch/browser.js\n");

/***/ }),

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = album;\nfunction album() {\n  var _this = this;\n\n  return {\n    getAlbum: function getAlbum(id) {\n      return _this.request(_this.apiURL + \"/albums/\" + id);\n    },\n    getAlbums: function getAlbums(ids) {\n      return _this.request(_this.apiURL + \"/albums/?ids=\" + ids);\n    },\n    getTracks: function getTracks(id) {\n      return _this.request(_this.apiURL + \"/albums/\" + id + \"/tracks\");\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9zcmMvYWxidW0uanM/NjE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGJ1bSgpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXRBbGJ1bTogaWQgPT4gdGhpcy5yZXF1ZXN0KGAke3RoaXMuYXBpVVJMfS9hbGJ1bXMvJHtpZH1gKSxcbiAgICBnZXRBbGJ1bXM6IGlkcyA9PiB0aGlzLnJlcXVlc3QoYCR7dGhpcy5hcGlVUkx9L2FsYnVtcy8/aWRzPSR7aWRzfWApLFxuICAgIGdldFRyYWNrczogaWQgPT4gdGhpcy5yZXF1ZXN0KGAke3RoaXMuYXBpVVJMfS9hbGJ1bXMvJHtpZH0vdHJhY2tzYCksXG4gIH07XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/album.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar TOKEN_API = 'BQDgfjgMesGD9rDe7XtP8vWXM1qMwiisfRQAtjhJWqBeBEvNXKvTb3G0R7vULUP3-wv1EBBs56f7oktFcK_HvY1C_fet4pCv55PQPlbdt4nFMJv9wcZC3yrI2w58QHvFhO9uKxxBbSKph5iDExjW';\n\nvar API_URL = exports.API_URL = 'https://api.spotify.com/v1';\n\nvar HEADERS = exports.HEADERS = {\n  headers: {\n    Authorization: 'Bearer ' + TOKEN_API,\n    Accept: 'application/json'\n  }\n};\n\nexports.default = API_URL;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvc3JjL2NvbmZpZy5qcz9hN2ExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRPS0VOX0FQSSA9ICdCUURnZmpnTWVzR0Q5ckRlN1h0UDh2V1hNMXFNd2lpc2ZSUUF0amhKV3FCZUJFdk5YS3ZUYjNHMFI3dlVMVVAzLXd2MUVCQnM1NmY3b2t0RmNLX0h2WTFDX2ZldDRwQ3Y1NVBRUGxiZHQ0bkZNSnY5d2NaQzN5ckkydzU4UUh2RmhPOXVLeHhCYlNLcGg1aURFeGpXJztcblxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEnO1xuXG5leHBvcnQgY29uc3QgSEVBREVSUyA9IHtcbiAgaGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtUT0tFTl9BUEl9YCxcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQSV9VUkw7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _nodeFetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n\nvar _nodeFetch2 = _interopRequireDefault(_nodeFetch);\n\nvar _search = __webpack_require__(/*! ./search */ \"./src/search.js\");\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _album = __webpack_require__(/*! ./album */ \"./src/album.js\");\n\nvar _album2 = _interopRequireDefault(_album);\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SpotifyWrapper = function () {\n  function SpotifyWrapper(options) {\n    _classCallCheck(this, SpotifyWrapper);\n\n    this.apiURL = options.apiURL || _config.API_URL;\n    this.token = options.token;\n\n    this.album = _album2.default.bind(this)();\n    this.search = _search2.default.bind(this)();\n  }\n\n  _createClass(SpotifyWrapper, [{\n    key: 'request',\n    value: function request(url) {\n      var headers = {\n        headers: {\n          Authorization: 'Bearer ' + this.token,\n          Accept: 'application/json'\n        }\n      };\n\n      return (0, _nodeFetch2.default)(url, headers).then(_utils2.default);\n    }\n  }]);\n\n  return SpotifyWrapper;\n}();\n\nexports.default = SpotifyWrapper;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9zcmMvaW5kZXguanM/MTJkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5cbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xuaW1wb3J0IGFsYnVtIGZyb20gJy4vYWxidW0nO1xuXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHRvSlNPTiBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvdGlmeVdyYXBwZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5hcGlVUkwgPSBvcHRpb25zLmFwaVVSTCB8fCBBUElfVVJMO1xuICAgIHRoaXMudG9rZW4gPSBvcHRpb25zLnRva2VuO1xuXG4gICAgdGhpcy5hbGJ1bSA9IGFsYnVtLmJpbmQodGhpcykoKTtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaC5iaW5kKHRoaXMpKCk7XG4gIH1cblxuICByZXF1ZXN0KHVybCkge1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLnRva2VufWAsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgaGVhZGVycykudGhlbih0b0pTT04pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTs7Ozs7O0FBbEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = search;\nfunction searcher(type, query) {\n  return this.request(this.apiURL + '/search?q=' + query + '&type=' + type);\n}\n\nfunction search() {\n  return {\n    albums: searcher.bind(this, 'album'),\n    artists: searcher.bind(this, 'artist'),\n    tracks: searcher.bind(this, 'track'),\n    playlists: searcher.bind(this, 'playlist')\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvc3JjL3NlYXJjaC5qcz83NTFjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNlYXJjaGVyKHR5cGUsIHF1ZXJ5KSB7XG4gIHJldHVybiB0aGlzLnJlcXVlc3QoYCR7dGhpcy5hcGlVUkx9L3NlYXJjaD9xPSR7cXVlcnl9JnR5cGU9JHt0eXBlfWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2goKSB7XG4gIHJldHVybiB7XG4gICAgYWxidW1zOiBzZWFyY2hlci5iaW5kKHRoaXMsICdhbGJ1bScpLFxuICAgIGFydGlzdHM6IHNlYXJjaGVyLmJpbmQodGhpcywgJ2FydGlzdCcpLFxuICAgIHRyYWNrczogc2VhcmNoZXIuYmluZCh0aGlzLCAndHJhY2snKSxcbiAgICBwbGF5bGlzdHM6IHNlYXJjaGVyLmJpbmQodGhpcywgJ3BsYXlsaXN0JyksXG4gIH07XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/search.js\n");

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