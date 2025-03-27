let arr = [2, 5, 9];
arr[5] = 7;

console.log(arr.length);
console.log(arr);
console.log(arr[3]);
console.log(typeof arr);


let arr2 = [1, 2, 3, 4];
delete arr2[2];

console.log(arr2.length);
console.log(arr2);
console.log(arr2[2]);
console.log(typeof arr2);


let count = 0;
let arr3 = [1, 2, 3, 4];
delete arr3[2];

arr3.forEach((item) => count ++);

console.log(arr3.length);  // during length count the empty slot at 2 is taken as undefined element and so the length does not change after delete.
console.log(count); // during incrementation operation the empty slot is skipped and so the value of count is lower than the length.