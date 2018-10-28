'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var adviceplanCtrlStub = {
  index: 'adviceplanCtrl.index',
  show: 'adviceplanCtrl.show',
  create: 'adviceplanCtrl.create',
  upsert: 'adviceplanCtrl.upsert',
  patch: 'adviceplanCtrl.patch',
  destroy: 'adviceplanCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var adviceplanIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './adviceplan.controller': adviceplanCtrlStub
});

describe('Adviceplan API Router:', function() {
  it('should return an express router instance', function() {
    expect(adviceplanIndex).to.equal(routerStub);
  });

  describe('GET /api/adviceplans', function() {
    it('should route to adviceplan.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'adviceplanCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/adviceplans/:id', function() {
    it('should route to adviceplan.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'adviceplanCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/adviceplans', function() {
    it('should route to adviceplan.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'adviceplanCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/adviceplans/:id', function() {
    it('should route to adviceplan.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'adviceplanCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/adviceplans/:id', function() {
    it('should route to adviceplan.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'adviceplanCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/adviceplans/:id', function() {
    it('should route to adviceplan.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'adviceplanCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
