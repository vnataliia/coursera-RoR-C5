(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyInfoService'];
  function MyInfoController(MyInfoService){
    var $myInfoCtrl = this;
    $myInfoCtrl.show = true;

    console.log("00 show = ", $myInfoCtrl);

    $myInfoCtrl.signedUp = MyInfoService.signedUp; 
    $myInfoCtrl.info = MyInfoService.info;
    $myInfoCtrl.fav = MyInfoService.fav;

    if($myInfoCtrl.info.firstname !== undefined){
      $myInfoCtrl.show = false;
    }
    
    console.log("99 show = ", $myInfoCtrl);

  }

})();
