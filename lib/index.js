'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _search = require('./search');

var _album = require('./album');

exports.default = {
  search: _search.search,
  searchAlbums: _search.searchAlbums,
  searchArtists: _search.searchArtists,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};