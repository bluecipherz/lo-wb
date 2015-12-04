'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:SitemapCtrl
 * @description
 * # SitemapCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('SitemapCtrl', function ($rootScope) {
        $rootScope.showHeader = true;
        $(window).scrollTop(0);
  });
