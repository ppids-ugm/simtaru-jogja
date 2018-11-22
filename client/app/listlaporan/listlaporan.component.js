'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './listlaporan.routes';

export class ListlaporanComponent {
  /*@ngInject*/
  constructor($rootScope, Auth, $scope, $filter, $http) {
    $scope.data = {};
    $scope.q = [];
    this.$scope = $scope;
    $scope.auth = Auth;
    $scope.users = [];
    $scope.user = [];
    $scope.isAdmin = true;
    $scope.me = {
      name: '',
      id: ''
    };
    $rootScope.show = true; // remove the navbar
    $scope.$http = $http;

    //this.auth.hasRole('admin').then(function (val) {
    //  $scope.isAdmin = val;
    //});

    $scope.auth.hasRole('admin').then(function (val) {
      $scope.isAdmin = val;
      if ($scope.isAdmin) {
       // console.log ('youre admin');
        $scope.getUserName();
        $scope.$http.get('/api/adviceplans')
          .then(response => {
            $scope.data = response.data;
            //console.log(response.data.length);            
        });

      } else {
        //console.log ('chill bro');
        $scope.auth.getCurrentUser().then(function (val) {
          $scope.me.name = val.name;
          $scope.me.id = val._id;
          console.log(val._id);
          $scope.$http.get('/api/adviceplans')
          .then(response => {
            //console.log(response.data);
            $scope.data =  $filter('filter')(response.data, {user:val._id});
            console.log($scope.data);            
        });
        });
















        

        
        
      }

    });

    

    $scope.getUserName = function () {
      $http.get('/api/users').then(function (success) {
        for (var i = 0; i < success.data.length; i++) {
          $scope.users.push(success.data[i]);
        }
        //$scope.user = $filter('filter')($scope.users, {_id: '5bd9245c885a5d3610726a61'})[0].name;
        //console.log($scope.users);
      }, function (error) {
        console.log('error', error);
      });
    };
  } //constructor

  $onInit() {



  }
}


export default angular.module('simtaruJogjaApp.listlaporan', [uiRouter])
  .config(routes)
  .component('listlaporan', {
    template: require('./listlaporan.html'),
    controller: ListlaporanComponent,
    controllerAs: 'listlaporanCtrl'
  })
  .name;
