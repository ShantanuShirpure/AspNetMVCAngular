var LoginFactory = function ($http, $q) {
    return function (emailAddress, password, rememberMe) {
        var defferObject = $q.defer();

        $http.post(
            '/Account/Login', {
                Email: emailAddress,
                Password: password,
                RememberMe: rememberMe

            }

            ).success(function (data) {
                if (data == 'True') {
                    defferObject.resolve({ success: true });

                }
                else { defferObject.resolve({ success: false }) };
            }
            ).error(function () {
                defferObject.resolve({ success: false })
            });

        return defferObject.promise;



    }
}

LoginFactory.$inject = ['$http', '$q'];