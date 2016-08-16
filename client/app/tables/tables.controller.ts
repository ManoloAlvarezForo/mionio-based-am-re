'use strict';

class TablesController {
  constructor(Auth, $log, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
    this.mocktables = [
        {
         identifier: 1,
         isAvailable: true,
         order: null
        },
        {
         identifier: 2,
         isAvailable: true,
         order: null
        },
        {
         identifier: 3,
         isAvailable: true,
         order: null
        },
        {
         identifier: 4,
         isAvailable: true,
         order: null
        },
        {
         identifier: 5,
         isAvailable: true,
         order: null
        }
    ];
  }

  goToOrder(table) {
    this.state.go('order', {
        type: 'table',
        identifier: table.identifier
    });
  }
}

angular.module('mionioApp')
  .controller('TablesController', TablesController);
