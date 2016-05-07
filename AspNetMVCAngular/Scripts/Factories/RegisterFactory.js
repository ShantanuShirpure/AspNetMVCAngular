var RegisterFactory = function ($http, $q) {
    return function (emailAddress, password, confirmPassword) {
        var deferObject = $q.defer();
        console.log("reg factory")


        $http.post(

            '/Account/Register', {
                Email: emailAddress,
                Password: password,
                ConfirmPassword: confirmPassword
            }

            )

        .success(function (data) {
            console.log("suceess")
            if (data == 'True') {
                deferObject.resolve({ success: true });
            }
            else {
                deferObject.resolve({ success: false });
            }

        })
        .error(function (data) {
            console.log("error")
            deferObject.resolve({ success: false });
        }

        );

        return deferObject.promise;


    }
}

RegisterFactory.$inject =['$http','$q'];