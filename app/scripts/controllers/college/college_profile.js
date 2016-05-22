'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:CollegeProfileCtrl
 * @description
 * # CollegeProfileCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('CollegeProfileCtrl', function ($rootScope,landingLoader,$state,$location) {
    landingLoader.firstLoad();
    $rootScope.showHeader = true;
    var vm = this;
    vm.state = $state;
    vm.pages = [
    	{name:'About',state:'about'},
    	{name:'Courses',state:'courses'},
    	{name:'Review',state:'review'},
    	// {name:'Gallery',state:'gallery'},
    	{name:'Contact',state:'contact'},
    	{name:'Apply Now',state:'apply_now'},
    ];

    vm.pageData = {
    	collegeName : 'Charlie Internation College',
    	college_dp : '',
    	college_cover : '',
    	photo:[
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    	],
    	video:[
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    		{url:''},
    	]
    }
    vm.pageClick = function(page){
        $location.path('/college_profile/'+vm.state.params.id+'/'+ page);
    }

    vm.rateIt = function(data,act){
    	if(data.fistRate == undefined){
    		if(act == 1){
    			data.ycount++;
    			data.fistRate = 1;
    		}else{
    			data.ncount++;
    			data.fistRate = 2;
    		}
    	}else if( data.fistRate == 1){
			if(act == 2){
				data.ycount--;
				data.ncount++;
				data.fistRate = 2;
			}
		}else{
			if(act == 1){
				data.ycount++;
				data.ncount--;
				data.fistRate = 1;
			}
		}
    }

    function setPage(page){ // this is demo function and it should be replace by http requests
        if(page=='about'){
        	vm.cData = aboutData;
        }else
        if(page=='courses'){
        	vm.cData = coursesData;
        }else
        if(page=='review'){
        	vm.cData = reviewData;
        }else
        if(page=='contact'){
        	vm.cData = contactData;
        }else
        if(page=='apply_now'){
        	vm.cData = applyData;
        }
    }
    vm.re_post = 1;
    var aboutData = {
        type:'parent',
        details:[ 
            {boxType:'box',boxWidth:1,title:'ABOUT',desc:'Engineering is kind of course that can even kill within a second without thinking about your future. Doesnt matter whatever you are, Where ever you go, it Will keep following you.Engineering is kind of course that can even kill within a second without thinking about your future. Doesnt matter whatever you are, Where ever you go, it Will keep following you.Engineering is kind of course that can even kill within a second without thinking about your future. Doesnt matter whatever you are, Where ever you go, it Will keep following you. '},
            {boxType:'box',boxWidth:1,title:'MINIMUM QUALIFICATIONS',desc:' 1 Complete 10+2 with 45% Marks '},
            {boxType:'box',boxWidth:1,title:'MOST POPULAR EXAMS',desc:' All india level examinations'},
            {boxType:'box',boxWidth:1,title:'SCHOLARSHIP AVAILABLE',desc:' All india scholarship, state level scholarship'},
        ],
    };  

    var coursesData = {
        type:'parent',
        details:[ 
            {boxType:'box',boxWidth:1,title:'Animation',fees:174000,lastDate:'10 jun 2015'},
            {boxType:'box',boxWidth:1,title:'BBA',fees:14000,lastDate:'10 jun 2015'},
            {boxType:'box',boxWidth:1,title:'Mechanical Engineering',fees:220000,lastDate:'10 jun 2015'},
            {boxType:'box',boxWidth:1,title:'B Com',fees:64000,lastDate:'10 jun 2015'},
            {boxType:'box',boxWidth:1,title:'BA VFXA',fees:254000,lastDate:'10 jun 2015'},
        ],
    };  
    var reviewData = {
        type:'parent',
        details:[ 
            {boxType:'box',name:'Steven Joe',event:'and 13 Others started following ',time:'12 jun 2015',cont:'Hey there, This is a great college.',ycount:12,ncount:120},
            {boxType:'box',name:'Baby rocky',event:' ',time:'6 feb 2015',cont:'Yo there, This is a great college.',ycount:12,ncount:120} ,
            {boxType:'box',name:'Steven Joe',event:'',time:'12 jun 2015',cont:'Hey there, This is a great college.',ycount:12,ncount:120},
            {boxType:'box',name:'Charlie international college.',event:' ',time:'6 feb 2015',cont:'Yo there, This is a great college.',ycount:12,ncount:120},
        ],
    };  

    var contactData = {
        type:'parent',
        details:[ 
            {boxType:'box',boxWidth:1,title:'Find us',desc:'Near capitol mall, Kannur'},
            {boxType:'box',boxWidth:1,title:'Call us',desc:'Call us any time, +91-8891-956799'},
        ],
    };  
    var applyData = {
        type:'parent',
    };  

    setPage(vm.state.params.page);

    vm.applyData = {
    	date:{
	    	day:[
	    		{day:1},
	    		{day:2},
	    		{day:3},
	    		{day:4},
	    		{day:5},
	    		{day:6},
	    		{day:7},
	    		{day:8},
	    		{day:9},
	    		{day:10},
	    		{day:11},
	    		{day:12},
	    		{day:13},
	    		{day:14},
	    		{day:15},
	    		{day:16},
	    		{day:17},
	    		{day:18},
	    		{day:19},
	    		{day:20},
	    		{day:21},
	    		{day:22},
	    		{day:23},
	    		{day:24},
	    		{day:25},
	    		{day:26},
	    		{day:27},
	    		{day:28},
	    		{day:29},
	    		{day:30},
	    		{day:31},
	    	],
	    	month:[
	    		{month:1},
	    		{month:2},
	    		{month:3},
	    		{month:4},
	    		{month:5},
	    		{month:6},
	    		{month:7},
	    		{month:8},
	    		{month:9},
	    		{month:10},
	    		{month:11},
	    		{month:12},
	    	],
	    	year:[
	    		{year:2016},
	    		{year:2015},
	    		{year:2014},
	    		{year:2013},
	    		{year:2012},
	    		{year:2011},
	    		{year:2010},
	    		{year:2009},
	    		{year:2008},
	    		{year:2007},
	    		{year:2006},
	    		{year:2005},
	    		{year:2004},
	    		{year:2003},
	    		{year:2002},
	    		{year:2001},
	    		{year:2000},
	    		{year:1999},
	    		{year:1998},
	    		{year:1997},
	    		{year:1995},
	    		{year:1994},
	    		{year:1993},
	    		{year:1992},
	    		{year:1991},
	    		{year:1990},
	    	]
	    },
	    state:[
	    	{state:'Kerala'},
	    	{state:'Tamil Nadu'},
	    ],
	    city:[
	    	{city:'Chennei'},
	    	{city:'Banglore'},
	    	{city:'Manglore'},
	    ],
		course:[
	    	{course:'BBA'},
	    	{course:'MA English'},
	    	{course:'MBA'},
	    ]
    }

  });
