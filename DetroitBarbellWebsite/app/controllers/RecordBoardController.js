(function () {
    var app = angular.module("app");
    var recordBoardCtrl = function ($scope, recordBoardService, $timeout) {

        //var getSquatRecords = recordBoardService.getSquatRecordData();
        //var getBenchRecords = recordBoardService.getBenchRecordData();
        //var getDeadliftRecords = recordBoardService.getDeadliftRecordData();
        //var getTotalRecords = recordBoardService.getTotalRecordData(); 

        //$scope.squatList = getSquatRecords;
        //$scope.benchList = getBenchRecords;
        //$scope.deadliftList = getDeadliftRecords;
        //$scope.totalList = getTotalRecords; 

        //$timeout(function () {
        //    $('#SquatRecords').dataTable({
        //        "aaSorting": [[2, "asc"], [1, "desc"]],
        //        "paging": false
        //    });

        //    $('#BenchRecords').dataTable({
        //        "order": [[2, "asc"]],
        //        "paging": false
        //    });


        //    $('#DeadliftRecords').dataTable({
        //        "order": [[2, "asc"]],
        //        "paging": false
        //    });

        //    $('#TotalRecords').dataTable({
        //        "order": [[2, "asc"]],
        //        "paging": false
        //    });
        //}, 0)

        $('#OverallMens').dataTable({
            "bSort": false,
            "paging": false,
            "sDom": '<"clear">'
        });
        $('#OverallWomens').dataTable({
            "bSort": false,
            "paging": false,
            "sDom": '<"clear">'
        });
    };

    app.controller('RecordBoardController', recordBoardCtrl);
}());