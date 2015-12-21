'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:AboutUsCtrl
 * @description
 * # AboutUsCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('AboutUsCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();

        $rootScope.showHeader = true;
        $(window).scrollTop(0);
    var vm = this;
    vm.description = "Sample text that  will make sure that this page is nt empty . so that  now i can simply write something else to fill this up. Sample text that  will make sure that this page is nt empty . so that  now i can simply write something else to fill this up. Sample text that  will make sure that this page is nt empty . so that  now i can simply write something else to fill this up. Sample text that  will make sure that this page is nt empty . so that  now i can simply write something else to fill this up. ";
  });
