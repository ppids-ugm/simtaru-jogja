import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  awesomeThings = [];
  newThing = [];

  /*@ngInject*/
  constructor(Auth, $http, $scope, socket, leafletData) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    //this.rootScope = $rootScope;
    this.leafletData = leafletData;
    //$scope.fromFactory = dataFactory;
    this.auth = Auth;
    $scope.mouseOver = {};
    $scope.geojson = {};
    $scope.center = {
      lat: -7.7830961,
      lng: 110.3666712,
      zoom: 17
    };



    $scope.getData = function () {
      $http.get('/assets/data/rdtr.geojson')
        .then(response => {
          console.log(response.data);
          angular.extend($scope, {
            geojson: {
                data: response.data,
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
    });
  }
    //$scope.geojson = response;


    /*
    angular.extend($scope.map.layers.overlays, {
      geojson: {
        data: response.data,
        name: 'RDTR JSON',
        type: 'geoJSONShape',
        //enable: true,
        visible: true, 
        //resetStyleOnMouseout: true,
        layerOptions: {
          style: {
            //fillColor: "green",
            //weight: 0,
            'opacity': 0
            //color: 'white',
            //dashArray: '0',
            //fillOpacity: 0
          }
        },
        layerParams: {
          showOnSelector: true
        }
      } 
    });
  
  });
  
}; //getdata
 
*/

    $scope.map = {
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
          },
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
          }, */
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

    $scope.$on('leafletDirectiveMap.click', function (ev, args) {
      //console.log(args.leafletEvent.latlng); 
      var lEvent = args.leafletEvent.latlng;
      var popup = L.popup({ offset: L.point(0, -0.3) })
        .setLatLng(lEvent)  //[lEvent.lat, lEvent.lng])
        .setContent("here")
      leafletData.getMap().then(function (map) {
        popup.openOn(map);
      });

    });





  } //constructor



  $onInit() {
    this.$scope.getData();
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });


  };

} //controller


export default angular.module('starlingApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;

