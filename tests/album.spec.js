import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import { getAlbum, getAlbumTracks } from '../src/album';

describe('Album', () => {
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
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const album = getAlbum('4UlGauD7ROb3YbVOFMgW5u');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4UlGauD7ROb3YbVOFMgW5u');

      const album2 = getAlbum('5pKCCKE2ajJHZ9KAiaK11H');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/5pKCCKE2ajJHZ9KAiaK11H');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });

      const album = getAlbum('4UlGauD7ROb3YbVOFMgW5u');

      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      })
    });
  });
});
