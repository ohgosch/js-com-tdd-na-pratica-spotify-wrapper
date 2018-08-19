import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

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
    let stubedStub;
    let promise;

    beforeEach(() => {
      stubedStub = sinon.stub(global, 'fetch');
      promise = stubedStub.resolves({ json: (data) => ({ data }) });
    });

    afterEach(() => {
      stubedStub.restore();
    });

    it('should call fetch function', () => {
      const artists = search();
      expect(stubedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {

      context('passing one type', () => {
        const artists = search('Rihanna', 'artist');
        expect(stubedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=artist');

        const albuns = search('Rihanna', 'album');
        expect(stubedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=album');
      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Rihanna', ['artist', 'album']);
        expect(stubedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Rihanna&type=artist,album');
      });
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({ body: 'json' });

      const artists = search('Rihanna', 'artist');

      artists.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });
});
