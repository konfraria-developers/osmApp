// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'pascalprecht.translate', 'ionic-material', 'starter.controllers', 'leaflet-directive'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$translateProvider', function($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'translations/locale-',
    suffix: '.json'
  });
  $translateProvider.determinePreferredLanguage();
  $translateProvider.fallbackLanguage(['en']);
  $translateProvider.useSanitizeValueStrategy('escaped');
}])

.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppController'
  })

  .state('app.map', {
    url: "/map",
    views: {
      'map-tab': {
        templateUrl: "templates/map.html",
        controller: 'MapController',
      }
    }
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'browse-tab': {
        templateUrl: 'templates/browse.html',
        controller: "BrowserController"
      }
    }
  })

  .state('app.browse.items', {
    url: "/items",
    views: {
      'browse-tab@app': {
        templateUrl: "templates/items.html",
        controller: "BrowserItemsController"
      }
    }
  })

  .state('app.browse.items.item', {
    url: "/item",
    views: {
      'browse-tab@app': {
        templateUrl: "templates/item.html",
      }
    }
  })

  .state('app.details', {
    url: '/details',
    views: {
      'details-tab': {
        templateUrl: 'templates/details.html'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/browse');

});
