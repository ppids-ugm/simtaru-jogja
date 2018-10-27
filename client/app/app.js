'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';


import 'angular-socket-io';
import 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import AdminlteComponent from './adminlte/adminlte.component';
import PrintComponent from './print/print.component';





import './app.scss';

angular.module('starlingApp', [ngCookies, ngResource, ngSanitize, ngAnimate, ngTouch, 'btford.socket-io', uiRouter,
  _Auth, account, admin, 'validation.match', navbar, footer, main, constants, AdminlteComponent, PrintComponent,
  socket, util, 'nemLogging', 'ui-leaflet', 'xeditable'
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in


    angular.extend($rootScope, {
      center: {},
      markers: {}
    });


    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        $rootScope.authIsLoggedIn = loggedIn;
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['starlingApp'], {
      strictDi: false //change to true on production//
    });
  });
