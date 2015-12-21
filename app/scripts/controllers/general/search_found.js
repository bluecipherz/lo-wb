'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:SearchFoundCtrl
 * @description
 * # SearchFoundCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('SearchFoundCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
  });
