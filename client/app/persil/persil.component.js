//'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const L = require('leaflet');
import routes from './persil.routes';
//import '';



export class PersilComponent {
  /*@ngInject*/
  constructor(socket, $scope, $http, $sce) {
    this.socket = socket;
    this.$scope = $scope;
    this.$http = $http;


    var map = L.map('mapid').setView([-7.8049497, 110.3738942], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(map);


    this.addDataToMap = function (data, map) {
      var dataLayer = L.geoJson(data);
      dataLayer.addTo(map);
    };

  
    var jalangsb = L.tileLayer.wms('http://geoportal.ppids.ft.ugm.ac.id/geoserver/sitaru/wms?', {
      layers: 'sitaru:jalan_gsb',
      tiled: true,
      format: 'image/png',
      transparent: true
    }).addTo(map);



    this.getData = function () {
      console.log('getting data');
      // Geoserver endpoint. Change accordingly
      //var url_geojson = 'http://geoportal.ppids.ft.ugm.ac.id/geoserver/sitaru/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sitaru%3Apola_ruang_rdtr&outputFormat=text%2Fjavascript&srsName:EPSG:4326';
      var url_geojson = 'http://geoportal.ppids.ft.ugm.ac.id/geoserver/sitaru/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sitaru%3Apola_ruang_rdtr&outputFormat=application/json';
      //var url_geojson = 'http://localhost:8080/geoserver/sitaru/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sitaru%3APola_Ruang_RDTR&outputFormat=text%2Fjavascript&srsName:EPSG:4326';

      // JSONP must use $sce for trusted url
      /*
      $http.jsonp($sce.trustAsResourceUrl(url_geojson))
        .then(function (response) {
          console.log('url_geojson');
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        });
        */
      $http.get(url_geojson)
      .then(function(response){
          console.log(response);
      }, function (error){
          console.log(error)
      });


    }; //getdata



  } //constructor


  $onInit() {
    this.getData();



  } //onInit



}

export default angular.module('simtaruJogjaApp.persil', [uiRouter])
  .config(routes)
  .component('persil', {
    template: require('./persil.html'),
    controller: PersilComponent,
    controllerAs: 'persilCtrl'
  })
  .name;
