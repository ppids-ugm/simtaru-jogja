'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('listlaporan', {
      url: '/listlaporan',
      template: '<listlaporan></listlaporan>'
    });
}
