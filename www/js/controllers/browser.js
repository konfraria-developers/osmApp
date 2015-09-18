'use strict';

angular.module('starter.controllers').
controller('BrowserController', ['$scope', 'OSMAPI', 'CATEGORIESAPI', function($scope, OSMAPI, CATEGORIESAPI) {
    $scope.categories = CATEGORIESAPI.get();
    $scope.data = OSMAPI.query();
    $scope.selectedCategory = null;
    $scope.selectedItem = null;
    $scope.toggleCategories = function(category) {
    	if ($scope.selectedCategory == null) {
    		$scope.selectedCategory = category;
    		$scope.MENU.browseText = category.name;
    	} else {
    		$scope.selectedCategory = null;
    	}
    }
    $scope.toggleItems = function(item) {
    	if ($scope.selectedItem == null) {
    		$scope.selectedItem = item;
    	} else {
    		$scope.selectedItem = null;
    	}
    }
    $scope.search = function(item) {
    	if ($scope.selectedCategory != null)
    	    if (item.tags.hasOwnProperty($scope.selectedCategory.tag))
    		    return true;
    	return false;
    }
}]);
