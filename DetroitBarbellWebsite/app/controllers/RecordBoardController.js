(function () {
    var app = angular.module("app");
    var recordBoardCtrl = function ($scope) {
        $scope.initDataTable = function () {
            $('#recordboard').dataTable();
        };
    };

    app.controller('RecordBoardController', recordBoardCtrl);
}());