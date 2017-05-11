(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyInfoController', 'ApiPath'];
  function MyInfoController(MyInfoController, ApiPath){
    var MyInfoCtrl = this;
    MyInfoCtrl.show = true;
    MyInfoCtrl.MyInfoController = MyInfo;
    MyInfoCtrl.ApiPath = ApiPath;

    if(MyInfoCtrl.firstname !== undefined){
      MyInfoCtrl.show = false;
    }

  }

})();
