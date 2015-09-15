'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoappApp
 */
angular.module('todoappApp')
  .controller('MainCtrl', function ($scope) {
	$scope.items = [{'title':'WHAT TO DO AFTER 10th', 'desc':'Commerce is a field of adventure, Accounting is the major profession in this area, They can try every fields and they are the most highly paid  people ', 'img':'images/home/home1.png'},
                    {'title':'WHAT TO DO AFTER 12th', 'desc':'In our India There are lots of scholarship providers Locally and national wise, many of the eligible students donot know the very fact', 'img':'images/home/home2.png'},
                    {'title':'COMMERCE', 'desc':'Dear CA CMA CS and other commerce Students we provide free video full series all topics all chapters are covered for CA CMA and CS', 'img':'images/home/home3.png'},
                    {'title':'SCHOLARSHIP', 'desc':'Bachelor degree professional degree a diploma, Certification programs are the various options but one can take parallel courses too', 'img':'images/home/home4.png'},
                    {'title':'I LOST MY YEAR', 'desc':'Many students find it really hard to study But later they regret what they have done in their future know how to make studies interesting ', 'img':'images/home/home5.png'},
                    {'title':'HAPPY TO HELP STUDENTS', 'desc':'Drop us a line at contactus@linkonedu.com, to suggest us. ask a question or just to say Hi,You can even call at +918801056799', 'img':'images/home/home6.png'}];

  }).controller('headerController', ['$location','$scope', function(location,$scope){
	$scope.checkHeader = function($location){

    }
  }]);
