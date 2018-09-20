'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newIntensitasruang;

describe('Intensitasruang API:', function() {
  describe('GET /api/intensitasruangs', function() {
    var intensitasruangs;

    beforeEach(function(done) {
      request(app)
        .get('/api/intensitasruangs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          intensitasruangs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(intensitasruangs).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/intensitasruangs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/intensitasruangs')
        .send({
          name: 'New Intensitasruang',
          info: 'This is the brand new intensitasruang!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newIntensitasruang = res.body;
          done();
        });
    });

    it('should respond with the newly created intensitasruang', function() {
      expect(newIntensitasruang.name).to.equal('New Intensitasruang');
      expect(newIntensitasruang.info).to.equal('This is the brand new intensitasruang!!!');
    });
  });

  describe('GET /api/intensitasruangs/:id', function() {
    var intensitasruang;

    beforeEach(function(done) {
      request(app)
        .get(`/api/intensitasruangs/${newIntensitasruang._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          intensitasruang = res.body;
          done();
        });
    });

    afterEach(function() {
      intensitasruang = {};
    });

    it('should respond with the requested intensitasruang', function() {
      expect(intensitasruang.name).to.equal('New Intensitasruang');
      expect(intensitasruang.info).to.equal('This is the brand new intensitasruang!!!');
    });
  });

  describe('PUT /api/intensitasruangs/:id', function() {
    var updatedIntensitasruang;

    beforeEach(function(done) {
      request(app)
        .put(`/api/intensitasruangs/${newIntensitasruang._id}`)
        .send({
          name: 'Updated Intensitasruang',
          info: 'This is the updated intensitasruang!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedIntensitasruang = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedIntensitasruang = {};
    });

    it('should respond with the updated intensitasruang', function() {
      expect(updatedIntensitasruang.name).to.equal('Updated Intensitasruang');
      expect(updatedIntensitasruang.info).to.equal('This is the updated intensitasruang!!!');
    });

    it('should respond with the updated intensitasruang on a subsequent GET', function(done) {
      request(app)
        .get(`/api/intensitasruangs/${newIntensitasruang._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let intensitasruang = res.body;

          expect(intensitasruang.name).to.equal('Updated Intensitasruang');
          expect(intensitasruang.info).to.equal('This is the updated intensitasruang!!!');

          done();
        });
    });
  });

  describe('PATCH /api/intensitasruangs/:id', function() {
    var patchedIntensitasruang;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/intensitasruangs/${newIntensitasruang._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Intensitasruang' },
          { op: 'replace', path: '/info', value: 'This is the patched intensitasruang!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedIntensitasruang = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedIntensitasruang = {};
    });

    it('should respond with the patched intensitasruang', function() {
      expect(patchedIntensitasruang.name).to.equal('Patched Intensitasruang');
      expect(patchedIntensitasruang.info).to.equal('This is the patched intensitasruang!!!');
    });
  });

  describe('DELETE /api/intensitasruangs/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/intensitasruangs/${newIntensitasruang._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when intensitasruang does not exist', function(done) {
      request(app)
        .delete(`/api/intensitasruangs/${newIntensitasruang._id}`)
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
