'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the todoappApp
 */
angular.module('loWbApp')
  .controller('CoursesCtrl', function ($scope,$interval,nestedSet, $stateParams,$rootScope, $state) {
        var vm = this;
        var firstLoad = false;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams; 
        $(window).scrollTop(0);

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
        vm.parentIndex = 0;

        vm.selectItem = function(id) { 
            if(id >= vm.itemStarting + vm.itemCount || id < vm.itemStarting ){
                vm.itemStarting = id; 
            }
            vm.navItem = id;
            vm.courseData = vm.courseDataMain;
            vm.itemChild = -1;
            vm.listlevel = 0;
        }

        vm.selectChild = function(id) {  
            selectChild(id);
        }  
        function selectChild(id){ 
            vm.itemChild = id; 
            vm.courseData = vm.courseData_1; // fetch the data
            vm.itemStarting =  id; 
            vm.listlevel = 1;
        }
        vm.childItemInit = function(length,data){ 
            if(data.type == 'parent'){ 
                data.parentIndex = vm.parentIndex;
                console.log(data.title +" : "+data.parentIndex +" : "+length);
                if(vm.parentIndex >= length){
                    vm.parentIndex =0;
                    console.log('Shit');
                }
                vm.parentIndex++;
            }
        }
        vm.childClick = function(id,type){ 
            if(type == 'parent'){
                selectChild(id);
            }else{
                console.log('its not parent');
            }
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
                if( vm.itemStarting + vm.itemCount <= vm.courseData.length){
                    vm.itemStarting += vm.itemCount;
                    $(window).scrollTop(0);
                } 
                console.log( " Right " + vm.itemStarting + " : "+ vm.itemCount);
            }
            if(vm.listlevel == 0){ vm.navItem = vm.itemStarting; }else 
            if(vm.listlevel == 1){ vm.itemChild = vm.itemStarting; }
            
        }

        vm.courseDataMain = [
            {'title':'What To Do After 10th', 'desc':'Commerce is a field of adventure, Accounting is the major profession in this area, They can try every fields and they are the most highly paid  people ', 'img':'images/home/home1.png','type':'parent',
                'children':[ 
                    {'title':'Study Various Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23},
                    {'title':'Engeneering Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Awesome Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Poly Course','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12},
                    {'title':'Powerful Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Strange Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23}, 
                    {'title':'Helpful Course','duration':3,'cost':5,'type':'endNode'},
                    {'title':'Just pass Course','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {'title':'What To Do After 12th', 'desc':'In our India There are lots of scholarship providers Locally and national wise, many of the eligible students donot know the very fact', 'img':'images/home/home2.png','type':'parent',
                'children':[
                    {'title':'Powerful Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23},
                    {'title':'Engeneering Course','duration':5,'cost':2,'type':'endNode'},  
                    {'title':'Poly Course','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12},
                    {'title':'Helpful Course','duration':3,'cost':5,'type':'endNode'},
                    {'title':'Just pass Course','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {'title':'Commerce', 'desc':'Dear CA CMA CS and other commerce Students we provide free video full series all topics all chapters are covered for CA CMA and CS', 'img':'images/home/home3.png','type':'parent',
                'children':[
                    {'title':'Strange Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23}, 
                    {'title':'Poly Course','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12},
                    {'title':'Powerful Course','duration':5,'cost':2,'type':'endNode'}, 
                ]
            },
            {'title':'Scholarship', 'desc':'Bachelor degree professional degree a diploma, Certification programs are the various options but one can take parallel courses too', 'img':'images/home/home4.png','type':'parent',
                'children':[
                    {'title':'Awesome Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Poly Course','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12},
                    {'title':'Helpful Course','duration':3,'cost':5,'type':'endNode'},  
                    {'title':'Powerful Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23},
                    {'title':'Engeneering Course','duration':5,'cost':2,'type':'endNode'},
                ]
            },
            {'title':'I Lost My Yead', 'desc':'Many students find it really hard to study But later they regret what they have done in their future know how to make studies interesting ', 'img':'images/home/home5.png','type':'parent',
                'children':[ 
                    {'title':'Powerful Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23},
                    {'title':'Engeneering Course','duration':5,'cost':2,'type':'endNode'}, 
                    {'title':'Helpful Course','duration':3,'cost':5,'type':'endNode'}, 
                    {'title':'Strange Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23},
                ]
            }
        ];


        vm.courseData_1 = [
            {'title':'Study Various Course', 'desc':'Dear CA CMA CS and other commerce Students we provide free video full series all topics all chapters are covered for CA CMA and CS', 'img':'images/home/home3.png','type':'parent',
                'children':[
                    {'title':'Strange Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23}, 
                    {'title':'Poly Course','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12},
                    {'title':'Powerful Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23},
                    {'title':'Engeneering Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Awesome Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Helpful Course','duration':3,'cost':5,'type':'endNode'}, 
                ]
            }, 
            {'title':'Poly Course', 'desc':'In our India There are lots of scholarship providers Locally and national wise, many of the eligible students donot know the very fact', 'img':'images/home/home2.png','type':'parent',
                'children':[
                    {'title':'Powerful Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23},
                    {'title':'Engeneering Course','duration':5,'cost':2,'type':'endNode'},  
                    {'title':'Poly Course','duration':3,'cost':5,'type':'parent','imgLink':'images/home/home3.png','childCount':12},
                    {'title':'Helpful Course','duration':3,'cost':5,'type':'endNode'},
                    {'title':'Just pass Course','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {'title':'Strange Course', 'desc':'Many students find it really hard to study But later they regret what they have done in their future know how to make studies interesting ', 'img':'images/home/home5.png','type':'parent',
                'children':[ 
                    {'title':'Powerful Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home2.png','childCount':23},
                    {'title':'Engeneering Course','duration':5,'cost':2,'type':'endNode'}, 
                    {'title':'Helpful Course','duration':3,'cost':5,'type':'endNode'}, 
                    {'title':'Strange Course','duration':2,'cost':3,'type':'parent','imgLink':'images/home/home5.png','childCount':23},
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
        
    });
