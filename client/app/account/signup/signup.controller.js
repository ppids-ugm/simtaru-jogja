'use strict';

import angular from 'angular';
import moment from 'moment';

export default class SignupController {
  user = {
    name: '',
    email: '',
    telp:'',
    alamat:'',
    password: ''
  };
  errors = {};
  submitted = false;


  /*@ngInject*/
  constructor(Auth, $state, toastr) {
    this.Auth = Auth;
    this.$state = $state;
    this.toastr = toastr;
  }

  register(form) {
    this.submitted = true;

    var registrationDate = moment();

    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        telp: this.user.telp,
        alamat: this.user.alamat,
        email: this.user.email,
        date: registrationDate,
        password: this.user.password
      })
        .then(() => {
          // Account created, redirect to home
          this.toastr.success('Pengguna baru berhasil dibuat!');
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
