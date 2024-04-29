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

// for in loop
for(let key in person1){
    console.log(key)
    // console.log(key, person1[key])
}

for(let key in person1.research){
    console.log(key)
    // console.log(key, person1[key])
}
