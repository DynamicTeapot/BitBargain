console.log('test starting');
//circleci test
var express = require('express');
var request = require('supertest');
var appRouter = require('../server/router/clientRouter')

var testApp = express();
testApp.use('/', appRouter);


describe('Router', function(){
  describe('GET /items/:id', function() {
    it('responds with that item', function(done) {
      request(testApp)
        .get('/items/hotcakes')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });


  describe('GET /items/categories', function() {
    it('responds with categories', function(done) {
      request(testApp)
        .get('/items/categories')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });


  describe('POST /items/:id/buy & POST /items/:id/sell', function() {
    it('responds on buy with data for buy', function(done) {
      request(testApp)
        .post('/items/hotcakes/buy')
        .expect(200, done);
    });
    it('responds on sell with data for sell', function(done) {
      request(testApp)
        .post('/items/hotcakes/sell')
        .expect(200, done);
    })
  });


  describe('GET /items/:id/shipped', function() {
    it('responds with shipped item', function(done) {
      request(testApp)
        .get('/items/hotcakes/shipped')
        .expect(200, done);
    });
  });


  describe('PUT /items/:id/update', function() {
    it('responds and updates that item', function(done) {
      request(testApp)
        .put('/items/hotcakes/update')
        .expect(200, done);
    });
  });
});
