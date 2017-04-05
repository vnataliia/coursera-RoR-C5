(function() {
    'use strict';

    angular.module('data').service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['$http'];
	
    function MenuDataService($http) {
		var service = this;
		var url = 'https://davids-restaurant.herokuapp.com/';

		service.getAllCategories = function(){
			return $http({url: (url + 'categories.json')})
				.then(function (result) { return result.data; });
		};
	    
		service.getItemsForCategory = function(categoryShortName) {
			return $http({url: (url + 'menu_items.json?category=' + categoryShortName)})
				.then(function (result) { return result.data; });
		};
	}

})();
