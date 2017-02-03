(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBayList = this;
  toBayList.items = ShoppingListCheckOffService.getItemsBay();
  toBayList.empty = ShoppingListCheckOffService.checkEmptyToBayList;
  toBayList.removeItemBay = function (itemIndex) {
    ShoppingListCheckOffService.removeItemBay(itemIndex);    
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getItemsBought();
  boughtList.empty = ShoppingListCheckOffService.checkEmptyBoughtList;
}

function ShoppingListCheckOffService() {
  var service = this;

  var initToBayList = [
  {
    name: "Milk",
    quantity: "3"
  },
  {
    name: "Donuts",
    quantity: "40"
  },
  {
    name: "Cookies",
    quantity: "55"
  },
  {
    name: "Chocolate",
    quantity: "7"
  },
  {
    name: "IceCream",
    quantity: "3"
  }
  ];

  service.getItemsBay = function () {
    return initToBayList;
  };

  var boughtList = [];

  service.getItemsBought = function () {
    return boughtList;
  };

  service.checkEmptyBoughtList = function () {
    return boughtList.length == 0 ? true : false;
  };

  service.checkEmptyToBayList = function () {
    return initToBayList.length == 0 ? true : false;
  };

  service.removeItemBay = function (itemIndex) {
    boughtList.push(initToBayList[itemIndex]);
    initToBayList.splice(itemIndex, 1);
  };
}

})();
