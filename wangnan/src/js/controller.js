function HelloAngular($scope) {

}

function login($scope, $location, apiService) {
    $scope.one = function () {
        var username = $scope.username;
        var password = $scope.password;
        apiService.login("http://localhost:8080/login", {
                username: username,
                password: password
            }, "jsonp")
            .success(function (data) {
                /*console.log(data)*/
                alert(data.msg);
                if (data.code == 1) {
                    console.log(data.nicheng)
                    localStorage.name = data.nicheng;
                    sessionStorage.image = data.img;
                    $location.url("/user");
                }

            })
    }
}

function rim($scope, $location, apiService) {
    apiService.login("http://localhost:8080/rim", {
            name: "dfas",
            age: 20
        }, "jsonp")
        .success(function (res) {
            //console.log(res)
            for (var i = 0; i < res.length; i++) {
                for (var i in res[0]) {
                    $scope.data = res[0][i]
                }
                $scope.add1 = function () {
                    for (var i in res[0]) {
                        $scope.data1 = "";
                        $scope.data2 = "";
                        $scope.data3 = "";
                        $scope.data = res[0][i]
                    }
                }
                $scope.add2 = function () {
                    for (var i in res[1]) {
                        $scope.data = "";
                        $scope.data2 = "";
                        $scope.data3 = "";
                        $scope.data1 = res[1][i]
                    }
                }
                $scope.add3 = function () {
                    for (var i in res[2]) {
                        $scope.data = "";
                        $scope.data1 = "";
                        $scope.data3 = "";
                        $scope.data2 = res[2][i]
                    }
                }
                $scope.add4 = function () {
                    for (var i in res[3]) {
                        $scope.data = "";
                        $scope.data1 = "";
                        $scope.data2 = "";
                        $scope.data3 = res[3][i]
                    }
                }
            }
        })

}

function user($scope) {
    if (sessionStorage.image) {
        $scope.img = sessionStorage.image;
    }
}

function con($scope) {
    $scope.$on("ngRepeatFinished", function (ngRepeatFinishedEvent) {
        alert(9)
    })
}


function logina($scope, $location, apiService) {
    $scope.submit = function () {
        console.log(apiService)
        apiService.login("http://localhost:3001/login", {
                username: $scope.username,
                userpwd: $scope.userpwd
            }, "jsonp")
            .success(function (res) {
                if (res.code == 0) {
                    $location.url('/index')
                }
            })
    }
}

angular.module("myapp")
    .controller("HelloAngular", HelloAngular)
    .controller("login", login)
    .controller("rim", rim)
    .controller("user", user)
    .controller("con", con)
    .controller("logina", logina)