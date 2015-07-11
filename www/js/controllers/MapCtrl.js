angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope) {
  $scope.map = {
    tiles: {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    },
    center: {
      lat: 41.413219,
      lng: 1.9686877,
      zoom: 15
    },
    markers: {},
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
  }

});