"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersArray = void 0;
var CharactersArray = /** @class */ (function () {
    function CharactersArray(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersArray.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersArray.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase());
    };
    CharactersArray.prototype.swap = function (leftIndex, rightIndex) {
        // Split String in to the Array to implement Bubble Sorting
        var characters = this.data.split("");
        var leftSide = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftSide;
        // Return Array in to the String to implement show sorted Data
        this.data = characters.join("");
    };
    return CharactersArray;
}());
exports.CharactersArray = CharactersArray;
