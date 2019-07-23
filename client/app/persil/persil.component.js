//'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const L = require('leaflet');
import routes from './persil.routes';
//import '';



export class PersilComponent {
  /*@ngInject*/
  constructor(socket) {
    this.socket = socket;
    this.message = 'Hello';

    var map = L.map('mapid').setView([51.505, -0.09], 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
  }).addTo(map);

  var sidebar = L.control.sidebar({
    container: 'sidebar',
    position: 'right'
  })
  .addTo(map)
  .open('home');

} //constructor


  
  

}

export default angular.module('simtaruJogjaApp.persil', [uiRouter])
  .config(routes)
  .component('persil', {
    template: require('./persil.html'),
    controller: PersilComponent,
    controllerAs: 'persilCtrl'
  })
  .name;
