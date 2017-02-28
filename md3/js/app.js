(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective () {
  var ddo = {
    restrict: 'E',
    scope: {
      searchTerm: '@',
      foundItems: '<',
      onRemove: '&',
      empty: '&' 
    },
    templateUrl: 'foundItems.html',
    controller: FoundItemsDirectiveController,
    controllerAs: 'items',
    bindToController: true
  };
  return ddo;
};

function FoundItemsDirectiveController () {};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = '';
  list.firstTime = true;
  list.foundItems = [];
  list.searchMenu = function (searchTerm) {
  	  list.firstTime = false;
  	  if (searchTerm == '') {
  	  	list.foundItems = [];
  	  	return;
  	  }
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm)
      promise.then(function (response) {
         list.foundItems = Array.from(response);
         console.log(list.foundItems);
      }).catch(function (error) {
         console.log(error)
      });
  };

  list.removeItem = function (index) {
      list.foundItems.splice(index, 1);
  };

  list.empty = function () {
      return !list.firstTime && (list.foundItems.length === 0);
  };
}

MenuSearchService.$inject = ['$http', '$filter'];
function MenuSearchService($http, $filter) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
     return $http({
              method: "GET",
              url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
           }).then(function (response) {
		        var lowerTerm = $filter('lowercase')(searchTerm);
				var responseItems = response.data.menu_items;
        		var foundItems = [];
		        for (var i = 0; i < responseItems.length; i++) {
        		    var itemName = $filter('lowercase')(responseItems[i].name)
            		var itemDescription = $filter('lowercase')(responseItems[i].description)

		            if (itemName.includes(lowerTerm) || itemDescription.includes(lowerTerm)) {
        		       foundItems.push(responseItems[i])
            		}
        		}
        		return foundItems;
     		});
  };

};


})();
