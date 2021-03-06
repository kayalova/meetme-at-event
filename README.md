# meetme-at-event
REST API with Node.js, TypeScript, MongoDB and Docker, welcome l&amp;g

## Built with
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)

## Prerequisites

Make sure you have [Docker](https://www.docker.com/) installed on your computer

## To start server
```
$ npm run build
$ docker-compose up --build
``` 

## API
```
sign in
POST /auth/signin

sign up
POST /auth/signup

get all events
GET /events/

create event (authentication required)
POST /events/create

filter events
GET /events/filter

join event
PUT /events/join

cancel event's visit
PUT /events/cancel
```
