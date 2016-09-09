'use strict';

class MainController {
  constructor(Auth, $mdSidenav, $log, $state, $timeout) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
    this.timeout = $timeout;
    this.sidenav = $mdSidenav;
    this.options = [
    {name: 'Mesas',
     icon: 'dashboard',
     action: function() {
       $mdSidenav('left').close();
       $state.go('tables');
     }
    },
    {name: 'Para llevar',
     icon: 'shopping_cart',
     action: function() {
       $mdSidenav('left').close();
       $state.go('order', {
         type: 'togo',
         identifier: 1
       });
     }
    }];
  }

  logout() {
    this.state.go('logout');
  }

  closeLeft() {
      this.sidenav('left').close();
  }
}

angular.module('mionioApp')
  .controller('MainController', MainController);
