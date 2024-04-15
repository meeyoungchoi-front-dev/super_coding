// value
console.log(10);
console.log('Owen');

// variable
let firstName = 'Thomas';
console.log(firstName);
firstName = 'Alex';
console.log(firstName);

// camelCase
let myAge = 10; // Good
let MyAge = 12; // Bad
let $myAge = 15; // Bad
let 1myAge = 20; // Bad 

// snake_case
let my_age = 25; // Good

// Data Type
// data type

// Primitive

// 1. Number
console.log(10);
let number = 12;
console.log(number);
console.log(typeof number);

// 2. String
console.log("Kevin");
let name = "Kevin";
console.log(name);
console.log(typeof name);

let myName = 'Kim';
let templateLiteral = `hello ${myName}`;
console.log(templateLiteral); // hello Kim

// 3. Boolean
console.log(true);
let isFun = true;
console.log(isFun);
console.log(typeof isFun);

// 4. Undefined
let apple;
console.log(apple);
console.log(typeof apple);

// 5. Null
let time = null;
console.log(time);
console.log(typeof time);

// 6. Symbol
let symbol = Symbol();
console.log(symbol);
console.log(typeof symbol);

// 7. BigInt
let theBiggestInt = 9007199254740991n;
console.log(theBiggestInt);
console.log(typeof BigInt);