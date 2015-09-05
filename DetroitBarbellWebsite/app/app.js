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
            .when("/contact", {
                templateUrl: "./app/partials/contact.html"
            })
            .otherwise({ rediectTo: "/" });
    })

}());