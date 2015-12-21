'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:CollegeListCtrl
 * @description
 * # CollegeListCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('CollegeListCtrl', function ($rootScope,$scope,responsive,globeBox,landingLoader) {
    landingLoader.firstLoad();
    
    $(window).scrollTop(0);
	var vm = this;
    $rootScope.showHeader = true;
    vm.selectedLTemp = 'LOCATION';
    vm.selectedLocation = '';
    vm.showLocation = false;

    vm.selectedFRTemp = 'FEE RANGE';
    vm.selectedFRF = 0;
    vm.selectedFRL = 99999999;
    vm.showFR = false;

    vm.selectFR = function(col){
        vm.selectedFRF = col.flim;
        vm.selectedFRL = col.llim;
        vm.selectedFRTemp = col.flim + " - " + col.llim;
    }

    vm.selectL = function(loc){
        vm.selectedLocation = vm.selectedLTemp = loc.name;
        console.log(vm.selectedLocation);
    }


    vm.cData = {
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
        EColleges:[
            {id:1,topCol:0,imgLink:'',heading:'Catholic Syriyan Medical College',place:'Kannur,Kerala',fees:12000,seats:1209},
            {id:2,topCol:0,imgLink:'',heading:'St George Medical College',place:'Banglore, Karnataka',fees:4000,seats:1209},
            {id:3,topCol:1,imgLink:'',heading:'Litle Master Medical College',place:'Banglore, Karnataka',fees:34000,seats:1209},  
            {id:3,topCol:0,imgLink:'',heading:'Catholic Syriyan Medical College',place:'Kozhikode, Kerala',fees:36000,seats:1209},  
            {id:2,topCol:0,imgLink:'',heading:'St George Medical College',place:'Vellore, Tamil nadu',fees:16000,seats:1209},
            {id:3,topCol:1,imgLink:'',heading:'Litle Master Medical College',place:'Moonar, Kerala',fees:14000,seats:1209},
            {id:1,topCol:0,imgLink:'',heading:'Catholic Syriyan Medical College',place:'Kannur,Kerala',fees:19000,seats:1209},
            {id:2,topCol:1,imgLink:'',heading:'St George Medical College',place:'Banglore, Karnataka',fees:130000,seats:1209},
            {id:3,topCol:0,imgLink:'',heading:'Litle Master Medical College',place:'Banglore, Karnataka',fees:700000,seats:1209},  
            {id:3,topCol:1,imgLink:'',heading:'Catholic Syriyan Medical College',place:'Eranakulam, Kerala',fees:560000,seats:1209},  
            {id:2,topCol:1,imgLink:'',heading:'St George Medical College',place:'Vellore, Tamil nadu',fees:450000,seats:1209},
            {id:3,topCol:0,imgLink:'',heading:'Litle Master Medical College',place:'Moonar, Kerala',fees:30000,seats:1209},
            {id:1,topCol:0,imgLink:'',heading:'Catholic Syriyan Medical College',place:'Kannur,Kerala',fees:290000,seats:1209},
            {id:2,topCol:1,imgLink:'',heading:'St George Medical College',place:'Banglore, Karnataka',fees:53000,seats:1209},
            {id:3,topCol:1,imgLink:'',heading:'Litle Master Medical College',place:'Manglore, Karnataka',fees:322000,seats:1209},  
            {id:3,topCol:1,imgLink:'',heading:'Catholic Syriyan Medical College',place:'Kozhikode, Kerala',fees:232000,seats:1209},  
            {id:2,topCol:0,imgLink:'',heading:'St George Medical College',place:'Vellore, Tamil nadu',fees:340000,seats:1209},
            {id:3,topCol:0,imgLink:'',heading:'Litle Master Medical College',place:'Kannur, Kerala',fees:240000,seats:1209},  
            {id:3,topCol:1,imgLink:'',heading:'Litle Master Medical College',place:'Eranakulam, Kerala',fees:540000,seats:1209},   
        ], 
        locations:[
            {id:1,name:'MOONAR'},
            {id:1,name:'VELLORE'},
            {id:1,name:'KANNUR'},
            {id:1,name:'KOZHIKOD'},
            {id:1,name:'MANGLORE'},
            {id:1,name:'BANGLORE'},
            {id:1,name:'ERNAKULAM'},
        ],
        feeRange:[  
            {flim:0,llim:5000}, 
            {flim:5000,llim:10000}, 
            {flim:10000,llim:15000}, 
            {flim:15000,llim:20000}, 
            {flim:20000,llim:50000}, 
            {flim:50000,llim:100000}, 
            {flim:10000,llim:500000}, 
        ]
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
