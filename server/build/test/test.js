"use strict";
var chai = require('chai');
var app = require('../app');
var extractImages = require('../lib/webCrawler').extractImages;
var should = chai.should();
var expect = chai.expect;
describe('Image Extractor', function () {
    var url = 'https://www.folha.com.br';
    it('should return an array of images', function (done) {
        extractImages(url).then(function (imgs) {
            imgs.should.be.an('array');
            done();
        });
    });
});
