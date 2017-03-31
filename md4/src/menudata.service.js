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
			return $http({url: (url + 'categories.json')}).then(function (result) { console.log(result); return result.data; });
		};
	    			console.log('http0 5');
	    
		service.getItemsForCategory = function(categoryShortName) {
			console.log('http');
			return $http({url: (url + 'menu_items.json?category=' + categoryShortName)}).then(function (result) { console.log(result); return result.data; });
		}
	    			console.log('http0 e');
	    			console.log(service);
	    			console.log('http0 e', service);
	}

})();
