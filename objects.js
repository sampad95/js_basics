

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
console.log(person1.personInf())
console.log(person1['age'])
console.log(person1['is Scholar'])  // in that case dot(.) operator does not work

// when object property is asked to user through an input, then dot(.) operator does not work
let input = 'name'
console.log(person1[input]) // no dot operator 



/*
let person1 = {
    name: "Sampad",
    age: 28,
    'is Scholar': true,
    personInf: function() {
        `${this.name} is ${this.age} years old Scholar`
    },
    research: {
        area: "Computational material science",
        topic: "Thermoelectricity",
        exp: "3 years",
    },
}

// console.log(person1.research)
// console.log(person1.research.topic)
console.log(person1.research.topic.length)
// console.log(person1.research.topics.length) // topics does not exist
console.log(person1.research.topics?.length) // ? checks the existence of "topics" and absence is indicated by "undefined"
*/



