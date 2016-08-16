'use strict';

angular.module('mionioApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        template: '<welcome></welcome>'
      });
  });
