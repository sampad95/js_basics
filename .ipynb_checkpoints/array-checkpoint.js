
/*
arr1 = [3, 9, "Sampad", -2, false, function greet(){return "Hello world"}]

console.log(arr1)
console.log(arr1.length)
console.log(arr1[0])
console.log(arr1[2].length)
console.log(arr1[5])
console.log(arr1[5]())
*/




// array methods

/*
// empty array
// arr2 = []
arr2 = new Array()

arr2.push(9, [6, 2], "Sampriti")   // adding elements at the of the empty array
console.log(arr2)
arr2.push(-1, 3)
console.log(arr2)

console.log(arr2.pop())  // pops out the last element and returns that element
console.log(arr2)

console.log(arr2.shift()) // removes the first array element and "shifts" all other elements to a lower index.  returns the value that was "shifted out".
console.log(arr2)

console.log(arr2.unshift(10)) // adds a new element to an array (at the beginning), and "unshifts" older elements.
console.log(arr2)

arr2[1] = [3, 4]  // changing the indexed element
console.log(arr2)

arr2[arr2.length] = -5  // adding element at the end of an array using array length
console.log(arr2)
console.log(arr2.length)

// delete arr2[0]    // leaves undefined holes in the array.
// console.log(arr2)
// console.log(arr2.length)

console.log(arr2.at(1))  // returns an indexed element from an array.
console.log(arr2[1])

console.log(arr2.toString())  // returns an array to a string of (comma separated) array values. orginal array remains unchanged
console.log(typeof((arr2.toString()[0])))
console.log(typeof(arr2[0]))
*/

/*
arr1 = [5, 7, 6, 4, 8, 1]
arr2 = [0, 9]
// console.log(arr1.concat(arr2))
// console.log(arr2.concat(arr1))

// console.log(arr1.splice(2)) // returns removed part from index 2 to end
// console.log(arr1)           // modified array after removal of elements

// console.log(arr1.splice(2, 2)) // returns removed part with next 2 elements from index 2.
// console.log(arr1)          // modified array after removal of elements

// console.log(arr1.splice(2, 3, 7, 5)) // returns removed part with next 3 elements from index 2.
// console.log(arr1)             // modified array after replacement

// arr3 = arr1.toSpliced(2, 2)  // modified array after removal of next 2 elements from index 2
// console.log(arr3)
// console.log(arr1)            // original array remains unchanged

// arr3 = arr1.slice(2)   // return sliced element with elements from index 2 to end
// console.log(arr3)
// console.log(arr1)      // original array remains unchanged

arr3 = arr1.slice(2, 4)   // return sliced element with elements from index 2 to (4-1)
console.log(arr3)
console.log(arr1)      // original array remains unchanged

*/


arr1 = [[1, 3], [2, 4]]
console.log(arr1.flat())         // original array remains unchanged
 
arr2 = [[[1, 3], [2, 4]], [[5, 7], [6, 8]]]
console.log(arr2.flat())
console.log(arr2.flat().flat())
console.log(arr2)                // original array remains unchanged