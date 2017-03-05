(function(){
  'use strict';

  angular
    .module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider){

      authProvider.init({
        domain: 'abacus-coder.eu.auth0.com',
        clientID: 'VsJqiAUw2Q43QID4hRsS8J4Atzn0DDPA'
      });

      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'components/home/home.tpl.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'components/profile/profile.tpl.html',
          controller: 'profileController as user'
        });

      jwtInterceptorProvider.tokenGetter = function(store){
        return store.get('id_token');
      };

      $httpProvider.interceptors.push('jwtInterceptor');
    });
})();
