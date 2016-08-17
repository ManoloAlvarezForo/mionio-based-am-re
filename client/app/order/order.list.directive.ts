'use strict';

angular.module('mionioApp')
    .directive('orderList', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                list: '='
            },
            templateUrl: 'app/order/order-list-tab.html'
        };
});
