'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
//const moment = require('');

import routes from './print.routes';
import 'leaflet/dist/leaflet.css';
import '../../assets/js/jquery.qrcode.min.js';
import moment from 'moment';
//import 'moment/min/moment.min.js';
//import '../../assets/js/locale/id.js';
//var moment = require('moment');
//import qrcode from 'qrcode-generator';
//import qrcode_UTF8 from 'qrcode-generator/qrcode_UTF8';
//import ngQrcode from 'angular-qrcode';

//window.qrcode = qrcode;

export class PrintComponent {
  /*@ngInject*/
  constructor($scope, $http, $state, leafletData, $rootScope) {
    this.param = $state.params;
    $rootScope.show = false; // remove the navbar

    $scope.advisData = {};
    $scope.userData = {};
    $scope.tanggal = '';

    $scope.getUserData = function (id) {
      $http.get('/api/users/' + id).then(function (success) {
        console.log('success', success.data);
        $scope.userData = success.data;
      }, function (error) {
        console.log('error', error);
      });
    }

    this.getAdvisData = function () {
      $http.get('/api/adviceplans/' + this.param.printId).then(function (success) {
        console.log('success', success.data);
        //getting user
        $scope.getUserData(success.data.user);

        //getting data
        $scope.advisData = success.data;
        var latlng = $scope.advisData.zonasi.koordinat;
        //setting map
        console.log(latlng);
        leafletData.getMap('printmap').then(function (map) {
          map.setView(latlng, 17);
          //var marker = L.marker([-7.812577081629225, 110.35916805267335]).addTo(map);
          var popup = L.popup()
            .setLatLng(latlng)
            .setContent("Lokasi")
            .openOn(map)
        });
        
      }, function (error) {
        console.log('error', error);
      });
    };

    //get current location for QRCode
    angular.element('#qrcode').qrcode({width: 150,height: 150,text: window.location.href});

    //get current date for sign column
    moment.locale('id');
    $scope.tanggal = moment().format('LL');
    console.log($scope.tanggal);

  }

  $onInit() {
    // console.log(this.param);
    this.getAdvisData();

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
