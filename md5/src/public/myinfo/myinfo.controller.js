(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyInfo', 'ApiPath'];
  function MyInfoController(MyInfo, ApiPath){
    var MyInfoCtrl = this;
    MyInfoCtrl.show = true;
    MyInfoCtrl.MyInfo = MyInfo;
    MyInfoCtrl.ApiPath = ApiPath;

    if(MyInfoCtrl.firstname !== undefined){
      MyInfoCtrl.show = false;
    }

  }

})();