'use strict';

class NavbarController {
    //start-non-standard
    menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    isCollapsed = true;
    //end-non-standard

    constructor(Auth, $state, $mdSidenav) {
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.getCurrentUser = Auth.getCurrentUser;
      this.state =  $state;
      this.sidenav = $mdSidenav;
    }

    toggleLeft() {
       this.sidenav('left')
          .toggle()
          .then(function () {
          });
    }
  }

angular.module('mionioApp')
  .controller('NavbarController', NavbarController);
