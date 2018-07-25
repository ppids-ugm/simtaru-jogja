'use strict';
const angular = require('angular');

/*@ngInject*/
export function dataFactoryService($http) {
  // Service logic
  // ...

   var data = {};

  var meaningOfLife = 42;
/*
  data.rdtr = function () {
    return $http.get('http://localhost:3000/assets/data/rdtr.geojson')
  }

  data.attribute = function () {
    var attribute = 35;
    return attribute;
  }
*/
  return data;


  // Public API here
  /*
  return {
    rdtrGeojson() {
      var data = $http.get('http://localhost:3000/assets/data/rdtr.geojson').then(
        response => {
          return response.data;
        }
      )
      return data;
    }
  };
  */
}


export default angular.module('simtaruJogjaApp.dataFactory', [])
  .factory('dataFactory', dataFactoryService)
  .name;
