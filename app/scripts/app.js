'use strict';

/**
 * @ngdoc overview
 * @name loWbApp
 * @description
 * # loWbApp
 *
 * Main module of the application.
 */
angular
  .module('loWbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
  });
