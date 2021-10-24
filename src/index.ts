import { CharactersArray } from "./Class/Characters";
import { LinkedList } from "./Class/LinkedList/Index";
import { NumbersArray } from "./Class/NumbersArray";
import { Sort } from "./Class/Sort";

const numbersArray = new NumbersArray([10, 14, 0, 7, -2, 5, 9, -5]);
const charactersArray = new CharactersArray("aleksandAR");
const linkedList = new LinkedList(100);

// Implementing Sort Method For Every Data Type That Is Made
const sortNum = new Sort(numbersArray);
const sortChar = new Sort(charactersArray);

linkedList.add(500);
linkedList.add(200);
linkedList.add(-100);
linkedList.add(0);
linkedList.add(-50);

sortNum.sort();
sortChar.sort();
const sortList = new Sort(linkedList);

sortList.sort();
linkedList.print();

console.log(numbersArray.data);
console.log(charactersArray.data);
