(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService'];
  function MyInfoController(UserService){
    var $myInfoCtrl = this;
    $myInfoCtrl.show = true;
    $myInfoCtrl.signedUp = UserService.signedUp; 
    $myInfoCtrl.info = UserService.info;
    $myInfoCtrl.fav = UserService.fav;

    if($myInfoCtrl.info.firstname !== undefined){
      $myInfoCtrl.show = false;
    }

  }

})();
