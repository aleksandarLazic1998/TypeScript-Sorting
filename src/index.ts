import { NumbersArray } from "./NumbersArray";
import { Sort } from "./Sort";
const numbersArray = new NumbersArray([10, 14, 0, 7, -2, 5, 9, -5]);
const sort = new Sort(numbersArray);
sort.sort();
console.log(numbersArray.data);
