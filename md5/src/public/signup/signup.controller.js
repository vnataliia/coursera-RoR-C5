(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService','MenuService'];
  function SignUpController(SignUpService, MenuService){
    var $signUpCtrl = this;
    $signUpCtrl.user = {};
    $signUpCtrl.itemFound = true;
  
    $signUpCtrl.submit = function () {
      SignUpService.getFavoriteDish($signUpCtrl.user.favoriteDish)
       .then(function (result) {
          $signUpCtrl.itemFound = true;
          $signUpCtrl.user.favoriteDish = result;
          SignUpService.user = $signUpCtrl.user;
          $signUpCtrl.completed = true;
        })
        .catch(function (result) {
          $signUpCtrl.itemFound = false;
        });
    }
  }
})();
