'use strict';

angular.module('mionioApp.auth', [
  'mionioApp.constants',
  'mionioApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
