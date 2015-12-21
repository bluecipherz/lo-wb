'use strict';

/**
 * @ngdoc overview
 * @name todoappApp
 * @description
 * # todoappApp
 *
 * Main module of the application.
 */
angular
  .module('loWbApp', [
    'ngResource',
    'ui.router',
    'ngAnimate'
  ]) 
  .config(function ($locationProvider,$stateProvider,$urlRouterProvider) { 
      
      $urlRouterProvider.otherwise('/'); 
 
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .state('exams', {
          url: '/exams',
          templateUrl: 'views/courses.html',
          controller: 'ExamsCtrl',
          controllerAs: 'courses'
        })
        .state('courses', {
          url: '/courses',
          templateUrl: 'views/courses.html',
          controller: 'CoursesCtrl',
          controllerAs: 'courses'
        }) 
        .state('college', {
          url: '/college',
          templateUrl: 'views/college.html',
          controller: 'CollegeCtrl',
          controllerAs: 'college'
        }) 




        // ---- HOME ----
        .state('contactUs', {
          url: '/contact_us',
          templateUrl: 'views/home/contact_us.html',
          controller: 'ContactUsCtrl',
          controllerAs: 'contactUs'
        })
        .state('scolarship', {
          url: '/scolarship',
          templateUrl: 'views/courses.html',
          controller: 'ScolarshipCtrl',
          controllerAs: 'courses'
        }) 
        .state('studentHelp', {
          url: '/student_help',
          templateUrl: 'views/home/student_help.html',
          controller: 'StudentHelpCtrl',
          controllerAs: 'studentHelp'
        })
        .state('studentHelpShow', {
          url: '/student_help/:id',
          templateUrl: 'views/home/student_help.html',
          controller: 'StudentHelpCtrl',
          controllerAs: 'studentHelp'
        })

        // ---- COURSES ----
        .state('courseDetails', {
          url: '/course_details/:id',
          templateUrl: 'views/courses/course_details.html',
          controller: 'CourseDetailsCtrl',
          controllerAs: 'cDetails'
        })

        // ---- EXAMS ----
        .state('examDetails', {
          url: '/exam_details/:id',
          templateUrl: 'views/courses/course_details.html',
          controller: 'ExamDetailsCtrl',
          controllerAs: 'cDetails'
        })

        // ---- GENERAL ----
        .state('error', {
          url:'/error', 
          templateUrl: 'views/general/error_page.html',
          controller: 'ErrorCtrl',
          controllerAs: 'error'
        })
        .state('saveAndCompare', {
          url:'/save_and_compare', 
          templateUrl: 'views/general/save_and_compare.html',
          controller: 'SaveAndCompareCtrl',
          controllerAs: 'saveAndCompare'
        })
        .state('searchFound', {
          url: '/search_found',
          templateUrl: 'views/general/search_found.html',
          controller: 'SearchFoundCtrl',
          controllerAs: 'searchFound'
        })

        // ---- FOOTER ----
        .state('aboutUs', {
          url: '/about_us',
          templateUrl: 'views/footer/about_us.html',
          controller: 'AboutUsCtrl',
          controllerAs: 'aboutUs'
        })
        .state('comingSoon', {
          url: '/coming_soon',
          templateUrl: 'views/footer/coming_soon.html',
          controller: 'ComingSoonCtrl',
          controllerAs: 'comingSoon'
        })
        .state('disclaimer', {
          url: '/disclaimer',
          templateUrl: 'views/footer/disclamer.html',
          controller: 'DisclamerCtrl',
          controllerAs: 'disclaimer'
        })
        .state('donate', {
          url: '/donate',
          templateUrl: 'views/footer/donate.html',
          controller: 'DonateCtrl',
          controllerAs: 'donate'
        })
        .state('feedback', {
          url: '/feedback',
          templateUrl: 'views/footer/feedback.html',
          controller: 'FeedbackCtrl',
          controllerAs: 'feedback'
        })
        .state('joinTheTeam', {
          url: '/join_the_team',
          templateUrl: 'views/footer/join_the_team.html',
          controller: 'JoinTheTeamCtrl',
          controllerAs: 'joinTheTeam'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'views/footer/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        })
        .state('sitemap', {
          url: '/sitemap',
          templateUrl: 'views/footer/sitemap.html',
          controller: 'SitemapCtrl',
          controllerAs: 'sitemap'
        })

        // ---- COLLEGE ----  

        .state('collegeList', {
          url: '/college_list',
          templateUrl: 'views/courses/course_details.html',
          controller: 'CollegeListCtrl',
          controllerAs: 'cDetails'
        })
        .state('firstFilter', {
          url: '/first_filter',
          templateUrl: 'views/colleges/first_filter.html',
          controller: 'FirstFilterCtrl',
          controllerAs: 'firstFilter'
        })
        .state('collegeProfile', {
          url: '/college_profile/:id',
          templateUrl: 'views/colleges/college_profile.html',
          controller: 'CollegeProfileCtrl',
          controllerAs: 'collegeProfile'
        })

        // This route is not the real site
        .state('funzone', {
          url: '/funzone',
          templateUrl: 'views/funzone.html',
          controller: 'FunzoneCtrl',
          controllerAs: 'funzone'
        })
        .state('progress', {
          url: '/progress',
          templateUrl: 'views/progress.html',
          controller: 'ProgressCtrl',
          controllerAs: 'progress'
        }) 
        
  })
  .run(function($rootScope, powerProgress,$state) {

     $rootScope.$state = $state; 
    $rootScope.sxZoom = 1;
    //Screen Zoom
    var bodyZoom = true;
    $rootScope.minWidth = 260;
    if(bodyZoom){
      var screenWidth = $(window).width();
      if(screenWidth < $rootScope.minWidth ) { 
        var zoom = ((screenWidth - 19) / 260 ); 
        $('body').css({'zoom':zoom})
        $rootScope.sxZoom = 1 - zoom;
        console.log('its running : '+ $rootScope.sxZoom); 
      }
    }

    findSreenSize();
    $(window).resize(function(){
      findSreenSize(); 
    });
    function findSreenSize(){
      $rootScope.scrX = $(window).innerWidth();
      $rootScope.scrY = $(window).innerHeight();
    }


	  $rootScope.$on('$routeChangeStart', function() {
		  powerProgress.loadProgress();
	  });
    $rootScope.$on('$routeChangeSuccess', function() {
    
    });

  }).directive("scroll", ['$location','$window', function(location,$window){
    return function($scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        var sreenHeight = $(window).height()  ;
        if (location.path() =='/' ) {
          if (this.pageYOffset >=  200 ) {
            $scope.addHeader = true;
          } else {
            $scope.addHeader = false;
            // var op = 1 - ((this.pageYOffset)/sreenHeight );
            // var zoom = 1 - (((this.pageYOffset)/sreenHeight ) / 5);
            // $('.home-top-inner').css({'opacity' : op , '-webkit-transform': 'scale('+zoom+')' ,'-moz-transform': 'scale('+zoom+')'});
          }
        }else{
          $scope.addHeader = true;
        }
        $scope.$apply();
      });
    };
  }]).run(function($rootScope, $location) {
    $rootScope.location = $location;
  });