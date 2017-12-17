# Basic schema how to receive JSON data from App by API

> Simple **NodeJS/Express** and **MongoDB** project

## Installation

First install [node.js](http://nodejs.org/), [yarn](https://yarnpkg.com/lang/en/) and [mongodb](https://www.mongodb.com/download-center?jmp=nav#community). Then:
``` sh
$ yarn install
```
## Start project

**Note:** _create folder for MongoDB storage_
``` sh
$ mongod --dbpath /your-path-to-local-mongodb-storage/
$ mongo
$ yarn start
```

### Send JSON data from your App by http POST method.
* Rout to receive data: [http://localhost:7777/api/news](http://localhost:7777/api/news)
* use [Robo 3T](https://robomongo.org/) to check data in DB
