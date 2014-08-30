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
    .controller('table2Ctrl', function($scope, $filter, $http) {
    $scope.users = [
        {id: 1, name: 'awesome user1'},
        {id: 2, name: 'awesome user2'},
        {id: 3, name: 'awesome user3'}
    ];

    $scope.saveUser = function(data, id) {
        //$scope.user not updated yet
        angular.extend(data, {id: id});
        return $http.post('/saveUser', data);
    };

    // remove user
    $scope.removeUser = function(index) {
        $scope.users.splice(index, 1);
    };

    // add user
    $scope.addUser = function() {
        $scope.inserted = {
            id: $scope.users.length+1,
            name: ''
        };
        $scope.users.push($scope.inserted);
    };
});