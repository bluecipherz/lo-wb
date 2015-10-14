'use strict';

/**
 * @ngdoc directive
 * @name loWbApp.directive:nestedMenu
 * @description
 * # nestedMenu
 */
angular.module('loWbApp')
  .directive('nestedMenu', function ($compile) {
    return {
      templateUrl: 'views/widgets/nestedmenu.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if(angular.isArray(scope.course.children)) {
        	// console.log(scope.course.name + ' has children');
          var el = angular.element('<nested-menu ng-repeat="course in course.children"></nested-menu>');
          $compile(el)(scope);
          element.find('.child').append(el);
        }
      }
    };
  });
