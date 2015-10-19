'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:ExamsCtrl
 * @description
 * # ExamsCtrl
 * Controller of the todoappApp
 */
angular.module('loWbApp')
  .controller('ExamsCtrl', function ($scope,$interval,nestedSet, $stateParams,$rootScope, $state) {
        var vm = this;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams; 

        this.selected = []; // tree view heirarchy selected elements

        vm.courseList = nestedSet.getNestedSet();

        nestedSet.onFetch(function() {
            vm.courseList = nestedSet.getNestedSet();
        })

        this.selectItem = function(id) {
            var depth = nestedSet.find(id).get().depth;
            while(vm.selected.length > depth) { // deselect necessary items
                vm.selected.pop();
            }
            vm.selected.push(id); // select clicked item
        }

        this.isSelected = function(id) {
            return vm.selected.indexOf(id) > -1;
        }

        vm.courseData = [
            {'title':'Exams To Do After 10th', 'desc':'Exams is a field of adventure, Accounting is the major profession in this area, They can try every fields and they are the most highly paid  people ', 'img':'images/home/home5.png','type':'parent',
                'children':[
                    {'title':'Bleeding the Color of nature','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Atomic bomb research','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Elephant health center','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Richest person is not richer than me','duration':2,'cost':3,'type':'endNode'}, 
                    {'title':'Atomic bomb research','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Elephant health center','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Richest person is not richer than me','duration':2,'cost':3,'type':'endNode'}, 
                    {'title':'Atomic bomb research','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Elephant health center','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Richest person is not richer than me','duration':2,'cost':3,'type':'endNode'}, 
                ]
            },
            {'title':'Cool Things To Do After Exam', 'desc':'In our India There are lots of scholarship providers Locally and national wise, many of the eligible students donot know the very fact', 'img':'images/home/home3.png','type':'parent',
                'children':[
                    {'title':'Atomic bomb research','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Elephant health center','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Richest person is not richer than me','duration':2,'cost':3,'type':'endNode'}, 
                    {'title':'Atomic bomb research','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Elephant health center','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Richest person is not richer than me','duration':2,'cost':3,'type':'endNode'}, 
                    {'title':'Atomic bomb research','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Elephant health center','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Richest person is not richer than me','duration':2,'cost':3,'type':'endNode'}, 
                ]
            },
            {'title':'Commerce', 'desc':'Dear CA CMA CS and other commerce Students we provide free video full series all topics all chapters are covered for CA CMA and CS', 'img':'images/home/home1.png','type':'parent',
                'children':[
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {'title':'Scholarship', 'desc':'Bachelor degree professional degree a diploma, Certification programs are the various options but one can take parallel courses too', 'img':'images/home/home4.png','type':'parent',
                'children':[
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {'title':'I Lost My Yead', 'desc':'Many students find it really hard to study But later they regret what they have done in their future know how to make studies interesting ', 'img':'images/home/home5.png','type':'parent',
                'children':[
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'}
                ]
            }
        ];

        $scope.number = 5;
        vm.getNumber = function(num) {
            return new Array(num);   
        }

        $interval(function(){ vm.pageAct = true; },200);
        
  });
