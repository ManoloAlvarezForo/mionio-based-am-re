'use strict';

angular.module('mionioApp.order')
  .config(function($stateProvider) {
    $stateProvider
      .state('order', {
        url: '/order/:type/:identifier',
        templateUrl: 'app/order/order.html',
        controller: 'OrderController',
        controllerAs: 'order',
        authenticate: 'user'
      });
  });
