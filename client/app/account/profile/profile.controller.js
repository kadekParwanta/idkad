'use strict';
(function(){

class ProfileComponent {
  constructor(Auth) {
    this.Auth = Auth;
    this.getCurrentUser = Auth.getCurrentUser;
  }
  
}

angular.module('idkadApp')
  .component('profile', {
    templateUrl: 'app/account/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'vm',
  });

})();
