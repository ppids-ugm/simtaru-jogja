'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './print.routes';

export class PrintComponent {
  /*@ngInject*/
  constructor($scope) {
    this.message = 'Hello';

    
  }
}

export default angular.module('simtaruJogjaApp.print', [uiRouter])
  .config(routes)
  .component('print', {
    template: require('./print.html'),
    controller: PrintComponent,
    controllerAs: 'printCtrl'
  })
  .name;
