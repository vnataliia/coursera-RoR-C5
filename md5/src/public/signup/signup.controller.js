(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService','MenuService'];
  function SignUpController(UserService, MenuService){
    var $signUpCtrl = this;
    $signUpCtrl.signed = UserService.signed;
    $signUpCtrl.itemNotFound = true;
    $signUpCtrl.user = {};
  
    $signUpCtrl.submit = function () {
      MenuService.getMenuItem($signUpCtrl.user.fav)
       .then(function (result) {
          $signUpCtrl.itemNotFound = false;
          UserService.signed = true;
          $signUpCtrl.signed = UserService.signed;
          UserService.user = $signUpCtrl.user;
          UserService.userFav = result;
        })
        .catch(function (result) {
          $signUpCtrl.itemNotFound = true;
        });
    }

  }
})();
