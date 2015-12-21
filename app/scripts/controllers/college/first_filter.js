'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:FirstFilterCtrl
 * @description
 * # FirstFilterCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('FirstFilterCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
  });
