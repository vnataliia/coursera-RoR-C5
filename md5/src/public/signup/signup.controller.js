(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService','MenuService'];
  function SignUpController(UserService, MenuService){
    var $signUpCtrl = this;
    $signUpCtrl.signed = UserService.signed;
    $signUpCtrl.itemFound = false;
    $signUpCtrl.user = {};
  
    $signUpCtrl.submit = function () {
      MenuService.getMenuItem($signUpCtrl.user.fav)
       .then(function (result) {
          $signUpCtrl.itemFound = true;
          UserService.signed = true;
          $signUpCtrl.signed = UserService.signed;
          UserService.user = $signUpCtrl.user;
          UserService.userFav = result;
        })
        .catch(function (result) {
          $signUpCtrl.itemFound = false;
        });
    }

  }
})();
