let n = + "123"; // "+" before a value (string or number) acts as unary plus operator and gives positive value. In JS unary plus operator before a string, converts it into a positive numeric value.      
console.log(`n = ${n}`);
console.log(`typeof n = ${typeof n}`);


let s = + "sampad";   // string "Sampad" can not be converted into a number, so it becomes NaN which also a number type.
console.log(`s = ${s}`);
console.log(`typeof s = ${typeof s}`);


console.log(`typeof NaN = ${typeof NaN}`);


let m = 123 + + "123"; // Here 1st "+" acts as binary and 2nd "+" acts as unary operator. Unary "+" operator before a string type, converts it into a number type with positive value.
console.log(`m = ${m}`);
console.log(`typeof m = ${typeof m}`);


let p = 123 + + "sampad";   
console.log(`p = ${p}`);               // number + NaN = NaN.
console.log(`typeof p = ${typeof p}`);


let a = 123 + "sampad";          // string + number = string => concatenation.
console.log(`a = ${a}`);
console.log(`typeof a = ${typeof a}`);


let r = "123" + + "sampad";         // string + NaN = string, as NaN is number type.
console.log(`r = ${r}`);
console.log(`typeof r = ${typeof r}`);
