"use strict";
exports.__esModule = true;
exports.findTopThreeElvesWithHighestLoad = exports.findElfWithHighestLoad = exports.getIndividualElveLoads = void 0;
var load_1 = require("./load");
var getIndividualElveLoads = function (allLoadsCrude) {
    var result = [];
    var temp = [];
    for (var _i = 0, _a = allLoadsCrude.split('\n'); _i < _a.length; _i++) {
        var element = _a[_i];
        if (element === '') {
            result.push(temp);
            temp = [];
        }
        else {
            temp.push(Number(element));
        }
    }
    return result;
};
exports.getIndividualElveLoads = getIndividualElveLoads;
var findElfWithHighestLoad = function (allLoads) {
    var highestLoadSum = -Infinity;
    for (var _i = 0, allLoads_1 = allLoads; _i < allLoads_1.length; _i++) {
        var array = allLoads_1[_i];
        var sum = array.reduce(function (a, b) { return a + b; }, 0);
        if (sum > highestLoadSum) {
            highestLoadSum = sum;
        }
    }
    return highestLoadSum;
};
exports.findElfWithHighestLoad = findElfWithHighestLoad;
var findTopThreeElvesWithHighestLoad = function (allLoads) {
    //Take all loads and replace each array by its total
    //Order the result form highest to the lowest
    //Return the total of the 3 top
    var allLoadsTotals = [];
    for (var _i = 0, allLoads_2 = allLoads; _i < allLoads_2.length; _i++) {
        var array = allLoads_2[_i];
        var sum = array.reduce(function (a, b) { return a + b; }, 0);
        allLoadsTotals.push(sum);
    }
    allLoadsTotals.sort(function (a, b) { return b - a; });
    console.log(allLoadsTotals);
    return allLoadsTotals.reduce(function (a, b) { return a + b; });
};
exports.findTopThreeElvesWithHighestLoad = findTopThreeElvesWithHighestLoad;
(0, exports.findTopThreeElvesWithHighestLoad)((0, exports.getIndividualElveLoads)(load_1.load));
// console.log(findElfWithHighestLoad(getIndividualElveLoads(load)));
