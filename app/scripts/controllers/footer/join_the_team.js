'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:JoinTheTeamCtrl
 * @description
 * # JoinTheTeamCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('JoinTheTeamCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
        $rootScope.showHeader = true;
        $(window).scrollTop(0);
  });
