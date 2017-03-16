(function() {
    'use strict';

    var RoutesConfig = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            template: '<a ui-sref="categories">Welcome to our Restaurant</a>'
        }).state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories.html',
            controller: 'CategoriesController as categories',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        }).state('items', {
            url: '/items/{short_name}',
            templateUrl: 'templates/items.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.shortName);
                }]
            }
        });
    };

    angular.module('MenuApp').config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
})();