'use strict';

angular.module('mionioApp', [
  'mionioApp.auth',
  'mionioApp.admin',
  'mionioApp.order',
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
      .otherwise('/welcome');
    $locationProvider.html5Mode(true);
    $mdThemingProvider.definePalette('blackseaweed', {
      '50': '#bea180',
      '100': '#a07b52',
      '200': '#7b5f3f',
      '300': '#4b3a27',
      '400': '#372b1c',
      '500': '#231b12',
      '600': '#0f0b08',
      '700': '#000000',
      '800': '#000000',
      '900': '#000000',
      'A100': '#bea180',
      'A200': '#a07b52',
      'A400': '#372b1c',
      'A700': '#000000',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 A100 A200'
    });

    $mdThemingProvider.definePalette('caviar', {
      '50': '#ffffff',
      '100': '#fedaba',
      '200': '#fdbc83',
      '300': '#fc963c',
      '400': '#fb861e',
      '500': '#f77604',
      '600': '#d96804',
      '700': '#bb5903',
      '800': '#9d4b03',
      '900': '#7f3c02',
      'A100': '#ffffff',
      'A200': '#fedaba',
      'A400': '#fb861e',
      'A700': '#bb5903',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
    });

    $mdThemingProvider.definePalette('lettuce', {
      '50': '#fbfee8',
      '100': '#eefaa0',
      '200': '#e5f76a',
      '300': '#d9f427',
      '400': '#d1ef0d',
      '500': '#b8d20b',
      '600': '#9fb509',
      '700': '#859808',
      '800': '#6c7b06',
      '900': '#525e05',
      'A100': '#fbfee8',
      'A200': '#eefaa0',
      'A400': '#d1ef0d',
      'A700': '#859808',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 A100 A200 A400 A700'
    });

    $mdThemingProvider.definePalette('salmon', {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#fcd9d4',
      '300': '#f89f91',
      '400': '#f78574',
      '500': '#f56c57',
      '600': '#f3533a',
      '700': '#f2391d',
      '800': '#e32a0d',
      '900': '#c6240c',
      'A100': '#ffffff',
      'A200': '#ffffff',
      'A400': '#f78574',
      'A700': '#f2391d',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('blackseaweed').accentPalette('caviar', {'default': '500'});
  });
