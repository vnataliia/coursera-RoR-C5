(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService','MenuService'];
  function SignUpController(UserService, MenuService){
    var $signUpCtrl = this;
    $signUpCtrl.user = {};
    $signUpCtrl.itemFound = true;
  
    $signUpCtrl.submit = function () {
      UserService.getFavoriteDish($signUpCtrl.user.favoriteDish)
       .then(function (result) {
          $signUpCtrl.itemFound = true;
          $signUpCtrl.user.favoriteDish = result;
          UserService.user = $signUpCtrl.user;
          $signUpCtrl.completed = true;
        })
        .catch(function (result) {
          $signUpCtrl.itemFound = false;
        });
    }
  }
})();
