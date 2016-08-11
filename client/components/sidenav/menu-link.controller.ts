'use strict';

class MenuLinkController {
  constructor($scope, $state, $mdSidenav, ssSideNav, ssSideNavSharedService) {
    this.state = $state;
    this.mdSidenav = $mdSidenav;
    this.ssSideNav = ssSideNav;
    this.ssSideNavSharedService = ssSideNavSharedService;
  }

  isSelected(page) {
    return this.ssSideNav.isPageSelected(page);
  };

  focusSection(item) {
    this.mdSidenav('left').close();
    this.ssSideNavSharedService.broadcast('SS_SIDENAV_CLICK_ITEM', item);
  };
}

angular.module('mionioApp')
  .controller('MenuLinkController', MenuLinkController);
