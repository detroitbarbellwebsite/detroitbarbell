(function () {
    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./app/partials/home.html"
            })
            .otherwise({ rediectTo: "/" });
    });
}());