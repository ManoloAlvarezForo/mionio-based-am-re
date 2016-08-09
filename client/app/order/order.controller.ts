'use strict';

class OrderController {
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
  .controller('OrderController', OrderController);
