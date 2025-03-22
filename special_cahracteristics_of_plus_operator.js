let n = +"123";       // "+" operator before a string type converts it into a number type
console.log(`n = ${n}`);
console.log(`typeof n = ${typeof n}`);


let s = +"sampad";   // string "Sampad" can not be converted into a number, so it becomes NaN which also a number type
console.log(`s = ${s}`);
console.log(`typeof s = ${typeof s}`);


console.log(`typeof NaN = ${typeof NaN}`);


let m = 123 + +"123";
console.log(`m = ${m}`);
console.log(`typeof m = ${typeof m}`);


let p = 123 + +"sampad";   
console.log(`p = ${p}`);               // number + NaN = NaN
console.log(`typeof p = ${typeof p}`);


let a = 123 + "sampad";          // string + number = string
console.log(`a = ${a}`);
console.log(`typeof a = ${typeof a}`);


let r = "123" + +"sampad";         // string + NaN = string, as NaN is number type
console.log(`r = ${r}`);
console.log(`typeof r = ${typeof r}`);
