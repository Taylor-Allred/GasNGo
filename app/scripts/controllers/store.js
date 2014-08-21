'use strict';

/**
 * @ngdoc function
 * @name gasNgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gasNgoApp
 */
angular.module('gasNgoApp')
  .controller('StoreCtrl', function ($scope, $routeParams) {

    $scope.storeId = $routeParams.storeId;

  });
