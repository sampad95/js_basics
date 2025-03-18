const prompt = require("prompt-sync")()
var n = prompt("Enter the number: ")

/*
<<<<<<< HEAD
if(n%2 == 0){
=======
if(n%2 === 0){
>>>>>>> 29ec691 (committed)
	console.log(n+ " is Even")}
else{
console.log(n+ " is Odd")}
*/

<<<<<<< HEAD
/*
n%2 == 0 ?
=======

// ternary operator

/*
n%2 === 0 ?
>>>>>>> 29ec691 (committed)
	console.log(`${n} is even`):
	console.log(`${n} is odd`)
*/


<<<<<<< HEAD
let result = n%2 == 0?
=======
let result = n%2 === 0?
>>>>>>> 29ec691 (committed)
	`${n} is even`:
	`${n} is odd`

console.log(result)
