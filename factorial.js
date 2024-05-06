const prompt = require("prompt-sync")()
//var n = prompt("Enter the number: ")

/*
function factorial(n){
    if (n >= 0){
        let i = 1
        let f = 1
        while(i <= n){
            f *= i
            i++
        }    
        return f
    }
    else{
        return "Eneter positive number"}
}
*/


function factorial(n){
    if (n >= 0){
        if (n==0 || n==1){
            return 1}
        else{
            return n*factorial(n-1)}
    }
    else {
    return "Eneter positive number"}
}


a = prompt("Enter the number: ")
console.log(factorial(a))
