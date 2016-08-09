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
  $mdThemingProvider.definePalette('customPalette', {
  '50': '#d7f0f1',
  '100': '#9edbde',
  '200': '#74cbcf',
  '300': '#41b6bb',
  '400': '#39a0a5',
  '500': '#318a8e',
  '600': '#297477',
  '700': '#215e60',
  '800': '#19484a',
  '900': '#123233',
  'A100': '#d7f0f1',
  'A200': '#9edbde',
  'A400': '#39a0a5',
  'A700': '#215e60',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('customPalette');
  });
