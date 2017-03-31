(function() {
    'use strict';
    angular.module('MenuApp').config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
console.log('r st');
    function RoutesConfig ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
console.log('r st 1');

        $stateProvider.state('home', {
            url: '/',
            template: '<a ui-sref="categories">Welcome to our Restaurant</a>'
        }).state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories.html',
            controller: 'CategoriesController as cCtrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    console.log('resolve');
                    return MenuDataService.getAllCategories();
                }]
            }
            // v5
/*        }).state('items', {
            url: '/items/{short_name}',
            templateUrl: 'templates/items.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.shortName);
                }]
            }*/
        });
console.log('r st 99');
    };
console.log('r end');
    
})();
