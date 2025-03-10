const prompt = require("prompt-sync")();

// var age = prompt("Eneter the applicant's age: ")
let age = prompt("Eneter the applicant's age: ")

if(age < 18){
    console.log("Applicant is not eligible for DL")
    console.log("Try after becoming 18")
}
else if(age < 60 && age >= 18){
    console.log("Applicant is eligible for DL")
}
else{
    console.log("Applicant will be eligible upon certain condictions")
}

