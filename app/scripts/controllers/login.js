'use strict';

/**
 * @ngdoc function
 * @name gasNgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gasNgoApp
 */
angular.module('gasNgoApp')
    .controller('LogCtrl', function ($scope, $rootScope, $routeParams, $firebaseSimpleLogin) {
//        var ref = new Firebase("https://gasngo.firebaseio.com/");
//        var auth = $firebaseSimpleLogin(ref);
//        $rootScope.auth = $firebaseSimpleLogin(ref); //refactor this into a service.
        $scope.$routeParams = $routeParams;

//        $scope.login = function(){
//            auth.$login('password', {
//                email: $scope.email,
//                password: $scope.password
//            }).then(function(user){
//                console.log('Success! , the users info is ', user);
//            }, function(err){
//                    console.log('There was an error! ', err);
//            })
//        }
//
    });