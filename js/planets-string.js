"use strict";

let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

/**
 * TODO:
 * Convert planetsString to an array, and save it in a variable named
 * planetsArray.
 * console.log planetsArray to check your work
 */
let planetsArray = planetsString.split("|")
console.log(planetsArray);

/**
 * TODO:
 * Create a string with <br> tags between each planet. console.log() your
 * results. Why might this be useful?
 * BONUS:
 * Create another string that would display your planets in an unordered
 * list. You will need an opening AND closing <ul> tags around the entire
 * string, and <li> tags around each planet.
 */
// let weirdString = "Mercury \n Venus \n Earth \n Mars \n Jupiter \n Uranus \n Neptune"
// console.log(weirdString)

// let one = weirdString.split

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomOrderArray = (array) => {
    let addedIndex = randomNumber(1, array.length)
    // new index being created
    for (let i = 1; i < array.length; i++) {
        // loop the same number of times as length of original array
        if (addedIndex.indexOf(array.length) !== -1) {
            console.log(addedIndex.push(randomNumber(1, array.length)))
        }
        // let newRandomNumber = randomNumber(1, array.length)
        // while (array.includes(newRandomNumber)) {
            // loop the same number of times as length of original array
            // let randomIndex = randomNumber(1, array.length)
            // console.log(array.at(randomNumber(1, array.length)))
            //     print as many times as length of original array, indexes will repeat

        }

}
randomOrderArray(planetsArray);


// function arrayOfRandomNumbers = ()


