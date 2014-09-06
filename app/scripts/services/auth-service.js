'use strict';
/**
 * @ngdoc service
 * @name gasNgoApp.authService
 * @description
 * # authService
 * Service in the gasNgoApp.
 */
angular
    .module('gasNgoApp')
    .service('authService', function authService($q, $http, $firebase, $firebaseSimpleLogin) {
//    AngularJS will instantiate a singleton by calling "new" on this function
        var baseUrl = "https://gasngo.firebaseio.com/";
        var ref = new Firebase(baseUrl);
        var firebaseSimpleLogin = $firebaseSimpleLogin(ref);

        return{
            register: function (userInfo) {
                var deferred = $q.defer();
                firebaseSimpleLogin.$createUser(userInfo.email, userInfo.password).then(function (user) {
                        var userObject = $firebase(new Firebase(baseUrl + '/users/' + user.id)).$asObject();
                        userObject.name = userInfo.name;
                        userObject.email = userInfo.email;
                        userObject.$save().then(deferred.resolve, deferred.reject);
                    },
                    deferred.reject);
                return deferred.promise;
            },
            login: function (userInfo) {
                return firebaseSimpleLogin.$login('password', {
                    email: userInfo.email,
                    password: userInfo.password,
                    rememberMe: true
                });
            }
        }
  });
