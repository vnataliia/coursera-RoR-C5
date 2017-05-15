(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService'];
  function MyInfoController(UserService){
    var $myInfoCtrl = this;
    $myInfoCtrl.signed = UserService.signed; 
    $myInfoCtrl.user = UserService.user;
    $myInfoCtrl.fav = UserService.userFav;
  }

})();
