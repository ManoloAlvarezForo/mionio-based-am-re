'use strict';

class NavbarController {
    //start-non-standard
    menu = [{
      'title': 'Home',
      'state': 'welcome'
    }];

    isCollapsed = true;
    //end-non-standard

    constructor(Auth, $state, $mdSidenav, NotifyingService, $scope) {
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.getCurrentUser = Auth.getCurrentUser;
      this.state =  $state;
      this.sidenav = $mdSidenav;
      this.scope = $scope;
      this.title = 'Menu';
      NotifyingService.subscribe($scope, function updateChanges(event, args) {
       event.currentScope.nav.title = args;
      });
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
