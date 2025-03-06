/*
let n = 1728;

while(n!=6174){
    min_n = parseInt(n.toString().split('').sort().join(''));
    max_n = parseInt(n.toString().split('').sort((a,b)=>b-a).join(''));
    diff = max_n - min_n;
    console.log(min_n, max_n, diff);
    n = diff;
    console.log("Next n=", n);
}

*/

/*
let n = Math.floor(Math.random() * 8999) + 1001;  // Math.floor(Math.random() * (max - min + 1) ) + min; 
// Here max = 9999, min = 1001
console.log("Initial n = ", n);

let i = 0;

while(n!=6174){
    min_n = parseInt(n.toString().split('').sort().join(''));
    max_n = parseInt(n.toString().split('').sort((a,b)=>b-a).join(''));
    diff = max_n - min_n;

    // i++;
    i +=1;
    console.log('Step = ', i);

    console.log(min_n, max_n, diff);
    n = diff;

    console.log("Next n=", n);
}

*/


// let n = Math.floor(Math.random() * 8999) + 1001;  // Math.floor(Math.random() * (max - min + 1) ) + min; 
// Here max = 9999, min = 1001
let n=9990
console.log("Initial n = ", n);

let i = 0;

if (n.toString().length === 4){
    while(n!=6174){
        min_n = parseInt(n.toString().split('').sort().join(''));
        max_n = parseInt(n.toString().split('').sort((a,b)=>b-a).join(''));
        
        if (min_n === max_n){
            console.log("Invalid");
            break;
        }
        else{
            diff = max_n - min_n;
             // i++;
             i +=1;
             console.log('Step = ', i);
             console.log(min_n, max_n, diff);

            if(diff.toString().length===4){
                n=diff;
            }
            else if(diff.toString().length===3){
                n="0"+diff.toString();
            }
            else if(diff.toString().length===2){
                n="00"+diff.toString();
            }
            else{
                n="000"+diff.toString();
            }

            console.log("Next n=", n);
        }  
    }
}
else{
    console.log("Invalid")
}