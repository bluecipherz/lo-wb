'use strict';

/**
 * @ngdoc service
 * @name todoappApp.powerProgress
 * @description
 * # powerProgress
 * Service in the todoappApp.
 */
angular.module('loWbApp')
  .service('landingLoader', function ($rootScope) { 
    this.firstLoad = function() {  
	    $rootScope.$on('$viewContentLoaded', function(event) {
	      $('.ll_headProReal').css({width:'100%'}); 
	 
	      setTimeout(function(){$('.ll_head').fadeOut();},600);
	      setTimeout(function(){$('.loaderWrapper').fadeOut();},600);
	      setTimeout(function(){$('.landingLoader').fadeOut();},1000);
	    }); 
	}
  });
