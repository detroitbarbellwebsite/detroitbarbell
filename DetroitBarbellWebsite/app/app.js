(function () {
    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./app/partials/home.html"
            })
            .when("/home", {
                templateUrl: "./app/partials/home.html"
            })
            .when("/about", {
                templateUrl: "./app/partials/about.html"
            })
            .when("/recordboard", {
                templateUrl: "./app/partials/recordboard.html"
            })
            .when("/contact", {
                templateUrl: "./app/partials/contact.html"
            })
            .otherwise({ rediectTo: "/" });
    })

}());