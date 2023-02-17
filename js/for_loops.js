"use strict";

const showMultiplicationalTable = num => {
    for (let times = 1; times <= 10; times++) {
        let equation = num * times;
        console.log(`${num} * ${times} = ${equation}`)
    }
}
showMultiplicationalTable(9);
//
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const tenNums = () => {
    for ( let i = 1; i <= 10; i++) {
    const num = (randomNumber(20,200))
            if (num % 2 === 0) {
            console.log(`${num} is even`)}
        else if (num % 2 !== 0) {
            console.log(`${num} is odd`)}
        }
}
tenNums();

//
// Loop 9 times
//
for(let i = 0; i < 9; i++) {
    let output =  `${i + 1}`;
    // Loop again with i as my declaration. condition is >= 0. decrement
    for(let j = i; j > 0; j--) {
        let repeats = `${i+1}`
        output += repeats
    }
    console.log(output)
}

for(let i = 1; i < 10; i++){
    let output = `${i}`.repeat(i);
    console.log(output)
}
//
//
//
for (let i = 100; i >= 5; i--) {
    if (i % 5 === 0) {
        console.log(i)
    }
}








// console.log(tenNums(randomNumber(20,200)))
