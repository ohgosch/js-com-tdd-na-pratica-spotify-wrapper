import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists
} from '../src/main';

describe('Spotify Wrapper', () => {
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
    let fetchedStub;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;

      fetchedStub.restore();
    });

    it('should receive the correct url to fetch', () => {

      context('passing one type', () => {
        const artists = search('Rihanna', 'artist');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=artist');

        const albuns = search('Rihanna', 'album');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=album');

        fetchedStub.restore();
      });

      context('passing more than one type', () => {

        // const artistsAndAlbums = search('Rihanna', ['artist', 'album']);
        // expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=artist,album');
      });

    });
  });
});
