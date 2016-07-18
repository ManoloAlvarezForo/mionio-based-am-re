'use strict';

class SideNavController {
  constructor(Auth, $mdSidenav, $log) {
    this.isLoggedIn = Auth.isLoggedIn;
  }
}

angular.module('mionioApp')
  .controller('SideNavController', SideNavController);
