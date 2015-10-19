'use strict';

/**
 * @ngdoc overview
 * @name todoappApp
 * @description
 * # todoappApp
 *
 * Main module of the application.
 */
angular
  .module('loWbApp', [
    'ngResource',
    'ui.router',
  ])
  .config(function ($locationProvider,$stateProvider,$urlRouterProvider) {
      $urlRouterProvider.otherwise('/'); 
 
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .state('exams', {
          url: '/exams',
          templateUrl: 'views/courses.html',
          controller: 'ExamsCtrl',
          controllerAs: 'courses'
        })
        .state('courses', {
          url: '/courses',
          templateUrl: 'views/courses.html',
          controller: 'CoursesCtrl',
          controllerAs: 'courses'
        })
        .state('funzone', {
          url: '/funzone',
          templateUrl: 'views/courses.html',
          controller: 'FunzoneCtrl',
          controllerAs: 'courses'
        }) 
        
  })
  .run(function($rootScope, powerProgress) {
	  $rootScope.$on('$routeChangeStart', function() {
		  powerProgress.loadProgress();
	  });

	  $rootScope.$on('$routeChangeSuccess', function() {
	  
	  });
  }).directive("scroll", ['$location','$window', function(location,$window){
    return function($scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (location.path() =='/' ) {
          if (this.pageYOffset >= 450) {
            $scope.addHeader = true;
          } else {
            $scope.addHeader = false;
            var op = 1 - ((this.pageYOffset)/450 );
            var zoom = 1 - (((this.pageYOffset)/450 ) / 5);
            $('.home-top-inner').css({'opacity' : op , '-webkit-transform': 'scale('+zoom+')' ,'-moz-transform': 'scale('+zoom+')'});
          }
        }else{
          $scope.addHeader = true;
        }
        $scope.$apply();
      });
    };
  }]).run(function($rootScope, $location) {
    $rootScope.location = $location;
  });