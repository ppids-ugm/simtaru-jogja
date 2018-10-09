import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {


  /*
  ##### TODO #####
  <skipped> Install leaflet search 
  <fixed> Move icons to top right
  <fixed> Fix leaflet control with layer
  <fixed> change input 'select' with 'type'
  * Make panel draggable
  * Add scalebar plugin
  * Create function add layer
  * Refactoring Develop branch
  * Merge to master


  */



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
    $scope.statusPerijinan = {
      text: '',
      style: '',
      showDetail: false
    };
    $scope.cekIntensitas = {
      luasTanah: '',
      luasBangunan: '',
      tinggiBangunan: '',
      jumlahLantai: ''
    };
    $scope.intensitas = {
      error: false,
      kelas: '',
      keterangan: '',
      KDB: '',
      Tinggi: '',
      KLB: '',
      KDH: ''
    };


    //Jogja;
    $scope.center = {
      lat: -7.8049497,
      lng: 110.3738942,
      zoom: 15
    };

    // initializing map with controls
    leafletData.getMap().then(function (map) {

      L.easyPrint({
        title: 'cetak',
        position: 'topright',
        sizeModes: ['A4Portrait', 'A4Landscape']
      }).addTo(map);

      L.Control.geocoder().addTo(map);

      var measureControl = L.control.measure({
        position: 'topright',
        primaryLengthUnit: 'meters',
        secondaryLengthUnit: 'kilometers',
        primaryAreaUnit: 'sqmeters',
        activeColor: '#FF5A00',
        completedColor: '##EAFF00'
      });
      measureControl.addTo(map);


      var graphicScale = L.control.graphicScale({
        fill: "hollow",
        doubleLine: "true",
        showSubunits: "false"
      }).addTo(map);


      //## custom control

      /*
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
        .addTo(map); */


      //slider toolbar. 
      L.control.custom({
          position: 'bottomright',
          /*content: '<div class="input-group">' +
            '    <input type="text" class="form-control input-sm" placeholder="Search">' +
            '    <span class="input-group-btn">' +
            '        <button class="btn btn-default btn-sm" type="button">Go!</button>' +
            '    </span>' +
            '</div>',
            */
          content: '<div>' +
            '<input type="range" min="0" max="0.7" value="0.5" step="0.05">' +
            '</div>',
          events: {
            input: function (e) {
              $scope.setOpacity(e.srcElement.value);
            }

          },
          style: {
            width: '200px'
          },
        })
        .addTo(map);
    });


    //## Callback function from Geoserver JSONP
    window.parseResponse = function (data) {

      function zonaStyle(feature) {
        var colorToUse;
        var zona = feature.properties.zona;

        if (zona === "Cagar Budaya") colorToUse = "#595EEA";
        else if (zona === "Industri") colorToUse = "#8D26D7";
        else if (zona === "Perdagangan dan Jasa") colorToUse = "#FFE417";
        else if (zona === "Perkantoran") colorToUse = "#EF2F43";
        else if (zona === "Perumahan") colorToUse = "#EF9B13";
        else if (zona === "Peruntukan Lainnya") colorToUse = "#94D6A4";
        else if (zona === "Ruang Terbuka Hijau") colorToUse = "#14DB1E";
        else if (zona === "Sarana Pelayanan Umum") colorToUse = "#EC19D4";
        else if (zona === "Sempadan Sungai") colorToUse = "#88C9E6";
        else colorToUse = "green";

        return {
          "color": colorToUse,
          "weight": 0.5
        };
      }



      // Initializing data from GeoJSONP
      leafletData.getMap().then(function (map) {

        var rdtrGeoJSON = new L.GeoJSON(null, {
          style: zonaStyle,
          onEachFeature: function (feature, layer) {

            $scope.setOpacity = function (opa) {
              rdtrGeoJSON.setStyle({
                //opacity : opa,
                fillOpacity: opa
              });
            };


            var popup = layer.bindPopup('<strong>' + feature.properties.zona +
              '</strong><p>Sub-zona: ' +
              feature.properties.sub_zona + '</p>' +
              '<button class="btn btn-sm btn-block btn-success" data-toggle="modal" data-target="#myModal">' +
              'Cek Penggunaan </button>'
            );

            popup.on("popupclose", function (e) {
              this.setStyle({
                "weight": 0.5
              });
            });

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
              this.setStyle({
                "weight": 5
              });
              //console.log($scope.focusFeature.kode);

            });
          } //onEachFeature

        });

        rdtrGeoJSON.addData(data).addTo(map);




      }); //parse response
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
          },
          esri: {
            name: 'ESRI Imagery',
            type: 'xyz',
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            layerOptions: {
              attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
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
      //console.log('isi skrk ', kode, kegiatan);
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
        //console.log('status perizinan', $scope.statusPerijinan);
        switch (success.data[0].skrk[kode]) {
          case 'I':
            $scope.statusPerijinan.text = 'Pemanfaatan Diizinkan';
            $scope.statusPerijinan.style = 'text-green';
            $scope.statusPerijinan.showDetail = true;
            break;
          case 'B':
            $scope.statusPerijinan.text = 'Pemanfaatan Memerlukan Izin Penggunaan Bersyarat';
            $scope.statusPerijinan.style = 'text-aqua';
            $scope.statusPerijinan.showDetail = true;
            break;
          case 'X':
            $scope.statusPerijinan.text = 'Pemanfaatan Tidak Diizinkan';
            $scope.statusPerijinan.style = 'text-red';
            $scope.statusPerijinan.showDetail = false;
            break;
          case 'T':
            $scope.statusPerijinan.text = 'Pemanfaatan Diizinkan Secara Terbatas';
            $scope.statusPerijinan.style = 'text-yellow';
            $scope.statusPerijinan.showDetail = true;
            break;
          default:
            $scope.statusPerijinan.text = '';
            $scope.statusPerijinan.style = 'text-gray';
        }
      }, function (error) {
        console.log('error', error.data);
      });
    } //getFeature from SKRK

    //get list of kegiatan di db
    $scope.getKegiatan = function () {
      $http.get('http://localhost:3000/api/skrks/distinct').then(function (success) {
        //console.log('success', success.data);
        for (var i = 0; i <= success.data.length; i++) {
          $scope.rincianKegiatan.push(success.data[i]);
        }
      }, function (error) {
        console.log('error', error);
      });
    }; //getFeature list kegiatan SKRK

    $scope.cekPemanfaatan = function (pemanfaatan, kodeSKRK) {
      console.log('pemanfaatan', pemanfaatan);

      //# pengkelasan sesuai /api/intensitasruangs
      if (pemanfaatan.luasTanah < 40) {
        $scope.intensitas.error = true;
      } else if (pemanfaatan.luasTanah <= 100) {
        $scope.intensitas.kelas = "1";
        $scope.intensitas.error = false;
      } else if (pemanfaatan.luasTanah <= 200) {
        $scope.intensitas.kelas = "2";
        $scope.intensitas.error = false;
      } else if (pemanfaatan.luasTanah <= 400) {
        $scope.intensitas.kelas = "3";
        $scope.intensitas.error = false;
      } else if (pemanfaatan.luasTanah <= 1000) {
        $scope.intensitas.kelas = "4";
        $scope.intensitas.error = false;
      } else if (pemanfaatan.luasTanah >= 1001) {
        $scope.intensitas.kelas = "5";
        $scope.intensitas.error = false;
      };

      var params = {
        kelas: $scope.intensitas.kelas,
        skrk: kodeSKRK
      };
      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/intensitasruangs/query',
        params: params
      }).then(function (success) {
        console.log('hasil skrk', success.data);

        $scope.intensitas.keterangan = success.data[0].Keterangan;

        // periksa KDB
        var KDB = (pemanfaatan.luasTanah * success.data[0].KDB[kodeSKRK]) / 100;
        if (pemanfaatan.luasBangunan > KDB) {
          $scope.intensitas.KDB = 'Melebihi Batas KDB (' + success.data[0].KDB[kodeSKRK] + '%)';
        } else if (pemanfaatan.luasBangunan <= KDB) {
          $scope.intensitas.KDB = 'Sesuai Syarat KDB';
        } else {
          $scope.intensitas.KDB = 'Luas bangunan salah. Periksa masukan';
        };

        // periksa Tinggi
        var Tinggi = (success.data[0].Tinggi[kodeSKRK]);
        if (pemanfaatan.tinggiBangunan > Tinggi) {
          $scope.intensitas.Tinggi = 'Melebihi Batas Tinggi Bangunan (' + success.data[0].Tinggi[kodeSKRK] + ' m)';
        } else if (pemanfaatan.tinggiBangunan <= Tinggi) {
          $scope.intensitas.Tinggi = 'Sesuai Syarat Batas Tinggi Bangunan (' + success.data[0].Tinggi[kodeSKRK] + ' m)';
        } else {
          $scope.intensitas.Tinggi = 'Tinggi bangunan salah. Periksa masukan';
        };

        // periksa KLB
        var KLB = (success.data[0].KLB[kodeSKRK]);
        var hitungKLB = (pemanfaatan.jumlahLantai * pemanfaatan.luasBangunan) / pemanfaatan.luasTanah;
        if (hitungKLB > KLB) {
          $scope.intensitas.KLB = 'Melebihi Batas KLB (' + success.data[0].KLB[kodeSKRK] + '%)';
        } else if (hitungKLB <= KLB) {
          $scope.intensitas.KLB = 'Sesuai Syarat KLB (' + success.data[0].KLB[kodeSKRK] + '%)';
        } else {
          $scope.intensitas.KLB = 'Hitungan KLB salah. Periksa masukan';
        };


        // Tampilkan KDH
        $scope.intensitas.KDH = success.data[0].KDH[kodeSKRK] + '%';


      }, function (error) {
        console.log('error', error.data);
      });

    } //cek izin intensitas pemanfaatan ruang

  } //constructor


  $onInit() {
    this.$scope.getData(); // initializing view by getting data
    this.$scope.getKegiatan();   
   
    
    
    $(function () {
      $('body').on('mousedown', '#drag', function () {
        $(this).addClass('draggable').parents().on('mousemove', function (e) {
          var tops = e.pageY - $('.draggable').outerHeight() / 8;
          var lefts = e.pageX - $('.draggable').outerWidth() /8 ;
          console.log(tops, lefts);
          
          e.preventDefault();
          $('.draggable').offset({
            top: e.pageY - $('.draggable').outerHeight() /8 ,
            left: e.pageX - $('.draggable').outerWidth() /8
          }).on('mouseup', function () {
            $(this).removeClass('draggable');
          });
        });
        
      }).on('mouseup', function () {
        $('.draggable').removeClass('draggable');
      });
    });
    

  } //onInit

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
