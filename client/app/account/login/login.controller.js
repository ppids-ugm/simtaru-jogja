'use strict';

export default class LoginController {
  user = {
    name: '',
    email: '',
    password: ''
  };
  errors = {
    login: undefined
  };
  submitted = false;


  /*@ngInject*/
  constructor(Auth, $state, toastr) {
    this.Auth = Auth;
    this.$state = $state;
    this.toastr = toastr;
    this.adminLogin = false;
  }

  loginTamu(){
    console.log('c');
    this.user.email = "tamu@sitaru.com";
    this.user.password = "tamu" 
    this.Auth.login({
      email: this.user.email,
      password: this.user.password
    })
    .then(() => {
      this.toastr.success('Masuk sebagai tamu');
      // Logged in, redirect to home
      this.$state.go('main');
    })

  }

  login(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
        .then(() => {
          this.toastr.success('Login Berhasil!');
          // Logged in, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          this.errors.login = err.message;
        });
    }
  }
}
