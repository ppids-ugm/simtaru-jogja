'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSkrk;

describe('Skrk API:', function() {
  describe('GET /api/skrks', function() {
    var skrks;

    beforeEach(function(done) {
      request(app)
        .get('/api/skrks')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          skrks = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(skrks).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/skrks', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/skrks')
        .send({
          name: 'New Skrk',
          info: 'This is the brand new skrk!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSkrk = res.body;
          done();
        });
    });

    it('should respond with the newly created skrk', function() {
      expect(newSkrk.name).to.equal('New Skrk');
      expect(newSkrk.info).to.equal('This is the brand new skrk!!!');
    });
  });

  describe('GET /api/skrks/:id', function() {
    var skrk;

    beforeEach(function(done) {
      request(app)
        .get(`/api/skrks/${newSkrk._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          skrk = res.body;
          done();
        });
    });

    afterEach(function() {
      skrk = {};
    });

    it('should respond with the requested skrk', function() {
      expect(skrk.name).to.equal('New Skrk');
      expect(skrk.info).to.equal('This is the brand new skrk!!!');
    });
  });

  describe('PUT /api/skrks/:id', function() {
    var updatedSkrk;

    beforeEach(function(done) {
      request(app)
        .put(`/api/skrks/${newSkrk._id}`)
        .send({
          name: 'Updated Skrk',
          info: 'This is the updated skrk!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSkrk = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSkrk = {};
    });

    it('should respond with the updated skrk', function() {
      expect(updatedSkrk.name).to.equal('Updated Skrk');
      expect(updatedSkrk.info).to.equal('This is the updated skrk!!!');
    });

    it('should respond with the updated skrk on a subsequent GET', function(done) {
      request(app)
        .get(`/api/skrks/${newSkrk._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let skrk = res.body;

          expect(skrk.name).to.equal('Updated Skrk');
          expect(skrk.info).to.equal('This is the updated skrk!!!');

          done();
        });
    });
  });

  describe('PATCH /api/skrks/:id', function() {
    var patchedSkrk;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/skrks/${newSkrk._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Skrk' },
          { op: 'replace', path: '/info', value: 'This is the patched skrk!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSkrk = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSkrk = {};
    });

    it('should respond with the patched skrk', function() {
      expect(patchedSkrk.name).to.equal('Patched Skrk');
      expect(patchedSkrk.info).to.equal('This is the patched skrk!!!');
    });
  });

  describe('DELETE /api/skrks/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/skrks/${newSkrk._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when skrk does not exist', function(done) {
      request(app)
        .delete(`/api/skrks/${newSkrk._id}`)
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
