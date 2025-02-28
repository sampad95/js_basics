// let num = 10
// console.log(typeof(num))

// let userName = "Sampad"
// console.log(typeof userName)

// let num1 = 2524232221458
// console.log(num1 * 25)
// console.log(typeof (num1 * 25))

// let num2 = 7.8
// console.log(typeof num2)

// let num3 = 0xff   //hexadecimal
// console.log(num3)       // (ff)_16 = (15 * 16^1) + (15 * 16^0) = (255)_10

// let num4  = 100_00_00_00  //no comma, _ are used to ease the counting
// console.log(num4)

// let num5 = 5/0
// console.log(num5)
// console.log(typeof num5)

// let num6 = -5/0
// console.log(num6)
// console.log(typeof num6)

// console.log(Number.MAX_VALUE) // maximum number JS can show
// console.log(Number.MAX_VALUE * 10)  // gives infinity

let num7 = 105022549525554225186144
console.log(num7)                       // precision lost
console.log(typeof num7)
console.log(num7 + 2)                  // precision lost
let num8 = 105022549525554225186144n   // n at the end makes the number bigInt type and keep precision unchanged
console.log(num8)                      // precision unchanged
console.log(typeof num8)
//console.log(num8 + 2) // cannot mix bigInt and other type of number
console.log(num8 + 2n) // 2 converted into bigInt type and now summation is possible with unchanged precision


