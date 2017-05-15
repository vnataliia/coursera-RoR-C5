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
      MenuService.getMenuItem($signUpCtrl.user.favDish)
       .then(function (result) {
          $signUpCtrl.itemFound = true;

          UserService.signed = true;
          $signUpCtrl.signed = UserService.signed;
          UserService.user = $signUpCtrl.user;
          UserService.registeredUserFavDish = data;
        
        
        
          $signUpCtrl.user.favDish = result;
          UserService.user = $signUpCtrl.user;
          $signUpCtrl.completed = true;
        })
        .catch(function (result) {
          $signUpCtrl.itemFound = false;
        });
    }
       
  }
})();
