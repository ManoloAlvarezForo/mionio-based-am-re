'use strict';

class MenuToggleController {
  constructor($scope, $state, ssSideNav) {
    this.state = $state;
    this.ssSideNav = ssSideNav;
    this.isOpen = function(section) {
      return this.ssSideNav.isSectionSelected(section);
    };
    $scope.$on('SS_SIDENAV_FORCE_SELECTED_ITEM', function (event, args) {
    if ($scope.section && $scope.section.pages) {
      for (var i = $scope.section.pages.length - 1; i >= 0; i--) {
        var _e = $scope.section.pages[i];

        if (args === _e.id) {
          $scope.toggle($scope.section);
          $state.go(_e.state);
        }
      };
    }
  });
  }

  toggle(section) {
    this.ssSideNav.toggleSelectSection(section);
  };

  logout() {
    this.state.go('logout');
  }
}

angular.module('mionioApp')
  .controller('MenuToggleController', MenuToggleController);
