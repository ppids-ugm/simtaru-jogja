import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  awesomeThings = [];
  newThing = [];

  /*@ngInject*/
  constructor($http, $scope, socket, leafletData) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.leafletData = leafletData;
    $scope.geojson = {};
    $scope.center = {
      lat: -7.8142185,
      lng: 110.368708,
      zoom: 15
    };

    $scope.getData = function () {
      $http.get('http://localhost:3000/assets/data/rdtr.geojson')
        .then (response => {
          $scope.geojson = response;
          angular.extend($scope.map.layers.overlays, {
            geojson: {
                data: response.data,
                name: 'RDTR JSON',
                type:'geoJSONShape',
                resetStyleOnMouseout: true,
                style: {
                    fillColor: "green",
                    weight: 2,
                    //opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                }
            }
        });
        });
    }


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.map = {
      layers: {
        baselayers: {
          osm: {
            name: "OpenStreetMap",
            type: "xyz",
            url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            layerOptions: {
              subdomains: ["a", "b", "c"],
              attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
              continuousWorld: true
            }
          }
        },
        overlays: {
          rdtr: {
            name: 'RDTR',
            type: 'wms',
            visible: false,
            enable: false,
            url: 'http://localhost:8080/geoserver/simtaru/wms',
            layerOptions: {
              layers: 'simtaru:rdtr',
              format: 'image/png',
              opacity: 0.75,
              //width:629,
              //height:768,
              crs: L.CRS.EPSG4326
            }
          },
          rdtrprov: {
            name: 'RDTR Provinsi',
            type: 'wms',
            visible: true,
            url: 'http://gis.jogjaprov.go.id:8080/geoserver/geonode/wms/',
            layerOptions: {
              layers: 'geonode:pola_ruang_rdtr_kota_jogja',
              format: 'image/png',
              opacity: 0.75,
              version: '1.1.0',
              //width:629,
              //height:768,
              crs: L.CRS.EPSG4326
            }
          }
        }
      }
    }; //map

  } //constructor



  $onInit() {
    this.$scope.getData();  

    
    
    
  };
}





export default angular.module('starlingApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;



  // -----------------------------------------

   /*
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
        
        angular.extend(this.map.layers.overlays, {
            geojson: {
                data: data,
                style: {
                    fillColor: "green",
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                }
            }
        });
    */