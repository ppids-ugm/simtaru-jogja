import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  awesomeThings = [];
  newThing = [];

  /*@ngInject*/
  constructor($http, $scope, $rootScope, socket, leafletData) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.rootScope = $rootScope;
    this.leafletData = leafletData;
    $scope.mouseOver = {};
    $scope.geojson = {};
    $scope.center = {
      lat: -7.8142185,
      lng: 110.368708,
      zoom: 15
    };

    $scope.getData = function () {
      $http.get('http://localhost:3000/assets/data/rdtr.geojson')
        .then(response => {
          $scope.geojson = response;
          angular.extend($scope.map.layers.overlays, {
            geojson: {
              data: response.data,
              name: 'RDTR JSON',
              type: 'geoJSONShape',
              //enable: true,
              //visible: true,
              //resetStyleOnMouseout: true,
              style: {
                //fillColor: "green",
                //weight: 0,
                'opacity': 0,
                color: 'rgba(0,0,0,0)'
                //color: 'white',
                //dashArray: '0',
                //fillOpacity: 0
              },
              layerParams: {
                showOnSelector: false
              }
              //onEachFeature : onEachFeature
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
          /*
          rdtr: {
            name: 'RDTR lokal',
            type: 'wms',
            visible: false,
            enable: false,
            url: 'http://localhost:8080/geoserver/simtaru/wms',
            layerOptions: {
              layers: 'simtaru:rdtr',
              format: 'image/png',
              opacity: 0,
              //width:629,
              //height:768,
              crs: L.CRS.EPSG4326
            },
            layerParams: {
              showOnSelector: false
            }
          },*/
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


    $scope.$on("leafletDirectiveGeoJson.mouseover", function (ev, args) {
      //console.log(args.model.properties.Sub_Zona);
      $scope.mouseOver = args.model.properties;
      //console.log($scope.mouseOver);
    });







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


    /*

   $http.get("countries.geo.json").success(function(data, status) {
    angular.extend($scope.layers.overlays, {
      countries: {
        name:'World Country Boundaries',
        type: 'geoJSONShape',
        data: data,
        visible: true,
        layerOptions: {
          style: {
            color: '#00D',
            fillColor: 'red',
            weight: 2.0,
            opacity: 0.6,
            fillOpacity: 0.2
          },
          onEachFeature: onEachFeature
        }

      }
    });

    function onEachFeature(feature, layer) {
      layer.on({
        click: function() {
          console.log(layer.feature.properties.name);
          $scope.country = layer.feature.properties.name;

        }
      })
    }
  });

  */