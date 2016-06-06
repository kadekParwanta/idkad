'use strict';

angular.module('idkadApp.auth', ['idkadApp.constants', 'idkadApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
