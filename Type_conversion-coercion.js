// let num = String(6)
// console.log(num, typeof num)

// let str = Number("6")
// console.log(str, typeof str)

// let x
// console.log(x, typeof x)
// x = 8
// console.log(x, typeof x)

// console.log(Boolean(0))

// console.log(Boolean(1))
// console.log(Boolean(7))
// console.log(Boolean(-12))

// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(Infinity))


// Data type coercion:

// When any string or non-string value is added to a string, 
// it always converts the non-string value to a string implicitly and concatenates the strings.
// let y = 9 + "10"
// console.log(y, typeof y)
// let a = "10" + 9
// console.log(a, typeof a)
// a = +a + 1               // + sign before a (unitary operator) converts a into number
// console.log(a, typeof a)
// let z = 8 + ""
// console.log(z, typeof z) 

// When an operation like subtraction (-), multiplication (*), division (/), or modulus (%) is performed,
//  all the values that are not numbers are converted into the number data type, 
// as these operations can be performed between numbers only.
// let b = "8" - 2
// console.log(b, typeof b) 
// let c = 3*"2"
// console.log(c, typeof c) 

// let d = 5
// d =! d
// console.log(d, typeof d)

let u = "1.23 Sampad"
console.log(u, typeof u)
v = parseFloat(u) 
console.log(v, typeof v)
w = parseInt(u)
console.log(w, typeof w)

console.log(parseFloat("Sampad 1.23")) // number should be at the start
console.log(parseInt("Sampad 1.23")) // number should be at the start

