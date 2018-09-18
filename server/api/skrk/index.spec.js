'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var skrkCtrlStub = {
  index: 'skrkCtrl.index',
  show: 'skrkCtrl.show',
  create: 'skrkCtrl.create',
  upsert: 'skrkCtrl.upsert',
  patch: 'skrkCtrl.patch',
  destroy: 'skrkCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var skrkIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './skrk.controller': skrkCtrlStub
});

describe('Skrk API Router:', function() {
  it('should return an express router instance', function() {
    expect(skrkIndex).to.equal(routerStub);
  });

  describe('GET /api/skrks', function() {
    it('should route to skrk.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'skrkCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/skrks/:id', function() {
    it('should route to skrk.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'skrkCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/skrks', function() {
    it('should route to skrk.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'skrkCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/skrks/:id', function() {
    it('should route to skrk.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'skrkCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/skrks/:id', function() {
    it('should route to skrk.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'skrkCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/skrks/:id', function() {
    it('should route to skrk.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'skrkCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
