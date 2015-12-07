'use strict';

/**
 * @ngdoc service
 * @name todoappApp.powerProgress
 * @description
 * # powerProgress
 * Service in the todoappApp.
 */
angular.module('loWbApp')
  .factory('responsive', function () {
  		var vm = this;
        vm.r_crrt = 17;

        vm.r_MobileS = 241  ;
        vm.r_MobileM = 321  ;
        vm.r_Mobile  = 481  ;
        vm.r_TabletP_semi = 580  ;
        vm.r_TabletP = 769  ;
        vm.r_TabletL = 1061 ;
        vm.r_Desktop = 1281 ;
        vm.r_ExtraLarge = 1282 ;

        var makeRes = false;

        var scrRes = { 
          r_crrt : vm.r_crrt,
          r_MobileS : vm.r_MobileS,
          r_MobileM : vm.r_MobileM,
          r_Mobile  : vm.r_Mobile,
          r_TabletP_semi : vm.r_TabletP_semi,
          r_TabletP : vm.r_TabletP,
          r_TabletL : vm.r_TabletL,
          r_Desktop : vm.r_Desktop,
          r_ExtraLarge : vm.r_ExtraLarge,
        };

        var callbacks = [];
 
        $(window).resize(function(){ if(makeRes)responsiveJs(); });

        var _makeResponsive = function(){ 
          responsiveJs(); 
          makeRes = true;
        }

        function responsiveJs(){

            if($(window).innerWidth() + vm.r_crrt < vm.r_MobileS ){ 
                callbacks.mobile_s();
            }else
            if($(window).innerWidth() + vm.r_crrt < vm.r_MobileM ){
                callbacks.mobile_m();
            }else
            if($(window).innerWidth() + vm.r_crrt < vm.r_Mobile ){ 
                callbacks.mobile();
            }else
            if($(window).innerWidth() + vm.r_crrt < vm.r_TabletP ){  
                callbacks.tablet_p();
                if($(window).innerWidth() + vm.r_crrt < vm.r_TabletP_semi){ 
                    callbacks.tablet_p_semi(); 
                }
            }else
            if($(window).innerWidth() + vm.r_crrt < vm.r_TabletL ){ 
                callbacks.tablet_l();
            }else
            if($(window).innerWidth() + vm.r_crrt < vm.r_Desktop ){ 
                callbacks.desktop();
            }else
            if($(window).innerWidth() + vm.r_crrt > vm.r_ExtraLarge ){ 
                callbacks.extraLarge();
            }

        }

    return {
      makeResponsive: function (callback) {
        callbacks = callback;
        _makeResponsive(); 
        return this;
      }, 
      getResolution: function () { 
        return scrRes;
      },
    }

  });