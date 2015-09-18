angular.module('starter.controllers', ['starter.data'])

.controller('AppController', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.MENU = {};
  $scope.MENU.browseText = 'BROWSE';
  $scope.$watch(
    function () {
      return $ionicSideMenuDelegate.getOpenRatio();
    },
    function (ratio) {
      $scope.sidemenuopened = (ratio == 1);
    });

})
