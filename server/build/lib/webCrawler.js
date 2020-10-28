"use strict";
var Crawler = require('crawler');
var extractImages = function (url) {
    var imgs = [];
    return new Promise(function (resolve, reject) {
        var c = new Crawler({
            rateLimit: 2000,
            callback: function (error, results, done) {
                if (error) {
                    reject(error);
                }
                else {
                    var images_1 = results.$('img');
                    images_1.each(function (index) {
                        if (images_1[index].attribs.src) {
                            imgs.push({
                                src: images_1[index].attribs.src,
                                title: url,
                                description: images_1[index].attribs.alt,
                            });
                        }
                    });
                }
                done();
                resolve(imgs);
            },
        });
        c.queue(url);
    });
};
module.exports = { extractImages: extractImages };
