"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersArray = void 0;
var NumbersArray = /** @class */ (function () {
    function NumbersArray(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersArray.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersArray.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersArray.prototype.swap = function (leftIndex, rightIndex) {
        var leftSide = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftSide;
    };
    return NumbersArray;
}());
exports.NumbersArray = NumbersArray;
