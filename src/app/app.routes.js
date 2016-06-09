/**
 * Created by Codesource Pty Ltd
 *
 */

(function () {
    'use strict';
    angular.module('hackathon')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'home'

                })
                .otherwise({redirectTo: '/'});
        }]);


})();