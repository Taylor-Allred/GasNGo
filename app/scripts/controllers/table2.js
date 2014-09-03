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
    .controller('table2Ctrl', function($scope, $filter, $http, $firebase) {
        var ref = new Firebase("https://gasngo.firebaseio.com/");

        var sync = $firebase(ref);

        $scope.users = sync.$asArray();

        // filter users to show
        $scope.filterUser = function(user) {
            return user.isDeleted !== true;
        };

        // mark user as deleted
        $scope.deleteUser = function(id) {
            var filtered = $filter('filter')($scope.users, {id: id});
            if (filtered.length) {
                filtered[0].isDeleted = true;
            }
        };

        // add user
        $scope.addUser = function() {
            $scope.users.$add({
                id: $scope.users.length+1,
                name: 'change me',
                sunday: 'change me',
                monday: 'change me',
                tuesday: 'change me',
                wednesday: 'change me',
                thursday: 'change me',
                friday: 'change me',
                saturday: 'change me'
            });
        };

        // cancel all changes
        $scope.cancel = function() {
            for (var i = $scope.users.length; i--;) {
                var user = $scope.users[i];
                // undelete
                if (user.isDeleted) {
                    delete user.isDeleted;
                }
                // remove new
                if (user.isNew) {
                    $scope.users.$remove(i);
                }
            }
        };

        // save edits
        $scope.saveTable = function() {
            for (var i = $scope.users.length; i--;) {
                var user = $scope.users[i];
                // actually delete user
                if (user.isDeleted) {
                    $scope.users.$remove(i);
                }
                // mark as not new
                if (user.isNew) {
                    user.isNew = false;
                }
                if (!user.isDeleted){
                    $scope.users.$save(user)
                }
            }
        };

    });