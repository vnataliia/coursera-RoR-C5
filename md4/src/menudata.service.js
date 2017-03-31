(function() {
    'use strict';

    angular.module('data').service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['$http'];
	
    function MenuDataService($http) {
	    			console.log('http0');

		var service = this;
		var url = 'https://davids-restaurant.herokuapp.com/';

		service.getAllCategories = function(){
			console.log('http');
			return $http.get(url + 'categories.json');
		};

		service.getItemsForCategory(categoryShortName) = function(){
			return $http.get(url + 'menu_items.json?category=' + categoryShortName);
		}
	}

})();
