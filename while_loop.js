
let i = 1;
while(i <= 3){
    console.log(i);
    console.log("Hello");
    i++;
    
}
console.log(i); // icrement continues after i=3 to 4 (and that i=4 is printed), but does not print Hello as 4>3.


/*
let i = 3;
while(i >= 1){
    console.log(i);
    console.log("Hello");
    i--;
}
console.log(i); // derement continues after i=1 to 0 (and that i=0 is printed), but does not print Hello as 0<1.
*/

/*
let i = 4;
while(i <= 3){
    console.log(i);             // No printing of i as it is also inside while condition of i <= 3.
    console.log("Hello");       // No Hello printing
    i++;
}
console.log(i);
*/
