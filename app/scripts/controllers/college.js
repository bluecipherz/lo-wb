'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the todoappApp
 */
angular.module('loWbApp')
  .controller('CollegeCtrl', function ($stateParams,$rootScope, $state,landingLoader) {
    landingLoader.firstLoad();
        var vm = this;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams; 
        $(window).scrollTop(0);

 
        
    });
