'use strict';

angular.module('mionioApp')
    .directive('orderRight', function (SharedScope) {
        return {
            restrict: 'E',
            scope: {
                order: '='
            },
            link: function (scope, element, attrs) {
             SharedScope.setControllerToScope(scope.order, 'order');
            },
            templateUrl: 'app/order/order-right.html'
        };
    });
