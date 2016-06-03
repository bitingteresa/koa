# Teresa's Hello World Problem

### UP & RUNNING
* `npm install`
* `npm start`
* `mongod` running
* visit `http://localhost:8080/`
* use `postman`

### About
**v.1.0.0**
This is the server-side Node/Koa application. I chose Koa to offset the main downfall that Node has which is callback hell. Koa 1 uses generators from ES2015 which node --harmony supports, but in Koa 2 the use of generators is dropped in favor of `async` and `await`. So I used babel to compile and use ES2016 syntax. I created a REST-like API with endpoints for the client-side application to hit.    

### Data
I am using MongoDB and nested documents. There are two collections `users` and `addresses`. I chose to do two collections because in a real production setting the more decoupling and microservice structure you can attain the easier it is to scale and use across multiple applications. Currently, data is normalized on the client-side, but can be done on the server-side.

#### Users Data object
```javascript
  {
    "_id": "574f9683546bc103009f5886",
    "firstName": "ubu",
    "lastName": "lee",
    "address": "574f8449546bc103009f5884",
    "created_at": "2016-06-02T02:14:27.463Z",
    "updated_at": "2016-06-02T02:14:27.463Z"
  }
```
User's address property is given a a reference to the `_id` to the address collection.

#### Addresses Data object
```javascript
  {
    "_id": "574f8449546bc103009f5884",
    "firstLine": "1569 tree st",
    "city": "meow town",
    "state": "NY",
    "zip": "67215",
    "country": "US",
    "created_at": "2016-06-02T00:56:41.806Z",
    "updated_at": "2016-06-02T00:56:41.806Z"
  }
```

### API Endpoints

### users
GET all `https://hello-ss.herokuapp.com/users`

GET single `https://hello-ss.herokuapp.com/users/:userId`

POST single `https://hello-ss.herokuapp.com/users`

PATCH single `https://hello-ss.herokuapp.com/users/:userId`

DELETE single `https://hello-ss.herokuapp.com/users/:userId`

### addresses
GET all `https://hello-ss.herokuapp.com/addresses`

GET single `https://hello-ss.herokuapp.com/addresses/:singleId`

DELETE single `https://hello-ss.herokuapp.com/addresses/:singleId`
