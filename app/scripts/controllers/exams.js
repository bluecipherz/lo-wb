'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:ExamsCtrl
 * @description
 * # ExamsCtrl
 * Controller of the todoappApp
 */
angular.module('loWbApp')
  .controller('ExamsCtrl', function ($scope,$interval,nestedSet, $stateParams,$rootScope, $state,$location,responsive,landingLoader) {
    landingLoader.firstLoad();
        var vm = this;
        var firstLoad = false;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams; 
        $(window).scrollTop(0);
        $rootScope.showHeader = true;

        vm.itemStarting = 0;
        vm.listlevel = 0;
        vm.navItem = vm.itemStarting;
        vm.itemCount = 2;
        this.selected = []; // tree view heirarchy selected elements

        vm.courseList = nestedSet.getNestedSet();

        nestedSet.onFetch(function() {
            vm.courseList = nestedSet.getNestedSet();
        })

        // this.selectItem = function(id) {
        //     var depth = nestedSet.find(id).get().depth;
        //     while(vm.selected.length > depth) { // deselect necessary items
        //         vm.selected.pop();
        //     }
        //     vm.selected.push(id); // select clicked item
        // }   

        vm.selectItem = function(id) { 
            if(id >= vm.itemStarting + vm.itemCount || id < vm.itemStarting ){
                vm.itemStarting = id; 
            }
            vm.navItem = id; 
            vm.courseData = vm.courseDataMain;
            vm.itemChild = -1;
            vm.listlevel = 0;
            levelHeight();
        }

        vm.selectChild = function(id) {  
            selectChild(id);
        }  
        function selectChild(id){ 
            vm.itemChild = id; 
            vm.courseData = vm.courseData_1; // fetch the data
            vm.itemStarting =  id; 
            vm.listlevel = 1;
            levelHeight();
        }
        // vm.childItemInit = function(length,data){ 
        //     if(data.type == 'parent'){ 
        //         data.parentIndex = vm.parentIndex;
        //         console.log(data.title +" : "+data.parentIndex +" : "+length); 
        //         vm.parentIndex++;
        //     }
        // }
        vm.childClick = function(id,type,index){ 
            console.log(id);
            if(type == 'parent'){
                selectChild(id);
                console.log('Its a parent');
            }else{
                $location.path('/exam_details/'+ index);
                console.log('its not parent');
            }
            levelHeight();
        }

        vm.isSelected = function(id) {
            return vm.selected.indexOf(id) > -1;
        }


        vm.paginate = function(data){
            if(data == 0){
                if( vm.itemStarting > 0){
                    if(vm.itemStarting - vm.itemCount < 0){
                        vm.itemStarting = 0; 
                    }else{
                        vm.itemStarting -= vm.itemCount; 
                    }
                    $(window).scrollTop(0); 
                } 
                console.log( " Left " + vm.itemStarting + " : "+ vm.itemCount);
            }else{ 
                if( vm.itemStarting + vm.itemCount < vm.courseData.length){
                    vm.itemStarting += vm.itemCount;
                    $(window).scrollTop(0);
                } 
                console.log( " Right " + vm.itemStarting + " : "+ vm.itemCount);
            }
            if(vm.listlevel == 0){ vm.navItem = vm.itemStarting; }else 
            if(vm.listlevel == 1){ vm.itemChild = vm.itemStarting; } 
            levelHeight();
        }


        vm.courseDataMain = [
            {id:0,'title':'Awesome Exam After 10th', 'desc':'Commerce is a field of adventure, Accounting is the major profession in this area, They can try every fields and they are the most highly paid  people ', 'img':'images/home/home1.png','type':'parent',
                'children':[ 
                    {id:0,'title':'Study Various Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23,parIndex:0},
                    {id:1,'title':'Engeneering Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:2,'title':'Awesome Exam','duration':2,'cost':3,'type':'endNode'},
                    {id:3,'title':'Poly Exam','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12,parIndex:1},
                    {id:4,'title':'Powerful Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:5,'title':'Strange Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23,parIndex:2}, 
                    {id:6,'title':'Helpful Exam','duration':3,'cost':5,'type':'endNode'},
                    {id:7,'title':'Just pass Exam','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {id:1,'title':'What To Do After 12th', 'desc':'In our India There are lots of scholarship providers Locally and national wise, many of the eligible students donot know the very fact', 'img':'images/home/home2.png','type':'parent',
                'children':[
                    {id:0,'title':'Powerful Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:1,'title':'Study Various Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23,parIndex:0},
                    {id:2,'title':'Engeneering Exam','duration':5,'cost':2,'type':'endNode'},  
                    {id:3,'title':'Poly Exam','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12,parIndex:1},
                    {id:4,'title':'Helpful Exam','duration':3,'cost':5,'type':'endNode'},
                    {id:5,'title':'Just pass Exam','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {id:2,'title':'Commerce', 'desc':'Dear CA CMA CS and other commerce Students we provide free video full series all topics all chapters are covered for CA CMA and CS', 'img':'images/home/home3.png','type':'parent',
                'children':[
                    {id:0,'title':'Strange Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23,parIndex:0}, 
                    {id:1,'title':'Poly Exam','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12,parIndex:1},
                    {id:2,'title':'Powerful Exam','duration':5,'cost':2,'type':'endNode'}, 
                ]
            },
            {id:3,'title':'Scholarship', 'desc':'Bachelor degree professional degree a diploma, Certification programs are the various options but one can take parallel courses too', 'img':'images/home/home4.png','type':'parent',
                'children':[
                    {id:0,'title':'Awesome Exam','duration':2,'cost':3,'type':'endNode'},
                    {id:1,'title':'Poly Exam','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12,parIndex:0},
                    {id:2,'title':'Helpful Exam','duration':3,'cost':5,'type':'endNode'},  
                    {id:3,'title':'Powerful Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:4,'title':'Study Various Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23,parIndex:1},
                    {id:5,'title':'Engeneering Exam','duration':5,'cost':2,'type':'endNode'},
                ]
            },
            {id:4,'title':'I Lost My Year', 'desc':'Many students find it really hard to study But later they regret what they have done in their future know how to make studies interesting ', 'img':'images/home/home5.png','type':'parent',
                'children':[ 
                    {id:0,'title':'Powerful Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:1,'title':'Study Various Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23,parIndex:0},
                    {id:2,'title':'Engeneering Exam','duration':5,'cost':2,'type':'endNode'}, 
                    {id:3,'title':'Helpful Exam','duration':3,'cost':5,'type':'endNode'}, 
                    {id:4,'title':'Strange Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23,parIndex:1},
                ]
            }
        ];


        vm.courseData_1 = [
            {id:0,'title':'Study Various Exam', 'desc':'Dear CA CMA CS and other commerce Students we provide free video full series all topics all chapters are covered for CA CMA and CS', 'img':'images/home/home3.png','type':'parent',
                'children':[
                    {id:0,'title':'Strange Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23,parIndex:0}, 
                    {id:1,'title':'Poly Exam','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12,parIndex:1},
                    {id:2,'title':'Powerful Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:3,'title':'Study Various Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23,parIndex:2},
                    {id:4,'title':'Engeneering Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:5,'title':'Awesome Exam','duration':2,'cost':3,'type':'endNode'},
                    {id:6,'title':'Helpful Exam','duration':3,'cost':5,'type':'endNode'}, 
                ]
            }, 
            {id:1,'title':'Poly Exam', 'desc':'In our India There are lots of scholarship providers Locally and national wise, many of the eligible students donot know the very fact', 'img':'images/home/home2.png','type':'parent',
                'children':[
                    {id:0,'title':'Powerful Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:1,'title':'Study Various Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23,parIndex:0},
                    {id:2,'title':'Engeneering Exam','duration':5,'cost':2,'type':'endNode'},  
                    {id:3,'title':'Poly Exam','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12,parIndex:1},
                    {id:4,'title':'Helpful Exam','duration':3,'cost':5,'type':'endNode'},
                    {id:5,'title':'Just pass Exam','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {id:2,'title':'Strange Exam', 'desc':'Many students find it really hard to study But later they regret what they have done in their future know how to make studies interesting ', 'img':'images/home/home5.png','type':'parent',
                'children':[ 
                    {id:0,'title':'Powerful Exam','duration':5,'cost':2,'type':'endNode'},
                    {id:1,'title':'Study Various Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23,parIndex:0},
                    {id:2,'title':'Engeneering Exam','duration':5,'cost':2,'type':'endNode'}, 
                    {id:3,'title':'Helpful Exam','duration':3,'cost':5,'type':'endNode'}, 
                    {id:4,'title':'Strange Exam','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23,parIndex:1},
                ]
            }
        ];
 
        vm.courseData = vm.courseDataMain;
        vm.courseLists = vm.courseDataMain; 

        $scope.number = 5;
        vm.getNumber = function(num) {
            return new Array(num);   
        }

        $interval(function(){ vm.pageAct = true; },200);



        /* JAVA SCRIPT RESPONSIVE FUNCTIONS  */ 

        var lh_def = 150;
        var lh_itemH = 35;
        var lh_item = 30;
        var lh_height; 

        function levelHeight(){
            lh_height = lh_def + lh_itemH * vm.courseLists.length + lh_item * vm.courseLists[vm.navItem].children.length;
            console.log(lh_height +" : "+ vm.courseLists[vm.navItem].children.length);
            $('.pageOuter').css({'min-height':lh_height});
        }
        levelHeight();

        vm.childCartCount = 5;
 

        /* RESPONSIVE JS */ 

        responsive.makeResponsive({
            mobile_s:function(){
                vm.childCartCount = 2;
            },
            mobile_m:function(){
                vm.childCartCount = 2;
            },
            mobile:function(){ 
                vm.childCartCount = 2;
            },
            tablet_p:function(){  
                vm.childCartCount = 2;
            },
            tablet_p_semi:function(){ 
                vm.childCartCount = 5;
            },
            tablet_l:function(){ 
                vm.childCartCount = 5;
            },
            desktop:function(){ 
                vm.childCartCount = 5;
            },
            extraLarge:function(){ 
                vm.childCartCount = 5;
            },
        }); 
  });
