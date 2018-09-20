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
    this.auth = Auth;
    //this.rootScope = $rootScope;
    this.leafletData = leafletData;

    //$scope.fromFactory = dataFactory;
    $scope.mouseOver = {};
    //$scope.geojson = {};
    $scope.focusFeature = {};
    $scope.rincianKegiatan = [];
    $scope.kegiatanTerpilih = '';
    $scope.statusPerijinan = '';
    $scope.statusPerijinanClass = '';
    $scope.center = {
      lat: -7.8049497,
      lng: 110.3738942,
      zoom: 15
    };


    leafletData.getMap().then(function (map) {
      L.control.custom({
          position: 'topright',
          content: '<button type="button" class="btn btn-default">' +
            '    <i class="fa fa-search"></i>' +
            '</button>',
          classes: '',
          style: {
            margin: '10px',
            padding: '0px 0 0 0',
            cursor: 'pointer',
          },
          datas: {
            'foo': 'bar',
          },
          events: {
            click: function (data) {

              //$('#myModal').modal('show'); 
              //console.log('wrapper div element clicked');
              //console.log(data);
            }
          }
        })
        .addTo(map);


      //search toolbar. 
      /*  
      L.control.custom({
          position: 'topleft',
          content: '<div class="input-group">' +
            '    <input type="text" class="form-control input-sm" placeholder="Search">' +
            '    <span class="input-group-btn">' +
            '        <button class="btn btn-default btn-sm" type="button">Go!</button>' +
            '    </span>' +
            '</div>',
          classes: '',
          style: {
            position: 'absolute',
            left: '50px',
            top: '0px',
            width: '200px',
          },
        })
        .addTo(map); */
    });


    //## Callback function from Geoserver JSONP
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


      // accessing Leaflet directly
      leafletData.getMap().then(function (map) {
        var rdtrGeoJSON = new L.GeoJSON(null, {
          style: rdtrStyle,
          onEachFeature: function (feature, layer) {
            layer.bindPopup('<strong>' + feature.properties.zona +
              '</strong><p>Sub-zona: ' +
              feature.properties.sub_zona + '</p>' +
              '<button class="btn btn-sm btn-block btn-success" data-toggle="modal" data-target="#myModal">' +
              'Cek Penggunaan </button>'
            );

            layer.on('mouseover', function () {
              $scope.mouseOver = feature.properties;
              //console.log(feature.properties);
            });
            layer.on('mouseout', function () {
              //this.setStyle({
              //  'fillColor': '#ff0000'
              //});
            });
            layer.on('click', function () {
              $scope.focusFeature = feature.properties;
              console.log($scope.focusFeature.kode);

            });
          }

        });

        rdtrGeoJSON.addData(data);
        rdtrGeoJSON.addTo(map);
      });
    }

    //## Angular load Geoserver GeoJSON via JSONP (setup Geoserver JSONP first)
    $scope.getData = function () {
      // Geoserver endpoint. Change accordingly
      var url_geojson = 'http://localhost:8089/geoserver/simtaru/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=simtaru:rdtr_kota&outputFormat=text%2Fjavascript&srsName:EPSG:4326';
      // JSONP must use $sce for trusted url
      $http.jsonp($sce.trustAsResourceUrl(url_geojson))
        .then(function (response) {})
        .catch(function (error) {});
    }; //getdata

    //## Defining Leaflet map object
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


    //## Get feature from SKRK MongoDB
    $scope.getFeature = function (kode, kegiatan) {
      console.log('isi skrk ', kode, kegiatan);
      var params = {
        skrk: kode,
        kegiatan: kegiatan
      };
      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/skrks/query',
        params: params
      }).then(function (success) {
        //$scope.statusPerijinan = success.data[0].skrk[kode];
        console.log('status perizinan', $scope.statusPerijinan);
        switch (success.data[0].skrk[kode]) {
          case 'I':
            $scope.statusPerijinan = 'Pemanfaatan Diizinkan';
            $scope.statusPerijinanClass = 'text-green';
            break;
          case 'B':
            $scope.statusPerijinan = 'Pemanfaatan Memerlukan Izin Penggunaan Bersyarat';
            $scope.statusPerijinanClass = 'text-aqua';
            break;
          case 'X':
            $scope.statusPerijinan = 'Pemanfaatan Tidak Diizinkan';
            $scope.statusPerijinanClass = 'text-red';
            break;
          case 'T':
            $scope.statusPerijinan = 'Pemanfaatan Diizinkan Secara Terbatas';
            $scope.statusPerijinanClass = 'text-yellow';
            break;
          default:
            $scope.statusPerijinan = '';
        }




      }, function (error) {
        console.log('error', error.data);
      });
    } //getFeature from SKRK

    $scope.getKegiatan = function () {
      $http.get('http://localhost:3000/api/skrks/distinct').then(function (success) {
        //console.log('success', success.data);
        for (var i = 0; i <= success.data.length; i++) {
          $scope.rincianKegiatan.push(success.data[i]);
        }
      }, function (error) {
        console.log('error', error);
      });
    } //getFeature from SKRK


  } //constructor


  $onInit() {
    this.$scope.getData(); // initializing view by getting data

    this.$scope.getKegiatan();

  }

} //controller


export default angular.module('starlingApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;




/* ========================================================================
// for the sake of documentation: angular ways for geojson mouse event

$scope.$on('leafletDirectiveGeoJson.mouseOver', function (ev, args) {
  //console.log(args.model.properties.Sub_Zona);
  $scope.mouseOver = args;
  console.log($scope.mouseOver);
});
   
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
