

// object and object method
// methods are functions stored as object properties

let person1 = {
    name: "Sampad",
    age: 28,
    'is Scholar': true,
    personInf: function() {                                            
        return `${this.name} is ${this.age} years old Scholar`
        // return `${person1.name} is ${person1.age} years old Scholar`
        // console.log(`${this.name} is ${this.age} years old Scholar`)
    },
}

console.log(person1)
console.log(person1.name)
console.log(person1.personInf()) // personInf is method of the object person1. it is a function stored as object property
console.log(person1['age'])
console.log(person1['is Scholar'])  // in that case dot(.) operator does not work

// when object property is asked to user through an input, then dot(.) operator does not work
let input = 'name'
console.log(person1[input]) // no dot operator 



/*
// Creating empty object and then adding properties in it
// let person1 = {}
const person1 = {}
person1.name = "Sampad"
person1.age = 28
person1['is Scholar'] = true
person1.personInf = `${person1.name} is ${person1.age} years old Scholar`
// person1.personInf = `${this.name} is ${this.age} years old Scholar` // this does not work here as this._ is undefined

console.log(person1)
*/

/*
// using new Object()
const person1 = new Object()
person1.name = "Sampad"
person1.age = 28
person1['is Scholar'] = true
person1.personInf = `${person1.name} is ${person1.age} years old Scholar`

console.log(person1)
*/


/*
let person1 = {
    name: "Sampad",
    age: 28,
    'is Scholar': true,
    personInf: function() {
        // return `${this.name} is ${this.age} years old Scholar of ${this.research.area}`
        return `${person1.name} is ${person1.age} years old Scholar of ${person1.research.area}`
    },
    research: {
        area: "Computational material science",
        topic: "Thermoelectricity",
        exp: "3 years",
    },
    // personInf: function() {
    //     // return `${this.name} is ${this.age} years old Scholar of ${this.research.area}`
    //     return `${person1.name} is ${person1.age} years old Scholar of ${person1.research.area}`
    // },
}

console.log(person1.personInf())
// console.log(person1.research)
// console.log(person1.research.topic)
// console.log(person1.research.topic.length)
// console.log(person1.research.topics.length) // topics does not exist
// console.log(person1.research.topics?.length) // ? checks the existence of "topics" and absence is indicated by "undefined"
*/

/*
// deleting object property
const person1 = {
    name: "Sampad",
    age: 28,
    'is Scholar': true,
    personInf: function() {
        return `${this.name} is ${this.age} years old Scholar`
    },
    research: {
        area: "Computational material science",
        topic: "Thermoelectricity",
        exp: "3 years",
        department: "Chemistry",
        university: "Visva-Bharati"
    },
}

console.log(person1)
// delete person1.personInf   // deleting object property
delete person1.research.exp   // deleting object property inside object
console.log(person1)
*/

