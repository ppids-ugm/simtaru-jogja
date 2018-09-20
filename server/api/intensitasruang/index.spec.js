'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var intensitasruangCtrlStub = {
  index: 'intensitasruangCtrl.index',
  show: 'intensitasruangCtrl.show',
  create: 'intensitasruangCtrl.create',
  upsert: 'intensitasruangCtrl.upsert',
  patch: 'intensitasruangCtrl.patch',
  destroy: 'intensitasruangCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var intensitasruangIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './intensitasruang.controller': intensitasruangCtrlStub
});

describe('Intensitasruang API Router:', function() {
  it('should return an express router instance', function() {
    expect(intensitasruangIndex).to.equal(routerStub);
  });

  describe('GET /api/intensitasruangs', function() {
    it('should route to intensitasruang.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'intensitasruangCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/intensitasruangs/:id', function() {
    it('should route to intensitasruang.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'intensitasruangCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/intensitasruangs', function() {
    it('should route to intensitasruang.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'intensitasruangCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/intensitasruangs/:id', function() {
    it('should route to intensitasruang.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'intensitasruangCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/intensitasruangs/:id', function() {
    it('should route to intensitasruang.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'intensitasruangCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/intensitasruangs/:id', function() {
    it('should route to intensitasruang.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'intensitasruangCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
