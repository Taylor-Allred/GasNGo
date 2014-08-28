'use strict';
/**
 * @ngdoc function
 * @name gasNgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gasNgoApp
 */
angular
    .module('gasNgoApp')
    .controller('tableCtrl', function($scope) {
        $scope.user = {
            name: 'awesome user'
        };
    });