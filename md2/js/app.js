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
  toBayList.removeItemBay = function (itemIndex) {
    ShoppingListCheckOffService.removeItemBay(itemIndex);    
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getItemsBought();
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

  service.removeItemBay = function (itemIndex) {
    boughtList.push(initToBayList[itemIndex]);
    initToBayList.splice(itemIndex, 1);
  };
}

})();
