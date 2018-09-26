import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Album', () => {
  let stubedFetch;
  let promise;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: data => ({ data }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const album = spotify.album.getAlbum('4UlGauD7ROb3YbVOFMgW5u');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/albums/4UlGauD7ROb3YbVOFMgW5u`);

      const album2 = spotify.album.getAlbum('5pKCCKE2ajJHZ9KAiaK11H');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/albums/5pKCCKE2ajJHZ9KAiaK11H`);
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });

      const album = spotify.album.getAlbum('4UlGauD7ROb3YbVOFMgW5u');

      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = spotify.album.getAlbums(['4UlGauD7ROb3YbVOFMgW5u', '5pKCCKE2ajJHZ9KAiaK11H']);
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/albums/?ids=4UlGauD7ROb3YbVOFMgW5u,5pKCCKE2ajJHZ9KAiaK11H`);
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });

      const album = spotify.album.getAlbums('4UlGauD7ROb3YbVOFMgW5u');

      album.then(data => {
        // expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getTracks', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const album = spotify.album.getTracks('4UlGauD7ROb3YbVOFMgW5u');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/albums/4UlGauD7ROb3YbVOFMgW5u/tracks`);

      const album2 = spotify.album.getTracks('5pKCCKE2ajJHZ9KAiaK11H');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/albums/5pKCCKE2ajJHZ9KAiaK11H/tracks`);
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });

      const album = spotify.album.getTracks('4UlGauD7ROb3YbVOFMgW5u');

      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});
