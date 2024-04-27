const prompt = require("prompt-sync")()
var marks = prompt("Enter the marks: ")

/*
if(marks > 30 && marks <=60){
	console.log("Grade C")}
else if(marks > 60 && marks <=70){
	console.log("Grade-B")}
else if(marks > 70 && marks <= 80){
	console.log("Grade-A")}
else if(marks > 80 && marks <=90){
	console.log("Grade-A+")}
else if(marks > 90 && marks <= 100){
	console.log("Grade-AA")}
else{
	console.log("Don't worry, you just failed in paper. Try next time. Best of luck for the real life exam")}
*/

/*
marks > 30 && marks <=60?
        console.log("Grade C"):
marks > 60 && marks <=70?
        console.log("Grade-B"):
marks > 70 && marks <= 80?
        console.log("Grade-A"):
marks > 80 && marks <=90?
        console.log("Grade-A+"):
marks > 90 && marks <= 100?
        console.log("Grade-AA"):
console.log("Don't worry, you just failed in paper. Try next time. Best of luck for the real life exam")
*/

/*
let result = marks >= 30 && marks <=60? "Grade C":
marks > 60 && marks <=70? "Grade-B":
marks > 70 && marks <= 80? "Grade-A":
marks > 80 && marks <=90? "Grade-A+":
marks > 90 && marks <= 100? "Grade-AA":
	"Don't worry, you just failed in paper. Try next time. Best of luck for the real life exam"

console.log(result)
*/


let result = marks > 90? "Grade AA":
marks > 80? "Grade-A+":
marks > 70 ? "Grade-A":
marks > 60? "Grade-B":
marks > 30? "Grade-C":
	"Don't worry, you just failed in paper. Try next time. Best of luck for the real life exam"

console.log(result)



/*
function grading(mks){
	let result = mks > 30 && mks <=60? "Grade C":
	mks > 60 && mks <=70? "Grade-B":
	mks > 70 && mks <= 80? "Grade-A":
	mks > 80 && mks <=90? "Grade-A+":
	mks > 90 && mks <= 100? "Grade-AA":
	"Don't worry, you just failed in paper. Try next time. Best of luck for the real life exam"
	console.log(result)
}

grading(marks)
*/

/*
// Using switch()
let result
switch(true){
	case marks > 90:
		result = "Grade-AA"
		break
	case marks > 80:
		result = "Grade-A+"
		break
	case marks > 70:
		result = "Grade-A"
		break
	case marks > 60:
		result = "Grade-B"
		break
	case marks > 30:
		result = "Grade-C"
		break
	case marks < 30:
		result = "Don't worry, you just failed in paper. Try next time. Best of luck for the real life exam"
		break
}

console.log(result)
*/

