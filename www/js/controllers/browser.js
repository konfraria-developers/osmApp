'use strict';

angular.module('starter.controllers').
controller('BrowserController', ['$scope', 'OSMAPI', 'CATEGORIESAPI', function($scope, OSMAPI, CATEGORIESAPI) {
    $scope.categories = CATEGORIESAPI.get();
    $scope.data = OSMAPI.query();
    $scope.shop = false;
    $scope.invert = function(category) {
        category.visible = !category.visible;
    };
}]);
