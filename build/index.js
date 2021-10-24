"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersArray_1 = require("./NumbersArray");
var Sort_1 = require("./Sort");
var numbersArray = new NumbersArray_1.NumbersArray([10, 14, 0, 7, -2, 5, 9, -5]);
var sort = new Sort_1.Sort(numbersArray);
sort.sort();
console.log(numbersArray.data);
