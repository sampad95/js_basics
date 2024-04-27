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
