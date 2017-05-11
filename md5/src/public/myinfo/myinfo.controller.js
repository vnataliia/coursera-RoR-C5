(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['info', 'ApiPath'];
  function MyInfoController(info, ApiPath){
    var $myInfoCtrl = this;
    $myInfoCtrl.show = true;
    $myInfoCtrl.info = info;
    $myInfoCtrl.ApiPath = ApiPath;

    if($myInfoCtrl.firstname !== undefined){
      $myInfoCtrl.show = false;
    }

  }

})();
