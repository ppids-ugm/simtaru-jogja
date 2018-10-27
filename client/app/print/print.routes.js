'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('print', {
      url: '/print',
      template: '<print></print>'
    });
}
