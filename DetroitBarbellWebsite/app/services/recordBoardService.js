(function () {
    var recordBoardService = function ($http) {
        var getSquatRecordData = function () {
            var json = [{ "Lifter": "Marc Tejero", "Gender": "Male", "WeightClass": "148", "Record": 735, "RawOrEquipped": "Equipped" },
{ "Lifter": "Tracey Patrick", "Gender": "Female", "WeightClass": "148", "Record": 540, "RawOrEquipped": "Equipped" },
{ "Lifter": "Beth Thomas", "Gender": "Female", "WeightClass": "132", "Record": 446, "RawOrEquipped": "Equipped" },
{ "Lifter": "Marc Tejero", "Gender": "Male", "WeightClass": "165", "Record": 730, "RawOrEquipped": "Equipped" },
{ "Lifter": "Shelly Brandenburg", "Gender": "Female", "WeightClass": "165", "Record": 435, "RawOrEquipped": "Equipped" },
{ "Lifter": "Tony", "Gender": "Male", "WeightClass": "181", "Record": 661, "RawOrEquipped": "Equipped" },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "181", "Record": 360, "RawOrEquipped": "Equipped" },
{ "Lifter": "JJ Thomas", "Gender": "Male", "WeightClass": "198", "Record": 830, "RawOrEquipped": "Equipped" },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "198", "Record": 435, "RawOrEquipped": "Equipped" },
{ "Lifter": "Doug", "Gender": "Male", "WeightClass": "220", "Record": 887, "RawOrEquipped": "Equipped" },
{ "Lifter": "John Zemmin", "Gender": "Male", "WeightClass": "275", "Record": 976, "RawOrEquipped": "Equipped" },
{ "Lifter": "Craig", "Gender": "Male", "WeightClass": "308", "Record": 1052, "RawOrEquipped": "Equipped" },
{ "Lifter": "Craig", "Gender": "Male", "WeightClass": "SHW", "Record": 1069, "RawOrEquipped": "Equipped" },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "SHW", "Record": 558, "RawOrEquipped": "Equipped" }]

            return json;
        };

        var getBenchRecordData = function () {
            var json = [{ "Lifter": "Beth Thomas", "Gender": "Female", "WeightClass": "132", "Record": 264, "RawOrEquipped": "Equipped" },
{ "Lifter": "Wes McCormick", "Gender": "Male", "WeightClass": "148", "Record": 451, "RawOrEquipped": "Equipped" },
{ "Lifter": "Tracey Patrick", "Gender": "Female", "WeightClass": "148", "Record": 355, "RawOrEquipped": "Equipped" },
{ "Lifter": "Dave", "Gender": "Male", "WeightClass": "165", "Record": 465, "RawOrEquipped": "Raw" },
{ "Lifter": "Shelly Brandenburg", "Gender": "Female", "WeightClass": "165", "Record": 254, "RawOrEquipped": "Equipped" },
{ "Lifter": "Tim Hensley", "Gender": "Male", "WeightClass": "181", "Record": 650, "RawOrEquipped": "Equipped" },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "181", "Record": 250, "RawOrEquipped": "Equipped" },
{ "Lifter": "Tim Hensley", "Gender": "Male", "WeightClass": "198", "Record": 760, "RawOrEquipped": "Equipped" },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "198", "Record": 225, "RawOrEquipped": "Equipped" },
{ "Lifter": "John Zemmin", "Gender": "Male", "WeightClass": "220", "Record": 730, "RawOrEquipped": "Equipped" },
{ "Lifter": "John Zemmin", "Gender": "Male", "WeightClass": "275", "Record": 843, "RawOrEquipped": "Equipped" },
{ "Lifter": "Mike", "Gender": "Male", "WeightClass": "308", "Record": 815, "RawOrEquipped": "Equipped" },
{ "Lifter": "Clay Bradenburg", "Gender": "Male", "WeightClass": "SHW", "Record": 931, "RawOrEquipped": "Equipped" },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "SHW", "Record": 425, "RawOrEquipped": "Equipped" }]

            return json;
        };

        var getDeadliftRecordData = function () {
            var json = [{ "Lifter": "Beth Thomas", "Gender": "Female", "WeightClass": "132", "Record": 391 },
{ "Lifter": "Marc Tejero", "Gender": "Male", "WeightClass": "148", "Record": 595 },
{ "Lifter": "Tracey Patrick", "Gender": "Female", "WeightClass": "148", "Record": 430 },
{ "Lifter": "Marc Tejero", "Gender": "Male", "WeightClass": "165", "Record": 605 },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "165", "Record": 405 },
{ "Lifter": "Tony Butson", "Gender": "Male", "WeightClass": "181", "Record": 585 },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "181", "Record": 405 },
{ "Lifter": "JJ Thomas", "Gender": "Male", "WeightClass": "198", "Record": 705 },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "198", "Record": 465 },
{ "Lifter": "JJ Thomas", "Gender": "Male", "WeightClass": "220", "Record": 715 },
{ "Lifter": "Dean", "Gender": "Male", "WeightClass": "242", "Record": 760 },
{ "Lifter": "Kevin Smith", "Gender": "Male", "WeightClass": "275", "Record": 745 },
{ "Lifter": "Craig", "Gender": "Male", "WeightClass": "308", "Record": 766 },
{ "Lifter": "Craig", "Gender": "Male", "WeightClass": "SHW", "Record": 755 },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "SHW", "Record": 469 }]

            return json;
        };

        var getTotalRecordData = function () {
            var json = [{ "Lifter": "Beth Thomas", "Gender": "Female", "WeightClass": "132", "Record": 1058 },
{ "Lifter": "Marc Tejero", "Gender": "Male", "WeightClass": "148", "Record": 1760 },
{ "Lifter": "Tracey Patrick", "Gender": "Female", "WeightClass": "148", "Record": 1325 },
{ "Lifter": "Marc Tejero", "Gender": "Male", "WeightClass": "165", "Record": 1785 },
{ "Lifter": "Shelly Brandenburg", "Gender": "Female", "WeightClass": "165", "Record": 1025 },
{ "Lifter": "Tim Hensley", "Gender": "Male", "WeightClass": "181", "Record": 1802 },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "181", "Record": 0 },
{ "Lifter": "Tim Hensley", "Gender": "Male", "WeightClass": "198", "Record": 2050 },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "198", "Record": 0 },
{ "Lifter": "JJ Thomas", "Gender": "Male", "WeightClass": "220", "Record": 2126 },
{ "Lifter": "Dean", "Gender": "Male", "WeightClass": "242", "Record": 2080 },
{ "Lifter": "John Zemmin", "Gender": "Male", "WeightClass": "275", "Record": 2342 },
{ "Lifter": "Craigh", "Gender": "Male", "WeightClass": "308", "Record": 2265 },
{ "Lifter": "Jayson", "Gender": "Male", "WeightClass": "SHW", "Record": 2400 },
{ "Lifter": "Kristy", "Gender": "Female", "WeightClass": "SHW", "Record": 0 }]

            return json;
        };

        return {
            getSquatRecordData: getSquatRecordData,
            getBenchRecordData: getBenchRecordData,
            getDeadliftRecordData: getDeadliftRecordData,
            getTotalRecordData: getTotalRecordData
        };
    };

    var module = angular.module("app");
    // register a service with angular
    module.factory("recordBoardService", recordBoardService);
}());