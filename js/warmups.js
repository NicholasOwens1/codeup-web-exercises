/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

// const convertAddressToObject = (x) => {
//     let
//     let address = x.replace(indexOf(" "), ":")
//     return address
// }
//
// convertAddressToObject("8646 Sunny Oaks")

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

// const people =[
// {name: 'Fernando Mendoza', pets: 1},
// {name: 'Douglas Hirsh', pets: 8},
// {name: 'Kenneth Howell', pets: 2}
// ];
//
// const totalPets = (arrayWithPeopleAndPets) => {
//     set up accumulator variable
    // let totalPets = 0;
    // loop over array, add to accumulator
    // for (let i = 0; i < arrayWithPeopleAndPets.length; i++) {
    //     totalPets += arrayWithPeopleAndPets[i].pets;
    // }
    // return total;
// }

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

const minMax = x => {
    let arrayHolder = [];
    // create array holder
    let smallest = Math.min(...x);
    // give variable to smallest array number
    arrayHolder.push(smallest);
    // put smallest array number into array holder
    let big = Math.max(...x);
    // give variable to biggest array number
    arrayHolder.push(big);
    // push biggest array number to end of array
    return arrayHolder
    //return array with biggest and smallest number in that order
}

console.log(minMax([1]));

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */
const sortDrinksByPrice = drinks => {
    return drinks.sort((a,b) => a.price - b.price);
}

console.log(sortDrinksByPrice([{name: "lime", price: 10}, {name: "lemonade", price: 50}]));


/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */