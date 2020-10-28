const chai = require('chai');
const app = require('../app');
const { extractImages } = require('../lib/webCrawler');

let should = chai.should();
let expect = chai.expect;

describe('Image Extractor', () => {
  const url = 'https://www.folha.com.br';

  it('should return an array of images', (done) => {
    extractImages(url).then((imgs) => {
      imgs.should.be.an('array');
      done();
    });
  });
});
