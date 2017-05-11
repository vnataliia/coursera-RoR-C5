(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyInfoController', 'ApiPath'];
  function MyInfoController(MyInfoController, ApiPath){
    var myInfoCtrl = this;
    myInfoCtrl.show = true;
    myInfoCtrl.MyInfoController = MyInfoController;
    myInfoCtrl.ApiPath = ApiPath;

    if(myInfoCtrl.firstname !== undefined){
      myInfoCtrl.show = false;
    }

  }

})();
