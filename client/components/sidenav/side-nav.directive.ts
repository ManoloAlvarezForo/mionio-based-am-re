'use strict';

angular.module('mionioApp')
  .directive('sideNav', () => ({
    templateUrl: 'components/sidenav/side-nav.html',
    restrict: 'E',
    controller: 'SideNavController',
    controllerAs: 'snav'
  }));
