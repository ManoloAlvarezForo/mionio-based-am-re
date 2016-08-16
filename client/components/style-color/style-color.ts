'use strict';

var _theme;
var _palettes;

angular.module('mionioApp')
  .config(function($mdThemingProvider) {
     _theme = $mdThemingProvider.theme();
     _palettes = $mdThemingProvider._PALETTES;
  });
