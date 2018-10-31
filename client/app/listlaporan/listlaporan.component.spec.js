'use strict';

describe('Component: ListlaporanComponent', function() {
  // load the controller's module
  beforeEach(module('simtaruJogjaApp.listlaporan'));

  var ListlaporanComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ListlaporanComponent = $componentController('listlaporan', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
