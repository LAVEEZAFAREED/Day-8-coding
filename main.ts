

//Day 8 coding challange

import { clearScreenDown } from "readline";

//Question 1:Intentional Error:try to produce an array index error in one of your program . correct the error before finishing.
let friends: string[] = ["Alice","Bob","Charlie"];

console.log(friends[3]); // Intentional error:Arrays are zero indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; //correcting the error by assessing a valid index.

//Question 2: Conditional tests: Write a series of conditional tests.Predict the result of each test.

let car = `subaru`;

console.log("Is car == `subaru`? I predict True.");
console.log(car == `subaru`); //True

console.log("Is car == `toyota`? I predict False.");
console.log(car == `toyota`); //False

//Questiom 3: More conditional Tests:Expand your conditional tests to cover a wider range of comparison
//Test with string
let banana = "banana";
console.log("Testing equality with strings:");
console.log("banana" === "banana"); //True



//Testt with lowercase
console.log("Testing with lower case");
console.log("BANANA".toLowerCase() == "banana");

//Numeric test
console.log("Numeric test");
console.log(7 < 10); //true
console.log(5 > 6); //false

//Test using 'and' and 'or' Operators
console.log("test with 'and' and'or'");
console.log(2 + 2 == 4 && 2 + 2 == 6); //false
console.log(2 + 2 == 4  || 2 + 2 == 6); //true

//Test whether an item is in a array
let fruit =["apple" , "banana" , "mango" , "orange"];
console.log("Is apple is fruit?");;
console.log(fruit.includes("mango")); //true

console.log("Is 'mango' is not in fruit");
console.log(!fruit.includes("mango"));//true