"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByDate = void 0;
function sortByDate(list, key) {
    if (key === void 0) { key = 'date'; }
    return list.sort(function (a, b) {
        return new Date(b[key]) - new Date(a[key]);
    });
}
exports.sortByDate = sortByDate;
var sorted = sortByDate([
    { date: '2012-01-31T16:00:00.000Z' },
    { date: '2013-01-31T16:00:00.000Z' },
    { date: '2011-01-31T16:00:00.000Z' },
]);
// console.log([
//   { date: '2012-01-31T16:00:00.000Z' },
//   { date: '2013-01-31T16:00:00.000Z' },
//   { date: '2011-01-31T16:00:00.000Z' },
// ]);
console.log(sorted);
