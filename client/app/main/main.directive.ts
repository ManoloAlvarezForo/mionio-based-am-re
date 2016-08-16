'use strict';

angular.module('mionioApp')
  .directive('main', () => ({
    templateUrl: 'app/main/main.html',
    restrict: 'E',
    controller: 'MainController',
    controllerAs: 'main'
  }));
