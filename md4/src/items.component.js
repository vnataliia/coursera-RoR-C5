(function() {
    'use strict';

    angular.module('MenuApp').component('items', {
        templateUrl: 'templates/showItems.html',
        bindings: {
            items: '<'
        }
    });
})();
