'use strict';

export default class SettingsController {
  user = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  errors = {
    other: undefined
  };
  message = '';
  submitted = false;


  /*@ngInject*/
  constructor(Auth, $scope) {
    this.Auth = Auth;
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

  changePassword(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}
