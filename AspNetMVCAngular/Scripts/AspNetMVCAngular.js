var AspNetMVCAngular = angular.module('AspNetMVCAngular', ['ngRoute']);
AspNetMVCAngular.controllers = (LandingPageController, 'LandingPageController');


var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'RoutesDemo/one'
        })
        .when('/routeTwo', {
            templateUrl: 'routesDemo/two'
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
}
configFunction.$inject = ['$routeProvider'];

AspNetMVCAngular.config(configFunction);

    