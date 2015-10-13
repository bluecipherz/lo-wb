'use strict';

/**
 * @ngdoc service
 * @name todoappApp.powerProgress
 * @description
 * # powerProgress
 * Service in the todoappApp.
 */
angular.module('loWbApp')
  .service('powerProgress', function () {
        var timex;
    this.loadProgress = function() {
        clearTimeout(timex);
        $('#powerProgress').css({
            'transition':'width 0s',
            'width':'0'
        });
		$('#powerProgress').css({
			'transition':'width 1s',
			'width':'100%'
		});
        timex = setTimeout( function(){
			$('#powerProgress').css({
				'transition':'width 0s',
				'width':'0'
			});
		},1000);
	}
  });
