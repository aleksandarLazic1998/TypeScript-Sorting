"use strict";
var Sort = /** @class */ (function () {
    function Sort(collection) {
        this.collection = collection;
    }
    Sort.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftSide = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftSide;
                }
            }
        }
    };
    return Sort;
}());
var sort = new Sort([10, 14, 0, 7, -2, 5]);
sort.sort();
console.log(sort.collection);
