'use strict';

/**
 * @ngdoc overview
 * @name gasNgoApp
 * @description
 * # gasNgoApp
 *
 * Main module of the application.
 */
angular
  .module('gasNgoApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
          templateUrl: '../../views/main.html',
          controller: 'MainCtrl',
          resolve: {
            // I will cause a 1 second delay
//            delay: function($q, $timeout) {
//              var delay = $q.defer();
//              $timeout(delay.resolve, 7000);
//              return delay.promise;
//            }
          }
        })
        .when('/store/:storeId', {
          templateUrl: '../../views/store.html',
          controller: 'StoreCtrl'
        }).when('/', {
          templateUrl: '../../views/contact.html',
          controller: 'ContactCtrl'
        });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });

