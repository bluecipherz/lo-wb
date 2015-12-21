'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('LoginCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
        $rootScope.showHeader = true;
        $(window).scrollTop(0);
  });
