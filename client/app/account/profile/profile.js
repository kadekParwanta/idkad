'use strict';

angular.module('idkadApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>',
        authenticate: true
      });
  });
