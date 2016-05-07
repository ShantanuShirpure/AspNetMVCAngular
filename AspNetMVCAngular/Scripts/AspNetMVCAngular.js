var AspNetMVCAngular = angular.module('AspNetMVCAngular', ['ngRoute']);

// Add Controllers here
AspNetMVCAngular.controller(LandingPageController, 'LandingPageController');
AspNetMVCAngular.controller('LoginController', LoginController);
AspNetMVCAngular.controller('RegisterController', RegisterController);


//Add Factories here
AspNetMVCAngular.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AspNetMVCAngular.factory('LoginFactory', LoginFactory);
AspNetMVCAngular.factory('RegisterFactory', RegisterFactory);


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
        })
        .when('/register', {
        templateUrl: '/Account/Register',
        controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}    
configFunction.$inject = ['$routeProvider', '$httpProvider'];



AspNetMVCAngular.config(configFunction);

    