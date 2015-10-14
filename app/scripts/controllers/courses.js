'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the todoappApp
 */
angular.module('loWbApp')
  .controller('CoursesCtrl', function ($scope,$interval,nestedSet) {
        var vm = this;

        this.selected = [];

        vm.courseList = nestedSet.getNestedSet();

        nestedSet.onFetch(function() {
            vm.courseList = nestedSet.getNestedSet();
        })

        this.selectItem = function(id) {
            console.log('selecting')
            var path = nestedSet.find(id).getPath().map(function(node) {
                return Number(node);
            });
            var depth = nestedSet.find(id).get().depth;
            console.log('depth ' + depth)
            while(vm.selected.length > depth) {
                vm.selected.pop();
                console.log('popped ' + vm.selected.length)
            }
            vm.selected.push(id);
        }

        this.isSelected = function(id) {
            return vm.selected.indexOf(id) > -1;
            // if(vm.selected === id) return true;
            // return nestedSet.find(vm.selected).getPath().indexOf(id) > -1;
        }

        vm.courseData = [
            {'title':'What To Do After Completing 10th', 'desc':'Commerce is a field of adventure, Accounting is the major profession in this area, They can try every fields and they are the most highly paid  people ', 'img':'images/home/home1.png','type':'parent',
                'children':[
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':3,'cost':5,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':3,'cost':5,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':5,'cost':2,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':3,'cost':5,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {'title':'What To Do After 12th', 'desc':'In our India There are lots of scholarship providers Locally and national wise, many of the eligible students donot know the very fact', 'img':'images/home/home2.png','type':'parent',
                'children':[
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':2,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':3,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':1,'cost':3,'type':'endNode'},
                    {'title':'Study Various Deploma Course','duration':2,'cost':3,'type':'endNode'}
                ]
            },
            {'title':'Commerce', 'desc':'Dear CA CMA CS and other commerce Students we provide free video full series all topics all chapters are covered for CA CMA and CS', 'img':'images/home/home3.png','type':'parent',
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
