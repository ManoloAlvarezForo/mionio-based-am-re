'use strict';

class SideNavController {
  constructor(Auth, $mdSidenav, $log, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
    this.options = [
    {name: 'Pedido',
     icon: 'local_dining',
     action: function() {
       $state.go('order');
     }
    }];
  }

  gotoOrder() {
    this.state.go('order');
  }

  logout() {
    this.state.go('logout');
  }
}

angular.module('mionioApp')
  .controller('SideNavController', SideNavController);
