(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService'];
  function MyInfoController(UserService){
    var $myInfoCtrl = this;
    $myInfoCtrl.show = true;

    console.log("00 show = ", $myInfoCtrl);

    $myInfoCtrl.signed = UserService.signed; 
    $myInfoCtrl.user = UserService.user;
    $myInfoCtrl.fav = UserService.fav;

    if($myInfoCtrl.user.firstname !== undefined){
      $myInfoCtrl.show = false;
    }
    
    console.log("99 show = ", $myInfoCtrl);

  }

})();
