# Image Extractor

[![](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![](https://img.shields.io/badge/dependencies-docker-blue.svg)]()
[![](https://img.shields.io/badge/node-%3E%3D12-green.svg)]()
[![](https://img.shields.io/badge/express-4-important.svg)]()
[![](https://img.shields.io/badge/react-16.14.0-lightgrey.svg)]()
[![](https://img.shields.io/badge/redux-4-9cf.svg)]()
[![](https://img.shields.io/badge/mongo-nosql-blue.svg)]()

## Dependency:

Image Extractor requires [Docker](https://docs.docker.com/docker-for-mac/install/) (Created on Docker desktop community for MacOS - Engine: 10.03.8, Compose: 1.25.4)

## How to Run:

```sh
git clone https://github.com/awmpietro/image-extractor.git
cd image-extractor
docker-compose up
```

After building, You can access the app on `http://localhost:5000`. server will run on `http://localhost:8080`

## The project

The project is made by 3 services:

- [server] - Built on top of Node
- [client] - Built on top of React
- [mongo] - nosql database
