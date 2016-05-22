'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:SearchFoundCtrl
 * @description
 * # SearchFoundCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('SearchFoundCtrl', function ($rootScope,landingLoader,$stateParams) {
    $rootScope.addHeader = true;
    landingLoader.firstLoad();
    $(window).scrollTop(0);
    var vm = this;
    vm.searchPlaceHolder = 'Enter Cource or Exam here';
    vm.keyword = $stateParams.keyword;


  });
