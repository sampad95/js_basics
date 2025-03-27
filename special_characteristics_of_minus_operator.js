let n = - "123";  // "-" before a value (string or number) acts as unary minus operator and gives negative value. In JS unary minus operator before a string, converts it into a negative numeric value.
console.log(`n = ${n}`);
console.log(`typeof n = ${typeof n}`);


let s = - "sampad";   // string "Sampad" can not be converted into a number, so it becomes NaN which also a number type.
console.log(`s = ${s}`);
console.log(`typeof s = ${typeof s}`);


console.log(`typeof NaN = ${typeof NaN}`);


let m = 123 - - "123"; // Here 1st "-" acts as binary and 2nd "-" acts as unary operator. Unary "-" operator before a string type, converts it into a number type with negative value. // m = 123 - (-123)
console.log(`m = ${m}`);
console.log(`typeof m = ${typeof m}`);


let m2 = 123 - "123"; // "-" before "123" acts as unary operator and gives -123. Then that "-" of -123 acts as binary operator.
console.log(`m2 = ${m2}`);
console.log(`typeof m2 = ${typeof m2}`);


let m3 = "123" - "123"; // "-" before "123" acts as unary operator and gives -123. Then that "-" of -123 acts as binary operator. m3 = "123" - 123. Minus binary operation between string and number gives numeric type converting string into numeric type.
console.log(`m3 = ${m2}`);
console.log(`typeof m3 = ${typeof m2}`);


let p = 123 - - "sampad";   
console.log(`p = ${p}`);               // number - (-NaN) = number + NaN = NaN => number type
console.log(`typeof p = ${typeof p}`);


let a = 123 - "sampad";          //  number - NaN = NaN => number type
console.log(`a = ${a}`);
console.log(`typeof a = ${typeof a}`);


let a2 = "sampad" - 123;          // NaN - number = NaN => number type 
console.log(`a2 = ${a2}`);
console.log(`typeof a2 = ${typeof a2}`);


let r = "123" - - "sampad";         // string - (-NaN) = string, as NaN is number type
console.log(`r = ${r}`);
console.log(`typeof r = ${typeof r}`);


// In JS unary minus operator before a boolean, converts it into a negative numeric value.
console.log(-true);
console.log(typeof -true);

console.log(-false);
console.log(typeof -false);