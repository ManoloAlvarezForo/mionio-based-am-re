'use strict';

class SrightController {
  constructor(Auth, $mdSidenav, $log, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
  }
}

angular.module('mionioApp')
  .controller('SrightController', SrightController);
