'use strict';

angular.module('starter.controllers').
controller('BrowserController', ['$scope', 'OSMAPI', 'CATEGORIESAPI', function($scope, OSMAPI, CATEGORIESAPI) {

    if ( $scope.DATA.categories == null ) {
      $scope.DATA.categories = CATEGORIESAPI.get();
    }

    if ( $scope.DATA.data == null ) {
      $scope.DATA.data = OSMAPI.query();
    }

    // It's supposed to be inherited, but nope, it doesn't!
    //$scope.selectedCategory = null;

    $scope.toggleCategories = function(category) {
      //$scope.MENU.hideTabs = true;
      $scope.DATA.selectedCategory = category;
      console.log ( $scope.selectedCategory );
    }

}]).

controller('BrowserCategoryController', ['$scope', function($scope) {

     $scope.toggleItems = function(item) {
      $scope.MENU.browseText = $scope.DATA.selectedCategory.name;
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

