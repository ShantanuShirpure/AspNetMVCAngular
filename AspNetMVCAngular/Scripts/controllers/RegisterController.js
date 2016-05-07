var RegisterController = function ($scope, $location,RegisterFactory) {
    $scope.registerForm = {
        emailAddress: '',
        password: '',
        confirmPassword: '',
        registrationFalilure : false
    };

    $scope.register = function () {
        console.log("register")
        var result = RegisterFactory($scope.registerForm.emailAddress, $scope.registerForm.password, $scope.registerForm.confirmPassword);
        result.then(function (result) {
            console.log("reg then")
            if (result.success) {
                console.log("res success");
                $location.path('/routeOne');
            }
            else {
                console.log("res else")
                $scope.registerForm.registrationFalilure = true;
            };

        });
    }
}

RegisterController.$inject = ['$scope', '$location', 'RegisterFactory'];