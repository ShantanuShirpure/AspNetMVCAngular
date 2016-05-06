var AspNetMVCAngular = angular.module('AspNetMVCAngular', ['ngRoute']);

// Add Controllers here
AspNetMVCAngular.controller(LandingPageController, 'LandingPageController');
AspNetMVCAngular.controller('LoginController', LoginController);


//Add Factories here
AspNetMVCAngular.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);


//Route Config
var configFunction = function ($routeProvider,$httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'RoutesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
        templateUrl: '/Account/Login',
        controller: LoginController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}    
configFunction.$inject = ['$routeProvider', '$httpProvider'];



AspNetMVCAngular.config(configFunction);

    