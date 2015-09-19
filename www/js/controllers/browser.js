'use strict';

angular.module('starter.controllers').
controller('BrowserController', ['$scope', 'OSMAPI', 'CATEGORIESAPI', function($scope, OSMAPI, CATEGORIESAPI) {

    if ( $scope.DATA.categories == null ) {
      $scope.DATA.categories = CATEGORIESAPI.get();
    }

    if ( $scope.DATA.data == null ) {
      $scope.DATA.data = OSMAPI.query();
    }

    //$scope.selectedCategory = null;

    $scope.toggleCategories = function(category) {
      $scope.MENU.browseText = category.name;
      $scope.DATA.selectedCategory = category;
      console.log ( $scope.selectedCategory );
    }

}]).

controller('BrowserItemsController', ['$scope', function($scope) {

     $scope.toggleItems = function(item) {
      $scope.DATA.selectedItem = item;
      console.log ( $scope.DATA.selectedItem );
    }

    $scope.search = function(item) {
      if ($scope.DATA.selectedCategory != null)
          if (item.tags.hasOwnProperty($scope.DATA.selectedCategory.tag))
            return true;
      return false;
    }
}]);

