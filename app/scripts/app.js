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
  .module('todoappApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
      .when('/exams', {
        templateUrl: 'views/exams.html',
        controller: 'ExamsCtrl',
        controllerAs: 'exams'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl',
        controllerAs: 'courses'
      })
      .when('/funzone', {
        templateUrl: 'views/funzone.html',
        controller: 'FunzoneCtrl',
        controllerAs: 'funzone'
      })
      .otherwise({
        redirectTo: '/'
      });
      // enable html5Mode for pushstate ('#'-less URLs)
      if(window.history && window.history.pushState){
          $locationProvider.html5Mode(true);
      }
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