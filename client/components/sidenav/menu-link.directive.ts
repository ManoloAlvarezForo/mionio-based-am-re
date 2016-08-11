'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('mionioApp')
  .directive('menuLink', function () {
    return {
      scope: {
        section: '='
      },
      controller: 'MenuLinkController',
      controllerAs: 'menulink',
      templateUrl: 'components/sidenav/menu-link.tmpl.html'
    };
});
