'use strict';

angular.module('mionioApp')
    .directive('ssSidenav', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                menu: '='
            },
            templateUrl: 'components/sidenav/menu-sidenav.tmpl.html'
        };
});
