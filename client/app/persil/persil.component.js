'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './persil.routes';

export class PersilComponent {
  /*@ngInject*/
  constructor(socket) {
    this.socket = socket;
    this.message = 'Hello';
  }
}

export default angular.module('simtaruJogjaApp.persil', [uiRouter])
  .config(routes)
  .component('persil', {
    template: require('./persil.html'),
    controller: PersilComponent,
    controllerAs: 'persilCtrl'
  })
  .name;
