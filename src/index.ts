import { CharactersArray } from "./Class/Characters";
import { NumbersArray } from "./Class/NumbersArray";
import { Sort } from "./Class/Sort";
const numbersArray = new NumbersArray([10, 14, 0, 7, -2, 5, 9, -5]);
const charactersArray = new CharactersArray('aleksandAR')
const sortNum = new Sort(numbersArray);
const sortChar = new Sort(charactersArray);
sortNum.sort();
sortChar.sort();
console.log(numbersArray.data);
console.log(charactersArray.data);

