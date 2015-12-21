'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:SaveAndCompareCtrl
 * @description
 * # SaveAndCompareCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('SaveAndCompareCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
  });
