(function () {
    var app = angular.module("app");
    var detroitMainCtrl = function ($scope, $window, $anchorScroll, $location) {

        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        var onUserComplete = function (data) {
            $scope.homePage = data;
        }

        var setHomePageData = function (data) {
            $scope.homePage = data;
        }

        //var promise = $http.get('https://api.github.com/users/angular');
        //promise.then(onUserComplete);

        //$http.get('https://api.github.com/users/angular')
        //    .then(onUserComplete, onError);

        // initialized variables
        //var homePageData = dbbDataService.getHomePageData();
        //var homePageData = dbbDataService.getSingleAboutMe(); 
        //dbbDataService.getHomePageDataApi().then(onUserComplete, onError);
        //setHomePageData(homePageData);
        $scope.load = function () {
            $(".fill-screen").css("height", window.innerHeight);
        };
        $scope.goToAbout = function () {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('about');

            // call $anchorScroll()
            $anchorScroll.yOffset = 100; 
            $anchorScroll();
        };
    };

    app.controller('DetroitMainController', detroitMainCtrl);
}());