'use strict';

/**
 * @ngdoc directive
 * @name loWbApp.directive:nestedMenu
 * @description
 * # nestedMenu
 */
angular.module('loWbApp')
  .directive('globeBox', function () {
    return {
      templateUrl: 'views/widgets/globeBox.html',
      replace: true,
      restrict: 'E', 
    };
  });
