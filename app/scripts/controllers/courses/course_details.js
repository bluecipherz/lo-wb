'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:CourseDetailsCtrl
 * @description
 * # CourseDetailsCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('CourseDetailsCtrl', function ($rootScope,$scope,screenResolution,globeBox) {
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
            $(window).scrollTop(9); 
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
        vm.collListPos = 0;
        vm.CLItemCount = 3; 
        var CLItemCountTemp = vm.CLItemCount;
        vm.CLItemWidth = 0; 


        vm.paginate = function(side){  
            vm.CLItemWidth = $('.ggsc-boxOuter table tr').width() / vm.cData.colleges.length; 

            if(side==0){  
                CLItemCountTemp = vm.CLItemCount;
                for(CLItemCountTemp;CLItemCountTemp > 0 ;CLItemCountTemp--){ 
                    if( vm.collListPos - CLItemCountTemp >= 0){  
                        vm.collListPos -= CLItemCountTemp;   
                        vm.CLItemMargin =  vm.CLItemWidth * vm.collListPos * -1;  
                        break;
                    } 
                } 
            }else{  
                CLItemCountTemp = vm.CLItemCount;
                for(CLItemCountTemp;CLItemCountTemp > 0 ;CLItemCountTemp--){ 
                    if( vm.collListPos + vm.CLItemCount + CLItemCountTemp <= vm.cData.colleges.length){  
                        vm.collListPos += CLItemCountTemp;   
                        vm.CLItemMargin =  vm.CLItemWidth * vm.collListPos * -1;  
                        break;
                    } 
                } 
            }
        } 

        vm.slideFooter = 2;

        /* RESPONSIVE JS */
 
        var Rtest = false;
        var r_crrt = screenResolution.r_crrt;

        var r_MobileS = screenResolution.r_MobileS  ;
        var r_MobileM = screenResolution.r_MobileM  ;
        var r_Mobile  = screenResolution.r_Mobile   ;
        var r_TabletP_semi = screenResolution.r_TabletP_semi  ;
        var r_TabletP = screenResolution.r_TabletP  ;
        var r_TabletL = screenResolution.r_TabletL  ;
        var r_Desktop = screenResolution.r_Desktop  ;
        var r_ExtraLarg = screenResolution.r_ExtraLarg ; 


        responsiveJs();
        $(window).resize(function(){ responsiveJs(); });

        function responsiveJs(){
            if($(window).innerWidth() + r_crrt < r_MobileS ){ 
                if(Rtest){console.log('Mobile small');}
                vm.childCartCount = 2;
                vm.CLItemCount = 1;
                vm.slideFooter = 1;

            }else
            if($(window).innerWidth() + r_crrt < r_MobileM ){ 
                if(Rtest){console.log('Mobile medium');}
                vm.childCartCount = 2;
                vm.CLItemCount = 1;
                vm.slideFooter = 1;
            }else
            if($(window).innerWidth() + r_crrt < r_Mobile ){ 
                if(Rtest){console.log('Mobile');}
                vm.childCartCount = 2; 
                vm.CLItemCount = 1;
                vm.slideFooter = 3;
            }else
            if($(window).innerWidth() + r_crrt < r_TabletP ){ 
                if(Rtest){console.log('Tablet potrate');}
                vm.childCartCount = 2;
                vm.CLItemCount = 2;
                vm.slideFooter = 1;
                if($(window).innerWidth() + r_crrt < r_TabletP_semi){ 
                    vm.CLItemCount = 1;
                    vm.slideFooter = 2;
                }
            }else
            if($(window).innerWidth() + r_crrt < r_TabletL ){ 
                if(Rtest){console.log('Tablet landscape');}
                vm.childCartCount = 5;
                vm.CLItemCount = 2;
                vm.slideFooter = 2;
            }else
            if($(window).innerWidth() + r_crrt < r_Desktop ){ 
                if(Rtest){console.log('Desktop');}
                vm.childCartCount = 5; 
                vm.CLItemCount = 3;
                vm.slideFooter = 1;
            }else
            if($(window).innerWidth() + r_crrt > r_ExtraLarg ){ 
                if(Rtest){console.log('Extra large');}
                vm.childCartCount = 5;
                vm.CLItemCount = 3;
                vm.slideFooter = 2;
            }
        } 

  });
