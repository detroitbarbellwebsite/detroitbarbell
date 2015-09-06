(function () {
    var app = angular.module("app");
    var recordBoardCtrl = function ($scope, recordBoardService, $timeout) {

        var getSquatRecords = recordBoardService.getSquatRecordData();
        var getBenchRecords = recordBoardService.getBenchRecordData();
        var getDeadliftRecords = recordBoardService.getDeadliftRecordData();
        var getTotalRecords = recordBoardService.getTotalRecordData(); 

        $scope.squatList = getSquatRecords;
        $scope.benchList = getBenchRecords;
        $scope.deadliftList = getDeadliftRecords;
        $scope.totalList = getTotalRecords; 

        $timeout(function () {
            $('#SquatRecords').dataTable({
                "order": [[2, "asc"]],
                "paging": false
            });

            $('#BenchRecords').dataTable({
                "order": [[2, "asc"]],
                "paging": false
            });


            $('#DeadliftRecords').dataTable({
                "order": [[2, "asc"]],
                "paging": false
            });

            $('#TotalRecords').dataTable({
                "order": [[2, "asc"]],
                "paging": false
            });
        }, 0)

        //$scope.initDataTable = function () {
        //    $('#recordboard').dataTable();
        //};
    };

    app.controller('RecordBoardController', recordBoardCtrl);
}());