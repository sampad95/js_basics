/*
let a=30;
let b=20;

b = b+a; //20+30=50
a = b-a; //50-30=20
b = b-a; //50-20=30
*/

/*
let a=20;
let b=30;

a = a+b; //20+30=50
b = a-b; //50-30=20
a = a-b; //50-20=30


console.log(`a=${a}`);
console.log(`b=${b}`);
*/


let a = -9;
let b = 11;

if(a>b){
    b = b+a;
    a = b-a;
    b = b-a;
    console.log(`a=${a}`);
    console.log(`b=${b}`);
}
else{
    a = a+b;
    b = a-b;
    a = a-b;
    console.log(`a=${a}`);
    console.log(`b=${b}`);
}
