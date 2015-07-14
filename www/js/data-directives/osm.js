'use strict';

angular.module('starter.data', ['ngResource']).
factory('OSMAPI', ['$resource', function($resource) {
	return $resource('/osm-app/data/negocis.json',
			{},
			{}
	);
}]);