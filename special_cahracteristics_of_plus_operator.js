let n = +"123";

console.log(`n = ${n}`);
console.log(`typeof n = ${typeof n}`);



let m = 123 + +"123";

console.log(`m = ${m}`);
console.log(`typeof m = ${typeof m}`);


let p = 123 + +"sampad";

console.log(`p = ${p}`);               // number + NaN = NaN
console.log(`typeof p = ${typeof p}`);


console.log(`typeof NaN = ${typeof NaN}`);


let s = +"sampad";

console.log(`s = ${s}`);
console.log(`typeof s = ${typeof s}`);


let r = "123" + +"sampad";         // string + NaN = string as NaN is number type

console.log(`r = ${r}`);
console.log(`typeof r = ${typeof r}`);


let a = 123 + "sampad";          // string + number = string

console.log(`a = ${a}`);
console.log(`typeof a = ${typeof a}`);