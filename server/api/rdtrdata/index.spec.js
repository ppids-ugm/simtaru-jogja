'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var rdtrdataCtrlStub = {
  index: 'rdtrdataCtrl.index',
  show: 'rdtrdataCtrl.show',
  create: 'rdtrdataCtrl.create',
  upsert: 'rdtrdataCtrl.upsert',
  patch: 'rdtrdataCtrl.patch',
  destroy: 'rdtrdataCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var rdtrdataIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './rdtrdata.controller': rdtrdataCtrlStub
});

describe('Rdtrdata API Router:', function() {
  it('should return an express router instance', function() {
    expect(rdtrdataIndex).to.equal(routerStub);
  });

  describe('GET /api/rdtrdatas', function() {
    it('should route to rdtrdata.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'rdtrdataCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/rdtrdatas/:id', function() {
    it('should route to rdtrdata.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'rdtrdataCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/rdtrdatas', function() {
    it('should route to rdtrdata.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'rdtrdataCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/rdtrdatas/:id', function() {
    it('should route to rdtrdata.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'rdtrdataCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/rdtrdatas/:id', function() {
    it('should route to rdtrdata.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'rdtrdataCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/rdtrdatas/:id', function() {
    it('should route to rdtrdata.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'rdtrdataCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
