'use strict';

class SideNavController {
  constructor(Auth, $mdSidenav, $log, $state, ssSideNav, $timeout) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
    this.timeout = $timeout;
    this.menu = ssSideNav;
    this.hello = 'hello';
  }

  logout() {
    this.state.go('logout');
  }
}

angular.module('mionioApp')
  .controller('SideNavController', SideNavController);
