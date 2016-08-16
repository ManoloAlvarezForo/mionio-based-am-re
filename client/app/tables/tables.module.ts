'use strict';

angular.module('mionioApp.order')
  .config(function($stateProvider) {
    $stateProvider
      .state('tables', {
        url: '/tables',
        templateUrl: 'app/tables/tables.html',
        controller: 'TablesController',
        controllerAs: 'tables'
      });
  });
