(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService){
    var $signUpCtrl = this;
    $signUpCtrl.user = {};
    $signUpCtrl.itemFound = true;
  
    $signUpCtrl.submit = function () {
      MenuService.getFavoriteDish($signUpCtrl.user.favoriteDish)
       .then(function (result) {
          $signUpCtrl.itemFound = true;
          $signUpCtrl.user.favoriteDish = result;
          MenuService.user = $signUpCtrl.user;
          $signUpCtrl.completed = true;
        })
        .catch(function (result) {
          $signUpCtrl.itemFound = false;
        });
    }
  }
})();
