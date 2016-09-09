'use strict';

angular.module('mionioApp')
    .directive('orderList', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                list: '=',
                add: '&'
             },
            templateUrl: 'app/order/order-list-tab.html',
            controller: function($scope) {
                $scope.addItem = function(i) {
                    $scope.add({item: i});
                };
            }
        };
});
