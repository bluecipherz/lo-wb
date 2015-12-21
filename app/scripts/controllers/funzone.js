'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:FunzoneCtrl
 * @description
 * # FunzoneCtrl
 * Controller of the todoappApp
 */
angular.module('loWbApp')
  .controller('FunzoneCtrl', function ($scope,$interval,nestedSet, $stateParams,$rootScope, $state,$timeout,landingLoader) {
    landingLoader.firstLoad();
        var vm = this;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams; 
        $(window).scrollTop(0);
        
        vm.funZoneNav = [];
        vm.funZoneSubNav = [];

        var funZoneNav = [   
            {name:'Knowledge Updates',type:'endNode',cat_id:2},
            {name:'Trending News',type:'parent',children:[
                {name:'Best Master',cat_id:41},
                {name:'Powerful Hero',cat_id:42},
                {name:'Faster hugo',cat_id:35},
                {name:'Mashup Man',cat_id:36},
                {name:'Kid Rock',cat_id:37},
                {name:'People Shifts',cat_id:38},
                {name:'Red Alret',cat_id:39},
                {name:'Beast inside',cat_id:40},
            ]},
            {name:'Articles',type:'parent',children:[
                {name:'Faster hugo',cat_id:7},
                {name:'Mashup Man',cat_id:8},
                {name:'Kid Rock',cat_id:15},
                {name:'People Shifts',cat_id:10},
                {name:'Red Alret',cat_id:11},
                {name:'Beast inside',cat_id:12},
                {name:'Best Master',cat_id:32},
                {name:'Powerful Hero',cat_id:33},
            ]},
            {name:'How smart are you?',type:'endNode',cat_id:13},
            {name:'Entertainment',type:'parent',children:[
                {name:'Caged Birds',cat_id:19},
                {name:'Stereo Master',cat_id:20},
                {name:'People Going Abroad',cat_id:21},
                {name:'Holly Grail',cat_id:22},
                {name:'Possible solutions',cat_id:34},
                {name:'Not enough',cat_id:23},
                {name:'Bleed money',cat_id:24},
            ]},
            {name:'Puzzle',type:'parent',children:[
                {name:'Challage Accepted',cat_id:25},
                {name:'So what.. Huh ?',cat_id:26},
                {name:'Old Memories',cat_id:27},
                {name:'Grudge',cat_id:28},
                {name:'Fear Less',cat_id:29},
                {name:'Cool News',cat_id:30},
            ]} 

        ];

        

        var feed1 = [
            { name:'End of the world',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' }, 
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
            { name:'This is the Damn Title, This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img5.jpg',
                date:'NOVEMBER 12' },
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' },
        ];

        var feed1 = [
            { name:'This is the Damn Title, This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' },
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed2 = [
            { name:'Saturated alcohols',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img5.jpg',
                date:'NOVEMBER 12' },
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' },
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed3 = [
            { name:'Health problems',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
            { name:'This is the Damn Title, This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img5.jpg',
                date:'NOVEMBER 12' },
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' },
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed4 = [
            { name:'benchmarking ',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img5.jpg',
                date:'NOVEMBER 12' },
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' }, 
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed5 = [ 
            { name:'Street is so cold',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed6 = [
            { name:'Check this out, But a long Title i dontthink you will belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img5.jpg',
                date:'NOVEMBER 12' },
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Man Im Getting Border, belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' },
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed7 = [ 
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' },
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed8 = [
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' }, 
            { name:'This is the Damn Title, This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img5.jpg',
                date:'NOVEMBER 12' },
            { name:'Man Im Getting Border, belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed9 = [
            { name:'Man Im Getting Border, belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'This is the Damn Title, This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img5.jpg',
                date:'NOVEMBER 12' },
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' },
            { name:'This is not just atitle, But a long Title i dontthink you will belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img3.jpg',
                date:'NOVEMBER 12' }, 
        ];

        var feed10 = [ 
            { name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12' },
            { name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12' }, 
        ];



         vm.mostViewed = [];
         var mostViewed = [
            {
                name:'This is the Damn Title,  you will belive that',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img2.jpg',
                date:'NOVEMBER 12'
            },
            {
                name:'Cool title,  belive that',
                description:'Awesome.!! this the first description i have ever found in my description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img1.jpg',
                date:'NOVEMBER 12'
            },
            {
                name:'Awesome, Title',
                description:'Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi Hello Hello..!! this the first description i have ever found in my life to make this sites descripotion shitty basi',
                img:'images/funzone/img4.jpg',
                date:'NOVEMBER 12'
            }, 
         ];



        vm.feeds = [];
        vm.mainTab = 1; 
        vm.subTab = 1; 

        $timeout(function() {
            vm.funZoneNav = funZoneNav;
            vm.catType = vm.funZoneNav[0].type; 
            vm.mostViewed = mostViewed;
            if(vm.catType == "parent"){
                 vm.subTitle = vm.funZoneNav[0].children[0].name;
                 pevoteCat(vm.funZoneNav[0].children[0].cat_id);  
            }else{
                vm.subTitle = vm.funZoneNav[0].name;
                pevoteCat(vm.funZoneNav[0].cat_id);  
            }
        }, 10);    
            

         vm.mainNavClick = function(data,index){
            if(vm.mainTab != index+1){
                vm.mainTab = index+1; 
                vm.subTab = 1;
                vm.catType = data.type;  
                if(vm.catType == 'endNode'){
                    vm.subTitle = data.name;
                    pevoteCat(data.cat_id); 
                    vm.funZoneSubNav=[];
                }else{
                    vm.subTitle = data.children[0].name;
                    pevoteCat(data.children[0].cat_id);
                    vm.funZoneSubNav = data.children;
                    console.log(vm.funZoneSubNav);
                }
            }
         }
         vm.subNavClick = function(data,index){ 
            if(vm.mainTab != index+1){
                vm.subTab = index+1;
                vm.subTitle = data.name; 
                pevoteCat(data.cat_id);  
            }
         }
         var t ,t2;
         function pevoteCat(id){ 
            $timeout.cancel(t);
            $timeout.cancel(t2);
            vm.feeds = [];
            vm.fetchingFeeds = true;
            t2 = $timeout(function(){
                vm.fetchingFeeds = false;
            },1000);
            t = $timeout(function(){
            if(id == 1){vm.feeds = feed1;} else
            if(id == 2){vm.feeds = feed2;} else
            if(id == 3){vm.feeds = feed3;} else
            if(id == 4){vm.feeds = feed4;} else
            if(id == 5){vm.feeds = feed5;} else
            if(id == 6){vm.feeds = feed6;} else
            if(id == 7){vm.feeds = feed7;} else
            if(id == 8){vm.feeds = feed8;} else
            if(id == 9){vm.feeds = feed9;} else
            if(id == 10){vm.feeds = feed10;} else
            if(id == 11){vm.feeds = feed1;} else
            if(id == 12){vm.feeds = feed2;} else
            if(id == 13){vm.feeds = feed3;} else
            if(id == 14){vm.feeds = feed4;} else
            if(id == 15){vm.feeds = feed5;} else
            if(id == 17){vm.feeds = feed3;} else
            if(id == 16){vm.feeds = feed6;} else
            if(id == 18){vm.feeds = feed7;} else
            if(id == 19){vm.feeds = feed8;} else
            if(id == 20){vm.feeds = feed9;} else 
            if(id == 21){vm.feeds = feed10;} else 
            if(id == 22){vm.feeds = feed1;} else 
            if(id == 23){vm.feeds = feed2;} else 
            if(id == 24){vm.feeds = feed3;} else 
            if(id == 25){vm.feeds = feed4;} else 
            if(id == 26){vm.feeds = feed5;} else 
            if(id == 27){vm.feeds = feed6;} else 
            if(id == 28){vm.feeds = feed7;} else 
            if(id == 29){vm.feeds = feed8;} else 
            if(id == 30){vm.feeds = feed9;} else  
            if(id == 31){vm.feeds = feed10;} else  
            if(id == 32){vm.feeds = feed1;} else  
            if(id == 33){vm.feeds = feed2;} else  
            if(id == 34){vm.feeds = feed3;} else  
            if(id == 35){vm.feeds = feed4;} else  
            if(id == 36){vm.feeds = feed5;} else  
            if(id == 37){vm.feeds = feed6;} else  
            if(id == 38){vm.feeds = feed7;} else  
            if(id == 39){vm.feeds = feed8;} else  
            if(id == 40){vm.feeds = feed9;} else   
            if(id == 41){vm.feeds = feed6;} else   
            if(id == 42){vm.feeds = feed10;} else   
            if(id == 43){vm.feeds = feed1;} else   
            if(id == 44){vm.feeds = feed2;} else   
            if(id == 45){vm.feeds = feed3;} else   
            if(id == 46){vm.feeds = feed4;} else   
            if(id == 47){vm.feeds = feed5;} else   
            if(id == 48){vm.feeds = feed6;} else   
            if(id == 49){vm.feeds = feed7;} else   
            if(id == 50){vm.feeds = feed8;} 
            },3000);  
         }
  });

