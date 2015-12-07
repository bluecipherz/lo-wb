'use strict';

/**
 * @ngdoc service
 * @name todoappApp.powerProgress
 * @description
 * # powerProgress
 * Service in the todoappApp.
 */
angular.module('loWbApp')
  .factory('globeBox', function (responsive) { 

      var scrRes = responsive.getResolution();
      var r_crrt = scrRes.r_crrt;

      var r_MobileS = scrRes.r_MobileS  ;
      var r_MobileM = scrRes.r_MobileM  ;
      var r_Mobile  = scrRes.r_Mobile   ;
      var r_TabletP_semi = scrRes.r_TabletP_semi  ;
      var r_TabletP = scrRes.r_TabletP  ;
      var r_TabletL = scrRes.r_TabletL  ;
      var r_Desktop = scrRes.r_Desktop  ;
      var r_ExtraLarge = scrRes.r_ExtraLarge ;


      var _boxClick = function(col,parent){ 
          if($(window).innerWidth() + r_crrt < r_Mobile){
              parent.currColId = col.id;
              parent.currColHeading = col.heading;
              parent.currColPlace = col.place;
              parent.currColFees = col.fees;
              parent.currColSeats = col.seats;
              parent.currColLink = col.imgLink;
              parent.popShow = true; 
          }
      }
 

      // box slider function

      var CLItemCountTemp = parent.CLItemCount;

      var _paginate = function(side,parent){  

          parent.CLItemWidth = $('.ggsc-boxOuter table tr').width() / parent.cData.colleges.length;  
          if(side==0){  
              CLItemCountTemp = parent.CLItemCount;
              for(CLItemCountTemp;CLItemCountTemp > 0 ;CLItemCountTemp--){ 
                  if( parent.collListPos - CLItemCountTemp >= 0){  
                      parent.collListPos -= CLItemCountTemp;   
                      parent.CLItemMargin =  parent.CLItemWidth * parent.collListPos * -1;  
                      break;
                  } 
              } 
          }else{  
              CLItemCountTemp = parent.CLItemCount;
              for(CLItemCountTemp;CLItemCountTemp > 0 ;CLItemCountTemp--){ 
                  if( parent.collListPos + parent.CLItemCount + CLItemCountTemp <= parent.cData.colleges.length){  
                      parent.collListPos += CLItemCountTemp;   
                      parent.CLItemMargin =  parent.CLItemWidth * parent.collListPos * -1;  
                      break;
                  } 
              } 
          }
      } 
      return {
          boxClick: function (col,parent) {
              _boxClick(col,parent); 
              return this;
          }, 
          paginate: function (side,parent) {
              _paginate(side,parent); 
              return this;
          }
      }
  });