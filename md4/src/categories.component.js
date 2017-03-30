(function() {
    'use strict';

    angular.module('MenuApp').component('categories', {
        templateUrl: 'templates/showCategories.html',
        bindings: {
            categories: '<'
        }
    });
})();
