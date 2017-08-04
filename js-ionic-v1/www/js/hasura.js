'use strict';
angular.module('starter')
    .factory('hasura', function ($window) {
        return $window.hasura;
    });
