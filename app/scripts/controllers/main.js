'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoappApp
 */
angular.module('loWbApp')
  .controller('MainCtrl', function ($rootScope,$scope) {


    $rootScope.showHeader = false; 

    $(window).scrollTop(0);
    var vm = this;
    vm.searchPlaceHolder = 'Enter Course or Exam here';
    //homescreen height leveling
    homeScreen();
    $(window).resize(function(){
      homeScreen();
    });
    function homeScreen(){
      var viewPortHeight = $(window).height(); 
      var viewPortWidth = $(window).width();  
      if(viewPortWidth < 480){
        vm.searchPlaceHolder ="Search Here"
        vm.viewP_MM = true;
      }
      if(viewPortWidth < $rootScope.minWidth){
        viewPortHeight = viewPortHeight + viewPortHeight * ( $rootScope.sxZoom + 0.15);
      }
      $('.home-mid').css({'margin-top':viewPortHeight + 50}); 

      // if(viewPortWidth > viewPortHeight && viewPortHeight > 550){
      //   var fontSize =  (( viewPortHeight / 550 ) * 105 + 25)  ;
      //   if(viewPortWidth < 820){ fontSize - 10 ;}
      //   $('.ht-sec-2').css({'font-size':fontSize + '%'}); 
      //   $('.ht-sec-1').css({'font-size':fontSize + 20 + '%'});  
      // }
    }


    $(window).scrollTop(0);
	$scope.items = [{'title':'WHAT TO DO AFTER 10th', 'desc':'Commerce is a field of adventure, Accounting is the major profession in this area, They can try every fields and they are the most highly paid  people ', 'img':'images/home/home1.png'},
                  {'title':'WHAT TO DO AFTER 12th', 'desc':'In our India There are lots of scholarship providers Locally and national wise, many of the eligible students donot know the very fact', 'img':'images/home/home2.png'},
                  {'title':'COMMERCE', 'desc':'Dear CA CMA CS and other commerce Students we provide free video full series all topics all chapters are covered for CA CMA and CS', 'img':'images/home/home3.png'},
                  {'title':'SCHOLARSHIP', 'desc':'Bachelor degree professional degree a diploma, Certification programs are the various options but one can take parallel courses too', 'img':'images/home/home4.png'},
                  {'title':'I LOST MY YEAR', 'desc':'Many students find it really hard to study But later they regret what they have done in their future know how to make studies interesting ', 'img':'images/home/home5.png'},
                  {'title':'HAPPY TO HELP STUDENTS', 'desc':'Drop us a line at contactus@linkonedu.com, to suggest us. ask a question or just to say Hi,You can even call at +918801056799', 'img':'images/home/home6.png'}];

  }).controller('headerController', ['$location','$scope', function(location,$scope){
	$scope.checkHeader = function($location){

    }
  }])
  .controller('ProgressCtrl', function () { 

      $(window).scrollTop(0);
      var vm = this;
      vm.tasks = [
                  { title:'Main Pages',heading:1},
                  { title:'Home Page',heading:0,desk:1,tab:1,mob:1,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Course Page',heading:0,desk:1,tab:1,mob:1,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Exams Page',heading:0,desk:1,tab:1,mob:1,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Collage Page',heading:0,desk:2,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Footer',heading:0,desk:1,tab:1,mob:1,func:0,backend:0,testing:0,bugs:0,completed:0},
                  
                  { title:'Home',heading:1},
                  { title:'Contact us',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Scolarship',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Student Help',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  
                  { title:'Courses',heading:1},
                  { title:'Details with Subcategory',heading:0,desk:1,tab:1,mob:1,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Details ',heading:0,desk:1,tab:1,mob:1,func:0,backend:0,testing:0,bugs:0,completed:0},
                  
                  { title:'Exams',heading:1},
                  { title:'Details with Subcategory',heading:0,desk:1,tab:1,mob:1,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Details ',heading:0,desk:1,tab:1,mob:1,func:0,backend:0,testing:0,bugs:0,completed:0},
                  
                  { title:'Footer',heading:1},
                  { title:'About us',heading:0,desk:1,tab:1,mob:1,func:1,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Coming soon ',heading:0,desk:2,tab:2,mob:2,func:2,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Disclamer ',heading:0,desk:1,tab:1,mob:1,func:1,backend:0,testing:0,bugs:0,completed:0}, 
                  { title:'Feedback ',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Join Our Team ',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Login ',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'Sitemap ',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  
                  { title:'College',heading:1},
                  { title:'College List',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'First Filter',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  { title:'College Profile',heading:0,desk:0,tab:0,mob:0,func:0,backend:0,testing:0,bugs:0,completed:0},
                  
      ];
      var totalTasks = 0;
      var completedTasks = 0; 
      var inProgressTasks = 0;
      angular.forEach(vm.tasks, function(value, key){
      if(value.heading == 0)
        totalTasks++;
        if(value.desk == 1){completedTasks++}else if(value.desk == 2){inProgressTasks++}
        if(value.tab == 1){completedTasks++}else if(value.tab == 2){inProgressTasks++}
        if(value.mob == 1){completedTasks++}else if(value.mob == 2){inProgressTasks++}
        if(value.func == 1){completedTasks++}else if(value.func == 2){inProgressTasks++}
        if(value.backend == 1){completedTasks++}else if(value.backend == 2){inProgressTasks++}
        if(value.testing == 1){completedTasks++}else if(value.testing == 2){inProgressTasks++} 
        if(value.completed == 1){completedTasks++}else if(value.completed == 2){inProgressTasks++}
      });
      totalTasks*=6;
      vm.totalTasks = totalTasks;
      vm.completedTasks = completedTasks;
      vm.inProgressTasks = inProgressTasks;
      vm.totalCompleted = completedTasks / totalTasks * 100 ;
      vm.totalCompleted = vm.totalCompleted.toFixed(2); 
      vm.totalInProgress = ( inProgressTasks ) / ( totalTasks - completedTasks )* 100 ; 
      vm.totalInProgress = vm.totalInProgress.toFixed(2); 

      vm.totalInPro = ( completedTasks + inProgressTasks ) / totalTasks * 100 ; 
      vm.totalInPro =  vm.totalInPro.toFixed(2);

      vm.totalDes = ( completedTasks ) / ( totalTasks / 6 * 3 ) * 100 ;  
      vm.totalDes =  vm.totalDes.toFixed(2); 
  });
