(function () {
    var recordBoardService = function ($http) {
        var getRecordBoardData = function () {
            var json = [{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "132", "Record": 500, "RawOrEquipped": "Raw" },
{ "Lifter": "LifterLongName OneLongerLastName", "Gender": "Female", "WeightClass": "132", "Record": 500, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "148", "Record": 600, "RawOrEquipped": "Raw" },
{ "Lifter": "LifterLongName OneLongerLastName", "Gender": "Female", "WeightClass": "148", "Record": 600, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "165", "Record": 700, "RawOrEquipped": "Raw" },
{ "Lifter": "LifterLongName OneLongerLastName", "Gender": "Female", "WeightClass": "165", "Record": 700, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "181", "Record": 800, "RawOrEquipped": "Equipped" },
{ "Lifter": "LifterLongName OneLongerLastName", "Gender": "Female", "WeightClass": "181", "Record": 800, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "198", "Record": 800, "RawOrEquipped": "Equipped" },
{ "Lifter": "LifterLongName OneLongerLastName", "Gender": "Female", "WeightClass": "SHW", "Record": 900, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "220", "Record": 1000, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "242", "Record": 1000, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "275", "Record": 1000, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "308", "Record": 1000, "RawOrEquipped": "Equipped" },
{ "Lifter": "Lifter ", "Gender": "Male", "WeightClass": "SHW", "Record": 1000, "RawOrEquipped": "Equipped" }]

            return json;
        };

        return {
            getRecordBoardData: getRecordBoardData,
        };
    };

    var module = angular.module("app");
    // register a service with angular
    module.factory("recordBoardService", recordBoardService);
}());