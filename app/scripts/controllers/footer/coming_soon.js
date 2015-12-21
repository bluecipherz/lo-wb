'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:ComingSoonCtrl
 * @description
 * # ComingSoonCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('ComingSoonCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
        $rootScope.showHeader = true;
        $(window).scrollTop(0);
  });
