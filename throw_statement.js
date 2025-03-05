const prompt = require("prompt-sync")();

let age = prompt("Eneter the applicant's age: ")

// if(age < 18){
//     throw new Error("Age must be 18 or above")
// }
// console.log("Valid input")

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
}

console.log(checkAge(age))