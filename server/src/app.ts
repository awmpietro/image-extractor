export {};
require('dotenv').config();
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

const port = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);

const io = require('socket.io').listen(server);

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

const { url } = require('./config/database');
const { extractImages } = require('./lib/webCrawler');
const ImageModel = require('./models/Image');

// Mongo Connection
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Conectado');
  })
  .catch((error: Error) => {
    console.log(error);
  });

// Websocket requests
io.on('connection', (socket: any) => {
  console.log(`Connected to Socket: ${socket.id}`);

  socket.on('extract', async ({ url }: any) => {
    try {
      const imgs = await extractImages(url);
      ImageModel.insertMany(imgs, (err: Error) => {
        if (err) {
          throw new Error(err.message);
        }
        socket.emit('extractSuccess', imgs);
      });
    } catch (error) {
      socket.emit('extractError', error.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use((req: any, res: any) => {
  res.status(404).send('Unable to find the requested resource');
});

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
