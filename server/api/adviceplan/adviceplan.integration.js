'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newAdviceplan;

describe('Adviceplan API:', function() {
  describe('GET /api/adviceplans', function() {
    var adviceplans;

    beforeEach(function(done) {
      request(app)
        .get('/api/adviceplans')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          adviceplans = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(adviceplans).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/adviceplans', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/adviceplans')
        .send({
          name: 'New Adviceplan',
          info: 'This is the brand new adviceplan!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newAdviceplan = res.body;
          done();
        });
    });

    it('should respond with the newly created adviceplan', function() {
      expect(newAdviceplan.name).to.equal('New Adviceplan');
      expect(newAdviceplan.info).to.equal('This is the brand new adviceplan!!!');
    });
  });

  describe('GET /api/adviceplans/:id', function() {
    var adviceplan;

    beforeEach(function(done) {
      request(app)
        .get(`/api/adviceplans/${newAdviceplan._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          adviceplan = res.body;
          done();
        });
    });

    afterEach(function() {
      adviceplan = {};
    });

    it('should respond with the requested adviceplan', function() {
      expect(adviceplan.name).to.equal('New Adviceplan');
      expect(adviceplan.info).to.equal('This is the brand new adviceplan!!!');
    });
  });

  describe('PUT /api/adviceplans/:id', function() {
    var updatedAdviceplan;

    beforeEach(function(done) {
      request(app)
        .put(`/api/adviceplans/${newAdviceplan._id}`)
        .send({
          name: 'Updated Adviceplan',
          info: 'This is the updated adviceplan!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedAdviceplan = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAdviceplan = {};
    });

    it('should respond with the updated adviceplan', function() {
      expect(updatedAdviceplan.name).to.equal('Updated Adviceplan');
      expect(updatedAdviceplan.info).to.equal('This is the updated adviceplan!!!');
    });

    it('should respond with the updated adviceplan on a subsequent GET', function(done) {
      request(app)
        .get(`/api/adviceplans/${newAdviceplan._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let adviceplan = res.body;

          expect(adviceplan.name).to.equal('Updated Adviceplan');
          expect(adviceplan.info).to.equal('This is the updated adviceplan!!!');

          done();
        });
    });
  });

  describe('PATCH /api/adviceplans/:id', function() {
    var patchedAdviceplan;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/adviceplans/${newAdviceplan._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Adviceplan' },
          { op: 'replace', path: '/info', value: 'This is the patched adviceplan!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedAdviceplan = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedAdviceplan = {};
    });

    it('should respond with the patched adviceplan', function() {
      expect(patchedAdviceplan.name).to.equal('Patched Adviceplan');
      expect(patchedAdviceplan.info).to.equal('This is the patched adviceplan!!!');
    });
  });

  describe('DELETE /api/adviceplans/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/adviceplans/${newAdviceplan._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when adviceplan does not exist', function(done) {
      request(app)
        .delete(`/api/adviceplans/${newAdviceplan._id}`)
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
