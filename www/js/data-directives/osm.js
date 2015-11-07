'use strict';

angular.module('starter.data', ['ngResource']).
factory('OSMAPI', ['$resource', function($resource) {

    console.log("hi")

    //return $resource('/home/eriba/software/osmApp/www/data/data.json',
    return $resource('http://192.168.1.48:8080/data/lapalma/data.json',
            {},
            {}
    );
}]);
