angular.module('starter.controllers')

.controller('MapController', [ '$scope', function($scope) {

  angular.extend($scope, {
    tiles: {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    },
    center: {
      lat: 41.413219,
      lng: 1.9686877,
      zoom: 18
    },
    markers: {
      item: {
        lat: null,
        lng: null
      }
    },
    layers: {},
    defaults: {
      tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      maxZoom: 18,
      zoomControlPosition: 'bottomleft'
    },
    events: {
      map: {
        enable: ['context'],
        logic: 'emit'
      }
    }
  });

  $scope.$watch('DATA.selectedItem', function() {

    $scope.markers.item.lat = $scope.DATA.selectedItem.geometry.coordinates[1]
    $scope.markers.item.lng = $scope.DATA.selectedItem.geometry.coordinates[0]

    $scope.center.lat = $scope.markers.item.lat
    $scope.center.lng = $scope.markers.item.lng

  });

/*
  $scope.setMarker = function(item) {

    // add marker to markers array

    $scope.markers.push({
      lat: item.lat,
      lng: item.lon,
      message: "My Added Marker"
    });
    console.log( "Setting marker: ");
    console.log( item );

    // update center

    console.log( $scope.center );

    $scope.center.lat = item.lat;
    $scope.center.lng = item.lon;

    console.log( $scope.center );

  }
*/

}]);
