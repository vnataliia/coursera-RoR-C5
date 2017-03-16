(function() {
    'use strict';

    MenuDataService.$inject = ['$http'];
    angular.module('data').service('MenuDataService', MenuDataService);
	
    function MenuDataService($http) {
		var service = this;
		var url = 'https://davids-restaurant.herokuapp.com/';

		service.getAllCategories = function(){
			return $http.get(url + 'categories.json');
		};

		service.getItemsForCategory(categoryShortName) = function(){
			return $http.get(url + 'menu_items.json?category=' + categoryShortName);
		}
	}

})();