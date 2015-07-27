'use strict';

angular.module('starter.data').
factory('CATEGORIESAPI', ['$resource', function($resource) {
    return $resource('/home/eriba/software/osmApp/www/data/classes.json',
            {},
            {}
    );
}]);
