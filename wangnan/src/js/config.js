function config($stateProvider, $urlRouterProvider) {
    /*console.log($stateProvider)
    console.log($urlRouterProvider)*/
    $urlRouterProvider.otherwise("login");

    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "view/index.html"
        })
        .state("destination", {
            url: "/destination",
            templateUrl: "view/destination.html"
        })
        .state("find", {
            url: "/find",
            templateUrl: "view/find.html"
        })
        .state("user", {
            url: "/user",
            templateUrl: "view/user.html"
        })
        .state("foot", {
            url: "/foot",
            templateUrl: "view/foot.html"
        })
        .state("food_det", {
            url: "/food_det",
            templateUrl: "view/food_det.html"
        })
        .state("china", {
            url: "/china",
            templateUrl: "view/china.html"
        })
        .state("zhoubian", {
            url: "/zhoubian",
            templateUrl: "view/zhoubian.html"
        })
        .state("rim", {
            url: "/rim",
            templateUrl: "view/rim.html"
        })
        .state("arrange", {
            url: "/arrange",
            templateUrl: "view/arrange.html"
        })
        .state("baike", {
            url: "/baike",
            templateUrl: "view/baike.html"
        })
        .state("hot", {
            url: "/hot",
            templateUrl: "view/hot.html"
        })
        .state("login", {
            url: "/login",
            templateUrl: "view/login.html",
            controller: "logina"
        })
        .state("forget", {
            url: "/forget",
            templateUrl: "view/forget.html"
        })
        .state("money", {
            url: "/money",
            templateUrl: "view/money.html"
        })
        .state("often", {
            url: "/often",
            templateUrl: "view/often.html"
        })
        .state("tuijian", {
            url: "/tuijian",
            templateUrl: "view/tuijian.html"
        })
        .state("des_detail", {
            url: "/des_detail",
            templateUrl: "view/des_detail.html"
        })

}
angular.module("myapp")
    .config(config)