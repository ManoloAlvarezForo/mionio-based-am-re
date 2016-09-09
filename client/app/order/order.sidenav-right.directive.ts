'use strict';

angular.module('mionioApp')
    .directive('sright', function (SharedScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/order/order-sidenav-right.html',
            controller: function($scope) {
                SharedScope.addScope($scope);
            }
        };
});
