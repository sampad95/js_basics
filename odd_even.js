const prompt = require("prompt-sync")()
var n = prompt("Enter the number: ")

/*
if(n%2 == 0)
	console.log(n, "is Even")}
else{
console.log(n, "is Odd")}
*/

// n%2 == 0 ?
// 	console.log(n, "is even"):
// 	console.log(n, "is odd")

let result = n%2 == 0?
	 "is even":
	 "is odd"

console.log(n, result)
