(function () {
    var app = angular.module("app");
    var recordBoardCtrl = function ($scope, recordBoardService, $timeout) {

        var getSquatRecords = recordBoardService.getRecordBoardData();

        $scope.squatList = getSquatRecords; 

        $timeout(function () {
            $('#recordboard').dataTable();
        }, 0)

        //$scope.initDataTable = function () {
        //    $('#recordboard').dataTable();
        //};
    };

    app.controller('RecordBoardController', recordBoardCtrl);
}());