const prompt = require("prompt-sync")()

/*
function factorial(n){
    if (n >= 0 && n % 1 == 0 ){
        i = 1
        f = 1
        while (i <= n){
            f *= i
            i++
        }
        return f
    }
    else {
        return "Enter positive integer number"
    }
}
*/


function factorial(n){
    if (n >= 0 && n % 1 == 0){
        if (n ==0 || n == 1){
            return 1
        }
        else {
            return n*factorial(n-1)
        }
    }
    else{
        return "Enter positive integer number"
    }

}


a = prompt("Enter the number: ")
console.log(factorial(a))