'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:SaveAndCompareCtrl
 * @description
 * # SaveAndCompareCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('ErrorCtrl', function (landingLoader) {
    landingLoader.firstLoad();
  });
