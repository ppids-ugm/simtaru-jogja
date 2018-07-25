'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './adminlte.routes';

export class AdminlteComponent {
  /*@ngInject*/
  //$scope = $scope;  

  

  constructor() {
    this.message = 'Hello';
    //this.$scope = $scope;
    this.center = {
      lat: -7.7830961,
      lng: 110.3666712,
      zoom: 17
    };


    this.map = {
      layers: {
        baselayers: {
          carto: {
            name: "Carto Positron",
            type: "xyz",
            url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png",
            layerOptions: {
              subdomains: 'abcd',
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
              continuousWorld: true
            }
          }
        },
        overlays: {
          rdtrprov: {
            name: 'RDTR Kota Yogyakarta',
            type: 'wms',
            visible: true,
            url: 'http://gis.jogjaprov.go.id:8080/geoserver/geonode/wms/',
            layerOptions: {
              layers: 'geonode:pola_ruang_rdtr_kota_jogja',
              format: 'image/png',
              opacity: 0.75,
              version: '1.1.0',
              crs: L.CRS.EPSG4326
            }
          }
        }
      }
    }; //map
  }
}

export default angular.module('starlingApp.adminlte', [uiRouter])
  .config(routes)
  .component('adminlte', {
    template: require('./adminlte.html'),
    controller: AdminlteComponent,
    controllerAs: 'adminlteCtrl'
    
    
  })
  .name;
