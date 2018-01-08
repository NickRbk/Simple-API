# Basic schema to connect [SiteSputnik](http://sitesputnik.ru/) with API 
(_server side_)

> Simple **NodeJS/Express** and **MongoDB** project

## Installation

First install [node.js](http://nodejs.org/) and [mongodb](https://www.mongodb.com/download-center?jmp=nav#community) and clone/download this project. Then:
``` sh
$ yarn install
```
## Start project

**Note:** _create folder for MongoDB storage_
``` sh
$ mongod --dbpath /your-path-to-local-mongodb-storage/
$ yarn start
```


* Rout to receive data: [http://localhost:7777/api/news](http://localhost:7777/api/news)
* use [Robo 3T](https://robomongo.org/) to check data in DB
