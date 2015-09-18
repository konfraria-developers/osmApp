'use strict';

angular.module('starter.data', ['ngResource']).
factory('OSMAPI', ['$resource', function($resource) {
    return $resource('/home/eriba/software/osmApp/www/data/negocis.json',
            {},
            {}
    );
}]);
