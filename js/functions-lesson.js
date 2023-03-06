"use strict";

// function helloWorld(){
//     alert("Hello World")
// }
// helloWorld();

// const helloWorld = (name) => {
//     let message = `Hello ${name}`
//     return message;
// }
//
// let firstHello = helloWorld("Jason");
// console.log(firstHello);
// let secondHello = helloWorld("Javier");

const highFive = (name1, name2) => `${name1} gives ${name2} a high five`;

let names1 = highFive("jason", "Javier")
console.log(names1);
// alert(secondHello)

//create an arrow fuction isEven(num) that takes an integer as an argument
// it returns true if the integer is even and false if not

const isEven = (num) => {
    let result = num % 2 === 0;
    return result;
}



// or

// const isEven = (num) => % 2 === 0;
// let students = 24;
//
// let evenStudents = isEven(students);
