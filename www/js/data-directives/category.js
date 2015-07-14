'use strict';

angular.module('starter.data').
factory('CATEGORIESAPI', ['$resource', function($resource) {
	return $resource('/osm-app/data/classes.json',
			{},
			{}
	);
}]);