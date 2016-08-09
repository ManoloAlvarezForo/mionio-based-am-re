'use strict';

angular.module('mionioApp')
  .directive('order', () => ({
    templateUrl: 'components/order/order.html',
    restrict: 'E',
    controller: 'OrderController',
    controllerAs: 'order'
  }));
