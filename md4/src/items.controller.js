(function functionName() {
  'use strict';

  angular.module('MenuApp').controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itemsCtrl = this;
    console.log('items=', items);

    
    itemsCtrl.items = items.menu_items;
    console.log('itemsCtrl.items = ', itemsCtrl.items);
  };
})();
