'use strict';

class SideNavController {
  constructor(Auth, $mdSidenav, $log, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
  }

  logout() {
    this.state.go('logout');
  }
}

angular.module('mionioApp')
  .controller('SideNavController', SideNavController);
