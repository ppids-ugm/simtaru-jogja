'use strict';
const angular = require('angular');

/*@ngInject*/
export function dataFactoryService() {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
  return {
    someMethod() {
      return meaningOfLife;
    }
  };
}


export default angular.module('simtaruJogjaApp.dataFactory', [])
  .factory('dataFactory', dataFactoryService)
  .name;
