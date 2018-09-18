import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  awesomeThings = [];
  newThing = [];

  /*@ngInject*/
  constructor(Auth, $http, $scope, $sce, socket, leafletData) {
    this.$http = $http;
    this.$sce = $sce;
    this.socket = socket;
    this.$scope = $scope;
    //this.rootScope = $rootScope;
    this.leafletData = leafletData;

    //$scope.fromFactory = dataFactory;
    this.auth = Auth;
    $scope.mouseOver = {};
    $scope.geojson = {};
    $scope.center = {
      lat: -7.8049497,
      lng: 110.3738942,
      zoom: 15
    };

    window.parseResponse = function (data) {
      //$scope.geojson = data;

      var rdtrStyle = {
        fillColor: 'green',
        weight: 0,
        //opacity: 10,
        color: 'white',
        dashArray: '0'
        //fillOpacity: 0
      };

      // console.log('data', data);

      leafletData.getMap().then(function (map) {
        var rdtrGeoJSON = new L.GeoJSON(null, {
          style: rdtrStyle,
          onEachFeature: function (feature, layer) {
            layer.bindPopup('<strong>' + feature.properties.zona + '</strong><p>sub-zona: ' + feature.properties.sub_zona + '</p>');

            layer.on('mouseover', function () {
              //console.log(feature.properties);
            });
            layer.on('mouseout', function () {
              //this.setStyle({
              //  'fillColor': '#ff0000'
              //});
            });
            layer.on('click', function () {
              // Let's say you've got a property called url in your geojsonfeature:
              //console.log(feature.properties);
            });
          }
          
        });

        rdtrGeoJSON.addData(data);
        //console.log(rdtrGeoJSON);
        rdtrGeoJSON.addTo(map);
      });
    }

    /*
          angular.extend($scope.map.layers.overlays, {
            rdtr2: {
              data: data,
              name: 'RDTR JSON',
              type: 'geoJSONShape',
              enable: true,
              visible: true,
              resetStyleOnMouseout: true,
              layerOptions: {
                
              },
              layerParams: {
                showOnSelector: true
              }
            }
          });
          */



    $scope.getData = function () {
      var url_geojson = 'http://localhost:8089/geoserver/simtaru/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=simtaru:rdtr_kota&outputFormat=text%2Fjavascript&srsName:EPSG:4326';

      $http.jsonp($sce.trustAsResourceUrl(url_geojson))
        .then(function (response) {})
        .catch(function (error) {

        });
    }; //getdata

    $scope.map = {
      layers: {
        baselayers: {
          carto: {
            name: 'Carto Positron',
            type: 'xyz',
            url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png',
            layerOptions: {
              subdomains: 'abcd',
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
              continuousWorld: true
            }
          },
          osm: {
            name: 'OpenStreetMap',
            type: 'xyz',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            layerOptions: {
              subdomains: ['a', 'b', 'c'],
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              continuousWorld: true
            }
          }
        },
        overlays: {
          /*
          rdtrprov: {
            name: 'RDTR Kota Yogyakarta',
            type: 'wms',
            visible: false,
            url: 'http://gis.jogjaprov.go.id:8080/geoserver/geonode/wms/',
            layerOptions: {
              layers: 'geonode:pola_ruang_rdtr_kota_jogja',
              format: 'image/png',
              opacity: 0.75,
              version: '1.1.0',
              crs: L.CRS.EPSG4326
            }
          }
          */
        }
      }
    }; //map

    $scope.$on('leafletDirectiveGeoJson.mouseOver', function (ev, args) {
      //console.log(args.model.properties.Sub_Zona);
      $scope.mouseOver = args;
      console.log($scope.mouseOver);
    });

    /*
    $scope.$on('leafletDirectiveMap.mouseover', function (ev, args) {
      console.log(args.leafletEvent);
      var lEvent = args.leafletEvent.latlng;
      var popup = L.popup({
          offset: L.point(0, -0.3)
        })
        .setLatLng(lEvent) //[lEvent.lat, lEvent.lng])
        .setContent('penggunaan ruang');
      leafletData.getMap().then(function (map) {
        popup.openOn(map);
      });
    });

    */
  } //constructor


  $onInit() {
    this.$scope.getData();

    /*
    this.leafletData.getMap().then(function (map) {
      var url = 'http://gis.jogjaprov.go.id:8080/geoserver/geonode/wms/';
      L.tileLayer.wms(url, {
        layers: 'geonode:pola_ruang_rdtr_kota_jogja',
        transparent: true,
        name: 'RDTR dua',
        format: 'image/png'
      }).addTo(map);
    });

    */

    /*
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });

      */
  }

} //controller


export default angular.module('starlingApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
