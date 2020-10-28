const Crawler = require('crawler');

const extractImages = (url: string) => {
  const imgs: {
    src: string;
    title: string;
    description: string;
  }[] = [];
  return new Promise((resolve, reject) => {
    const c = new Crawler({
      rateLimit: 2000,
      callback: (error: Error, results: any, done: any) => {
        if (error) {
          reject(error);
        } else {
          const images = results.$('img');
          images.each((index: number) => {
            if (images[index].attribs.src) {
              imgs.push({
                src: images[index].attribs.src,
                title: url,
                description: images[index].attribs.alt,
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

module.exports = { extractImages };
