'use strict';

angular.module('mionioApp', [
  'mionioApp.auth',
  'mionioApp.admin',
  'mionioApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('grey');
  });
