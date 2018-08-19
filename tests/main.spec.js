import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists
} from '../src/main';

describe('Spotify Wrapper', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: data => ({ data }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    // search (genérico) - + de 1 tipo
    // searchAlbums
    // searchArtists
    // searchTracks
    // searchPlaylists
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {

      context('passing one type', () => {
        const artists = search('Rihanna', 'artist');
        expect(stubedFetch).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=artist');

        const albuns = search('Rihanna', 'album');
        expect(stubedFetch).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=album');
      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Rihanna', ['artist', 'album']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=artist,album');
      });
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({ body: 'json' });

      const artists = search('Rihanna', 'artist');

      artists.then(data => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Rihanna');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = searchArtists('Rihanna');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=artist');

      const artists2 = searchArtists('Beyoncé');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Beyoncé&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Rihanna');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = searchAlbums('Rihanna');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=album');

      const albums2 = searchAlbums('Beyoncé');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Beyoncé&type=album');
    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Rihanna');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = searchTracks('Rihanna');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=track');

      const tracks2 = searchTracks('Beyoncé');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Beyoncé&type=track');
    });
  });

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Rihanna');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const playlists = searchPlaylists('Rihanna');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=playlist');

      const playlists2 = searchPlaylists('Beyoncé');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Beyoncé&type=playlist');
    });
  });
});
