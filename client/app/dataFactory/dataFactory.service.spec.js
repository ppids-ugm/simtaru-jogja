'use strict';

describe('Service: dataFactory', function() {
  // load the service's module
  beforeEach(module('simtaruJogjaApp.dataFactory'));

  // instantiate service
  var dataFactory;
  beforeEach(inject(function(_dataFactory_) {
    dataFactory = _dataFactory_;
  }));

  it('should do something', function() {
    expect(!!dataFactory).to.be.true;
  });
});
