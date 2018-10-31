'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './listlaporan.routes';

export class ListlaporanComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('simtaruJogjaApp.listlaporan', [uiRouter])
  .config(routes)
  .component('listlaporan', {
    template: require('./listlaporan.html'),
    controller: ListlaporanComponent,
    controllerAs: 'listlaporanCtrl'
  })
  .name;
