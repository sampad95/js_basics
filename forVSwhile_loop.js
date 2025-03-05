/*
// for loop is suitable when initial and end points are known
for(var i = 1; i<=100; i++){
    
    if(i%3 === 0){
        console.log(i)
    }
}
*/


// while loop is suitable when end point is not known

/*
num = 8545651
// console.log(num%10)
// num = parseInt(num/10)
// console.log(num)

// console.log(num%10)
// num = parseInt(num/10)
// console.log(num)

while(num>0){
    console.log(num%10)
    num = parseInt(num/10)
 //console.log(num)
}

// for this problem we don't know what would be the strat and the iteration in for loop

*/

let n = 1729;

while(n!=6174){
    min_n = parseInt(n.toString().split('').sort().join(''));
    max_n = parseInt(n.toString().split('').sort((a,b)=>b-a).join(''));
    diff = max_n - min_n;
    console.log(min_n, max_n, diff);
    n = diff;

}