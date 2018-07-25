'use strict';

describe('Component: PersilComponent', function() {
  // load the controller's module
  beforeEach(module('simtaruJogjaApp.persil'));

  var PersilComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PersilComponent = $componentController('persil', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
