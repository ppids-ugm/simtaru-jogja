'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];

  isCollapsed = true;



  debugMode = true;

  constructor(Auth, $scope) {
    'ngInject';
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    $scope.auth = Auth;
    this.$scope = $scope;
    $scope.isAdmin = false;
    $scope.me = '';


    $scope.auth.hasRole('admin').then(function (val) {
      $scope.isAdmin = val;
    });

    $scope.auth.getCurrentUser().then(function (val) {
      $scope.me = val.name;
    })



  }




  $onInit() {
    this.getCurrentUser(
      function (me) {        
        angular.extend($scope, {
          id: me._id,
          currentUser : me.name
        })

        console.log(this.$scope.id);
      });
  };


}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
