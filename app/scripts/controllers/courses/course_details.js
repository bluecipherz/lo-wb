'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:CourseDetailsCtrl
 * @description
 * # CourseDetailsCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('CourseDetailsCtrl', function ($rootScope,$scope,responsive,globeBox,landingLoader) {
    landingLoader.firstLoad();
        $(window).scrollTop(0);
    	var vm = this;
        $rootScope.showHeader = true;
   
        vm.cData = {
            type:'parent',
            mainHeading:'ENGINEERING',
            subHeading:'WHAT TO DO AFTER 12TH',  
            details:[ 
                {boxType:'box',boxWidth:1,title:'ABOUT',desc:'Engineering is kind of course that can even kill within a second without thinking about your future. Doesnt matter whatever you are, Where ever you go, it Will keep following you.Engineering is kind of course that can even kill within a second without thinking about your future. Doesnt matter whatever you are, Where ever you go, it Will keep following you.Engineering is kind of course that can even kill within a second without thinking about your future. Doesnt matter whatever you are, Where ever you go, it Will keep following you. '},
                {boxType:'box',boxWidth:1,title:'MINIMUM QUALIFICATIONS',desc:' 1 Complete 10+2 with 45% Marks '},
                {boxType:'box',boxWidth:1,title:'MOST POPULAR EXAMS',desc:' All india level examinations'},
                {boxType:'box',boxWidth:1,title:'SCHOLARSHIP AVAILABLE',desc:' All india scholarship, state level scholarship'},

                {boxType:'buttonBox',boxWidth:2,title:'MECHANICAL ENGINEERING',bname:'MORE',ngClick:1,desc:'Commerce is a field of adventure. Commerce state level scholarship is a field of adventure. Commerce is a field of adventure. '},
                {boxType:'buttonBox',boxWidth:2,title:'COMPUTER SCIENCE',bname:'MORE',ngClick:2,desc:' All india scholarship, Commerce is a field of adventure. state level scholarship Commerce is a field of adventure. field of adventure.'},
            ],
        }; 
        $scope.buttonClick = function(id){ 
            vm.cData = cData1; 
            $(window).scrollTop(0); 
        }

        var cData1 = {
            type:'endNode',
            mainHeading:'FEATURED COLLEGE',   
            link:'#/college_profile/',
            colleges:[
                {id:1,imgLink:'',heading:'Catholic Syriyan Medical College',place:'Vellore, Tamil Nadu',fees:540000,seats:1209},
                {id:2,imgLink:'',heading:'St George Medical College',place:'Vellore, Tamil Nadu',fees:540000,seats:1209},
                {id:3,imgLink:'',heading:'Litle Master Medical College',place:'Vellore, Tamil Nadu',fees:540000,seats:1209},  
                {id:3,imgLink:'',heading:'Catholic Syriyan Medical College',place:'Vellore, Tamil Nadu',fees:540000,seats:1209},  
                {id:2,imgLink:'',heading:'St George Medical College',place:'Vellore, Tamil Nadu',fees:540000,seats:1209},
                {id:3,imgLink:'',heading:'Litle Master Medical College',place:'Vellore, Tamil Nadu',fees:540000,seats:1209},  
                {id:3,imgLink:'',heading:'Litle Master Medical College',place:'Vellore, Tamil Nadu',fees:540000,seats:1209},   
            ],
            details:[
                {boxType:'headBox',imgLink:'images/courses/courseImg.jpg',boxWidth:1,title:'ABOUT',desc:'Engineering is kind of course that can even kill within a second thinking about your future. Doesnt matter whatever you are, Where ever you go, it Will keep following you.Engineering is kind of course that can even kill within a second without thinking about your future. Doesnt matter whatever you are, Where ever you go, it Will keep following you. '},
                 
                {boxType:'box',boxWidth:1,title:'MINIMUM QUALIFICATIONS',desc:' 1 Complete 10+2 with 45% Marks '},
                {boxType:'box',boxWidth:1,title:'MOST POPULAR EXAMS',desc:' All india level examinations'},
                {boxType:'box',boxWidth:1,title:'SCHOLARSHIP AVAILABLE',desc:' All india scholarship, state level scholarship'},
 
            ],
        };  

        // Header slider config

        vm.collListPos = 0;
        vm.CLItemCount = 3; 
        vm.CLItemWidth = 0; 
        vm.slideFooter = 2;   

        vm.paginate = globeBox.paginate; 
        vm.boxClick = globeBox.boxClick; 

        /* RESPONSIVE JS */ 

        responsive.makeResponsive({
            mobile_s:function(){
                vm.childCartCount = 2;
                vm.CLItemCount = 1;
                vm.slideFooter = 1;
            },
            mobile_m:function(){
                vm.childCartCount = 2;
                vm.CLItemCount = 1;
                vm.slideFooter = 1;
            },
            mobile:function(){ 
                vm.childCartCount = 2; 
                vm.CLItemCount = 1;
                vm.slideFooter = 3;
            },
            tablet_p:function(){  
                vm.childCartCount = 2;
                vm.CLItemCount = 2;
                vm.slideFooter = 1;
            },
            tablet_p_semi:function(){ 
                vm.CLItemCount = 1;
                vm.slideFooter = 2;
            },
            tablet_l:function(){ 
                vm.childCartCount = 5;
                vm.CLItemCount = 2;
                vm.slideFooter = 2;
            },
            desktop:function(){ 
                vm.childCartCount = 5; 
                vm.CLItemCount = 3;
                vm.slideFooter = 1;
            },
            extraLarge:function(){ 
                vm.childCartCount = 5;
                vm.CLItemCount = 3;
                vm.slideFooter = 2;
            },
        }); 
  });
