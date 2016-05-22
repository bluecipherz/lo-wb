'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:ComingSoonCtrl
 * @description
 * # ComingSoonCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('ComingSoonCtrl', function ($rootScope,landingLoader) {
    landingLoader.firstLoad();
        $rootScope.showHeader = true;
        $(window).scrollTop(0);

        setTimeout(function(){
        	var wh = $(window).height();
        	var ww = $(window).width();
        	console.log(wh + ' ---');

        	$('.comingSoon > .cs_img_1').css({opacity:1});
        	$('.comingSoon > .cs_img_2').css({opacity:1});
        },10);
  });
