//! this = reference to the object where THIS is used
//?        (the object depends on the immidiate context)
//*        person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "Hamburger",
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
//! arrow function doesn't work on this. 
const person3 = {
    name: "Shrek",
    favFood: "Melon",
    sayHello: () => {console.log(`Hi! I am ${this.name}`)},
    eat: () => {console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();
person2.eat();
person3.eat();