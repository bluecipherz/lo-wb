'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:CollegeProfileCtrl
 * @description
 * # CollegeProfileCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('CollegeProfileCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
  });
