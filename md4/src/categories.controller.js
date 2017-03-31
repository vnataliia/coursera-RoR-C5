(function() {
'use strict';

    angular.module('MenuApp').controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController (categories) {
        var cCtrl = this;
        			console.log('crtl');

        cCtrl.categories = categories;
//        cCtrl.categories = categories.data;
    }

})();
