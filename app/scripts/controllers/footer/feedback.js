'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:FeedbackCtrl
 * @description
 * # FeedbackCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('FeedbackCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
        $rootScope.showHeader = true;
        $(window).scrollTop(0);
  });
