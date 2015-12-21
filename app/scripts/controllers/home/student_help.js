'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:StudentHelpCtrl
 * @description
 * # StudentHelpCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('StudentHelpCtrl', function ($rootScope,$state,$scope,landingLoader) {
    landingLoader.firstLoad();
        var vm = this;
        vm.stateName = $state;
        $rootScope.showHeader = true;
        $(window).scrollTop(0);

        //index elements

        vm.arrayLimit = 12; 
        vm.incremLimit = 12; 

        //show elements


        if($state.current.name == 'studentHelp'){
        	console.log('its index');
        }else{
        	console.log('its Show'); 
        	var id = $state.params.id; 
        }
        $scope.buttonClick = function(id){

        }
        vm.Data = { 
            details:[  
                {boxType:'buttonBox',boxWidth:2,desc2:'How Can I Encourage My Child to  Love Reading?',bname:'READ MORE',ngClick:1 },
                {boxType:'buttonBox',boxWidth:2,desc2:'12 Tips on How to Improve English Communication Skills',bname:'READ MORE',ngClick:2 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Woah or Whoa: What is your Choice?',bname:'READ MORE',ngClick:3 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Do you Really Know Tenter hooks?',bname:'READ MORE',ngClick:4 },
                {boxType:'buttonBox',boxWidth:2,desc2:'How Can I Encourage My Child to  Love Reading?',bname:'READ MORE',ngClick:1 },
                {boxType:'buttonBox',boxWidth:2,desc2:'12 Tips on How to Improve English Communication Skills',bname:'READ MORE',ngClick:2 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Woah or Whoa: What is your Choice?',bname:'READ MORE',ngClick:3 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Do you Really Know Tenter hooks?',bname:'READ MORE',ngClick:4 },
                {boxType:'buttonBox',boxWidth:2,desc2:'How Can I Encourage My Child to  Love Reading?',bname:'READ MORE',ngClick:1 },
                {boxType:'buttonBox',boxWidth:2,desc2:'12 Tips on How to Improve English Communication Skills',bname:'READ MORE',ngClick:2 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Woah or Whoa: What is your Choice?',bname:'READ MORE',ngClick:3 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Do you Really Know Tenter hooks?',bname:'READ MORE',ngClick:4 },
                 
                {boxType:'buttonBox',boxWidth:2,desc2:'How Can I Encourage My Child to  Love Reading?',bname:'READ MORE',ngClick:1 },
                {boxType:'buttonBox',boxWidth:2,desc2:'12 Tips on How to Improve English Communication Skills',bname:'READ MORE',ngClick:2 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Woah or Whoa: What is your Choice?',bname:'READ MORE',ngClick:3 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Do you Really Know Tenter hooks?',bname:'READ MORE',ngClick:4 },
                {boxType:'buttonBox',boxWidth:2,desc2:'How Can I Encourage My Child to  Love Reading?',bname:'READ MORE',ngClick:1 },
                {boxType:'buttonBox',boxWidth:2,desc2:'12 Tips on How to Improve English Communication Skills',bname:'READ MORE',ngClick:2 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Woah or Whoa: What is your Choice?',bname:'READ MORE',ngClick:3 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Do you Really Know Tenter hooks?',bname:'READ MORE',ngClick:4 },
                {boxType:'buttonBox',boxWidth:2,desc2:'How Can I Encourage My Child to  Love Reading?',bname:'READ MORE',ngClick:1 },
                {boxType:'buttonBox',boxWidth:2,desc2:'12 Tips on How to Improve English Communication Skills',bname:'READ MORE',ngClick:2 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Woah or Whoa: What is your Choice?',bname:'READ MORE',ngClick:3 },
                {boxType:'buttonBox',boxWidth:2,desc2:'Do you Really Know Tenter hooks?',bname:'READ MORE',ngClick:4 },
                
            ],
        }; 
  });
