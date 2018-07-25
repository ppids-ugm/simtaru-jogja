'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newRdtrdata;

describe('Rdtrdata API:', function() {
  describe('GET /api/rdtrdatas', function() {
    var rdtrdatas;

    beforeEach(function(done) {
      request(app)
        .get('/api/rdtrdatas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          rdtrdatas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(rdtrdatas).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/rdtrdatas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/rdtrdatas')
        .send({
          name: 'New Rdtrdata',
          info: 'This is the brand new rdtrdata!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newRdtrdata = res.body;
          done();
        });
    });

    it('should respond with the newly created rdtrdata', function() {
      expect(newRdtrdata.name).to.equal('New Rdtrdata');
      expect(newRdtrdata.info).to.equal('This is the brand new rdtrdata!!!');
    });
  });

  describe('GET /api/rdtrdatas/:id', function() {
    var rdtrdata;

    beforeEach(function(done) {
      request(app)
        .get(`/api/rdtrdatas/${newRdtrdata._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          rdtrdata = res.body;
          done();
        });
    });

    afterEach(function() {
      rdtrdata = {};
    });

    it('should respond with the requested rdtrdata', function() {
      expect(rdtrdata.name).to.equal('New Rdtrdata');
      expect(rdtrdata.info).to.equal('This is the brand new rdtrdata!!!');
    });
  });

  describe('PUT /api/rdtrdatas/:id', function() {
    var updatedRdtrdata;

    beforeEach(function(done) {
      request(app)
        .put(`/api/rdtrdatas/${newRdtrdata._id}`)
        .send({
          name: 'Updated Rdtrdata',
          info: 'This is the updated rdtrdata!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedRdtrdata = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRdtrdata = {};
    });

    it('should respond with the updated rdtrdata', function() {
      expect(updatedRdtrdata.name).to.equal('Updated Rdtrdata');
      expect(updatedRdtrdata.info).to.equal('This is the updated rdtrdata!!!');
    });

    it('should respond with the updated rdtrdata on a subsequent GET', function(done) {
      request(app)
        .get(`/api/rdtrdatas/${newRdtrdata._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let rdtrdata = res.body;

          expect(rdtrdata.name).to.equal('Updated Rdtrdata');
          expect(rdtrdata.info).to.equal('This is the updated rdtrdata!!!');

          done();
        });
    });
  });

  describe('PATCH /api/rdtrdatas/:id', function() {
    var patchedRdtrdata;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/rdtrdatas/${newRdtrdata._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Rdtrdata' },
          { op: 'replace', path: '/info', value: 'This is the patched rdtrdata!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedRdtrdata = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedRdtrdata = {};
    });

    it('should respond with the patched rdtrdata', function() {
      expect(patchedRdtrdata.name).to.equal('Patched Rdtrdata');
      expect(patchedRdtrdata.info).to.equal('This is the patched rdtrdata!!!');
    });
  });

  describe('DELETE /api/rdtrdatas/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/rdtrdatas/${newRdtrdata._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when rdtrdata does not exist', function(done) {
      request(app)
        .delete(`/api/rdtrdatas/${newRdtrdata._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
