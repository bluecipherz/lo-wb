'use strict';

/**
 * @ngdoc function
 * @name loWbApp.controller:StudentHelpCtrl
 * @description
 * # StudentHelpCtrl
 * Controller of the loWbApp
 */
angular.module('loWbApp')
  .controller('StudentHelpCtrl', function ($rootScope,$state,$scope,landingLoader,responsive) {
    landingLoader.firstLoad();
        var vm = this;
        vm.state = $state;
        $rootScope.showHeader = true;
        $(window).scrollTop(0);

        $(function() {
            $(".bbText").wysibb();
        });

        vm.inp_postHead = "What's new with you?";
        vm.inp_postTags = "Seperate your tags by inserting Coma"; 

        placeholder();
        $('.wysibb').click(function(){
            placeholder(); 
        }); 
        $('#wbbmodal').click(function(){
            placeholder();
        });
        $('.wysibb-body').keyup(function(){
           placeholder();
        });
        $('.wysibb-body').keydown(function(event){
            if(event.keyCode != 8 && event.keyCode != 46){
                $(this).removeClass('wysibb-body-placeholder');
            }
        });
    
        function placeholder(){ 
            var el = $('.wysibb-body');  
            if(el.text() == '' || el.text() == undefined){
                el.addClass('wysibb-body-placeholder');
            }else{
                el.removeClass('wysibb-body-placeholder');
            }
        }

        vm.userData = {
            name:'Muhammed Basith',
            number:'+91 9567 435363',
            like:213,
            comments:12,
            notification:[
                {title:'Damn notifaction',description:'Ansab Mk gives you a great job', time:9248924},
                {title:'Damn notifaction',description:'Ansab Mk gives you a great job', time:9248924},
                {title:'Damn notifaction',description:'Ansab Mk gives you a great job', time:9248924},
                {title:'Damn notifaction',description:'Ansab Mk gives you a great job', time:9248924},
                {title:'Damn notifaction',description:'Ansab Mk gives you a great job', time:9248924},
            ],
        }
        if(vm.state.current.name == 'studentHelp'){
            vm.pageData = {
                top_articles:[
                    {id:1,title:'THIS IS A DAMN ARTICLE',description:'Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo mat then, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em.'},
                    {id:2,title:'THIS IS A DAMN HEADING',description:'Yo man, This is a kinda descriptions, Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em.'},
                    {id:3,title:'THIS IS A DAMN ARTICLE',description:'Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. This is a kinda descriptions, There are so many descriptions. This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em.'},
                    {id:4,title:'THIS IS A DAMN ARTICLE',description:'Yo man, This is a kinda descriptions, Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em.'},
                    {id:5,title:'THIS IS A DAMN ARTICLE',description:'Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em.'},
                    {id:6,title:'THIS IS A DAMN ARTICLE',description:'Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. This is a kinda descriptions, There are so many descriptions. This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em.'},
                    {id:7,title:'THIS IS A DAMN ARTICLE',description:'Yo man, This is a kinda descriptions, Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em. Yo man, This is a kinda descriptions, There are so many descriptions. and this is one of em.'},
                ],
                articles:[
                    {id:11,type:'news',date:1366242149,title:'This Ancient Roman sword found on Oak island Completely rewrites the history as we know it',description:'We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well,'},
                    {id:21,type:'classroom',date:1366242149,title:'This Ancient Roman sword found on Oak island Completely rewrites the history as we know it',description:'We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well,'},
                    {id:31,type:'relationship',date:1366242149,title:'This Ancient Roman sword found on Oak island Completely rewrites the history as we know it',description:'We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well, We tought in our school that christopher columbus discovered America, Of course the idea the continent that already inhabited by millions other human is well,'},
                ]
            } 
        }else{
            vm.pageData = {
                type:'Relationships',
                title:'The Best Way To Manage Your Anger On Your Zodiac Sign',
                img:'damnLink.jpg',
                author:'Linkonedu',
                date:1366242149,
                description:[
                    {title:'This is a kinda Heading',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'Oh Man!',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'Good News BaD News',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'Perfect Stranger',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'Zero Gravity',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'This is a kinda Heading',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'Perfect Stranger',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'Good News BaD News',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'Oh Man!',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                    {title:'Zero Gravity',description:'Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died Oh my gosh, You know what? when look around i can see everthing. and the strange stuff is that when i look at my foots, its really touching on the floor and i died'},
                ],
                related:[
                    {id:1,title:'1 This is how we find out the emotional abuse before it actually happens',img:'Damn Link',date:1366242149},
                    {id:2,title:'2 This is how we find out the happens',img:'Damn Link',date:1366242149},
                    {id:3,title:'3 This is how we find out the emotional abuse before it actually happens',img:'Damn Link',date:1366242149},
                    {id:4,title:'4 This is how we find out the emotional abuse before it actually happens',img:'Damn Link',date:1366242149},
                    {id:5,title:'5 This is how we find out the emotional abuse before it actually happens',img:'Damn Link',date:1366242149},
                ],
                popular:[
                    {title:'Hello this is a title of the year',img:'imgLink'},
                    {title:'Big! really Big thing that can title of the year',img:'imgLink'},
                    {title:'Freedom this is a title of the year',img:'imgLink'},
                    {title:'Big! really Big thing that can title of the year',img:'imgLink'},
                    {title:'Freedom this is a title of the year',img:'imgLink'},
                ],
                featured:[
                    {title:'Hello this is a title of the year',img:'imgLink'},
                    {title:'Big! really Big thing that can title of the year',img:'imgLink'},
                    {title:'Freedom this is a title of the year',img:'imgLink'},
                    {title:'Big! really Big thing that can title of the year',img:'imgLink'},
                    {title:'Freedom this is a title of the year',img:'imgLink'},
                ],
                recommended:[
                    {title:'Hello this is a title of the year',img:'imgLink',date:1366242149},
                    {title:'Big! really Big thing that can title of the year',img:'imgLink',date:1366242149},
                    {title:'Freedom this is a title of the year',img:'imgLink',date:1366242149},
                    {title:'Big! really Big thing that can title of the year',img:'imgLink',date:1366242149},
                    {title:'Freedom this is a title of the year',img:'imgLink',date:1366242149},
                ],
            }
            vm.relArtDummy = [];
            var relArtInit = 0;
            var relArtCount = 2;
            for(var i=0;i < vm.pageData.related.length; i++){
                if(i%2 == 0){
                    var k = {l:relArtInit,r:relArtCount}
                    vm.relArtDummy.push(k);
                    relArtInit += 2;
                    relArtCount += 2;
                }
            } 
        }


        /* RESPONSIVE JS */ 

        responsive.makeResponsive({
            mobile_s:function(){
                vm.inp_postHead = "What's with you?";
                vm.inp_postTags = "Tags, Seperate it by  Coma"; 
            },
            mobile_m:function(){
                vm.inp_postHead = "What's with you?";
                vm.inp_postTags = "Tags, Seperate it by  Coma"; 
            },
            mobile:function(){ 
                vm.inp_postHead = "What's with you?";
                vm.inp_postTags = "Tags, Seperate it by  Coma"; 
            },
            tablet_p:function(){  

            },
            tablet_p_semi:function(){ 

            },
            tablet_l:function(){ 

            },
            desktop:function(){ 

            },
            extraLarge:function(){ 

            },
        }); 
  });
