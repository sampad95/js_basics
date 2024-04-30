
let user = "Sampad" // user is global variable, can be accessed anywhere and inside any function. global variables are placed outside the functions

function greet(u){         // u is local variable of function greet, it can't be accessed inside other fuctions or outside the greet function
       
    let num = 5     // num is also local variable defined inside the the function

    console.log(num)
    console.log(user)
    return `Hello ${u}!`
}


wc = greet(user)
console.log(wc)
console.log(user)
// console.log(u) // this gives error, as u is local variable and defined inside the function.
// console.log(num)  // this also gives error, as num is local variable and defined inside the function.





