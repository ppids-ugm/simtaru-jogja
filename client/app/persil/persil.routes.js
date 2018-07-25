'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('persil', {
      url: '/persil',
      template: '<persil></persil>'
    });
}
