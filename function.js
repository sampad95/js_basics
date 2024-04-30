const prompt = require("prompt-sync")()

/*
function greet(user){

    return `Hello ${user}!`
}

// var user = prompt("Enter the user name: ")
var user = "Sampad"
console.log(greet(user))
// console.log(greet("Sampad"))
*/

/*
// function expression
let greet = function(user){

    return `Hello ${user}!`
}

wc = greet
console.log(greet("Sampad"))
console.log(wc("Sampad"))
*/


// arrow function
/*
let greet = (user) => {

    console.log(`${user}`)
    return `Hello ${user}`
}

console.log(greet("Sampad"))
*/


let add = (a, b, c=1) => a + b +c // default value of c is 1

console.log(add(5, 6))            // when value of c is not passed, it takes the default value
console.log(add(5, 6, 2))


