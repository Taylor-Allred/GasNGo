'use strict';

/**
 * @ngdoc function
 * @name gasNgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gasNgoApp
 */
angular.module('gasNgoApp')
    .controller('LogCtrl', function ($scope, $routeParams) {

        $scope.$routeParams = $routeParams;

    });