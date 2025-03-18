
/*
// constructor function
function person(name, age, course, exp){

    this.name = name
    this.age = age
    this.course = course
    this.exp = exp
}

// creation of object by calling the constructor function with 'new' keyword

const person1 = new person("Sampad", 28, "PhD", 3)
const person2 = new person ("Ram", 23, "MSc", 2)

console.log(person1)
// console.log(person1.name)
console.log(person2)
*/


/*
// adding property to an object
person1.nationality = "Indian"
console.log(person1)
console.log(person2)
*/


/*
// addition of property to the constructor function is not possible the way a new property is added
// to an existing object. 
person.nationality = "Indian"
console.log(person1)
console.log(person2)

*/




// To add a new property to a constructor, you must add it to the constructor function:
/*
function person(name, age, course, exp){

    this.name = name
    this.age = age
    this.course = course
    this.exp = exp
    this.nationality = "Indian"

}

const person1 = new person("Sampad", 28, "PhD", 3)
const person2 = new person ("Ram", 23, "MSc", 2)

console.log(person1)
console.log(person2)

*/



function person(name, age, course, exp, nationality){

    this.name = name
    this.age = age
    this.course = course
    this.exp = exp
    this.nationality = nationality

}

const person1 = new person("Sampad", 28, "PhD", 3, "Indian")
const person2 = new person ("Ram", 23, "MSc", 2, "Indian")

console.log(person1)
<<<<<<< HEAD
console.log(person2)
=======
console.log(person2)
>>>>>>> 29ec691 (committed)
