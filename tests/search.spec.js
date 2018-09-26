import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

import { API_URL } from '../src/config';

describe('Search', () => {
  let stubedFetch;
  let promise;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: data => ({ data }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should exist the albums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the artists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('artists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Rihanna');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = spotify.search.artists('Rihanna');
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/search?q=Rihanna&type=artist`);

      const artists2 = spotify.search.artists('Beyoncé');
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/search?q=Beyoncé&type=artist`);
    });
  });

  describe('albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Rihanna');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = spotify.search.albums('Rihanna');
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/search?q=Rihanna&type=album`);

      const albums2 = spotify.search.albums('Beyoncé');
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/search?q=Beyoncé&type=album`);
    });
  });

  describe('tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Rihanna');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = spotify.search.tracks('Rihanna');
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/search?q=Rihanna&type=track`);

      const tracks2 = spotify.search.tracks('Beyoncé');
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/search?q=Beyoncé&type=track`);
    });
  });

  describe('playlists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('Rihanna');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const playlists = spotify.search.playlists('Rihanna');
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/search?q=Rihanna&type=playlist`);

      const playlists2 = spotify.search.playlists('Beyoncé');
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/search?q=Beyoncé&type=playlist`);
    });
  });
});
