
/*
let person1 = {
    name: "Sampad",
    age: 28,
    'is Scholar': true,
}

console.log(person1)
console.log(person1.name)
console.log(person1['age'])
console.log(person1['is Scholar'])  // in that case dot(.) operator does not work

// when object property is asked to user through an input, then dot(.) operator does not work
let input = 'name'
console.log(person1[input]) // no dot operator 
*/



let person1 = {
    name: "Sampad",
    age: 28,
    'is Scholar': true,
    research: {
        area: "Computational material science",
        topic: "Thermoelectricity",
        exp: "3 years",
    }
}

console.log(person1.research)
console.log(person1.research.topic)


