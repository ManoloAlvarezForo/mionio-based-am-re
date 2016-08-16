'use strict';

class MainController {
  constructor(Auth, $mdSidenav, $log, $state, $timeout) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
    this.timeout = $timeout;
    this.options = [
    {name: 'Mesas',
     icon: 'dashboard',
     action: function() {
       $state.go('tables');
     }
    },
    {name: 'Para llevar',
     icon: 'directions_walk',
     action: function() {
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
}

angular.module('mionioApp')
  .controller('MainController', MainController);
