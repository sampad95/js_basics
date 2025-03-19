let num = 4

// // num +=2     //num = num + 2  // increment by 2
// num -=2     //num = num - 2  // decrement by 2
// console.log(num)

// // num ++      // num = num + 1 or num += 1  // increment by unity
// num --      // num = num - 1 or num -= 1  // decrement by unity
// console.log(num)

// // ++ num      // num = num + 1 or num += 1  // increment by unity
// -- num      // num = num - 1 or num -= 1  // decrement by unity
// console.log(num)

///// what is the difference between num++ and ++num or num-- and --num?

// let x = num ++        // post-increment, first assign and then increment
// console.log(x, num)
//// num++ means num = num+1. i.e., num++ gives num. when x=num++, it first assign x=num (before incrementation) 
//// then increment happens and new num becomes num+1.

let y = ++num        // pre-increment, first increment and then assign
console.log(y, num)
//// ++num also means num = num+1. i.e., ++num gives num. when x=++num, incrementation happens first and num becomes num+1 
//// then x is assigned as num which is new num+1.

// let u = num--        // post-decrement, first assign and then decrement
// console.log(u, num)

// let v = --num        // pre-decrement, first decrement and then assign
// console.log(v, num)


