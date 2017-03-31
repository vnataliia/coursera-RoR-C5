(function() {
    'use strict';

    angular.module('data').service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['$http'];
	
    function MenuDataService($http) {
	    			console.log('http0');

		var service = this;
		var url = 'https://davids-restaurant.herokuapp.com/';

	    			console.log('http0 2');
		service.getAllCategories = function(){
			console.log('http');
			return $http.get(url + 'categories.json').then(function (result) { return result; });
		};
	    			console.log('http0 5');
/*
		service.getItemsForCategory(categoryShortName) = function(){
			return $http.get(url + 'menu_items.json?category=' + categoryShortName);
		}*/
	    			console.log('http0 e');
	    			console.log(service);
	    			console.log('http0 e', service);
	}

})();
