'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:ContactUsCtrl
 * @description
 * # ContactUsCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('ContactUsCtrl', function ($rootScope) {
        $rootScope.showHeader = true;
        $(window).scrollTop(0);
        
  });
