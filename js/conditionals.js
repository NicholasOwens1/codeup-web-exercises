'use strict';

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// const analyzeColor = color => {
//
//     let choice = color.toString()
//     if (choice === "blue") {
//         return ("the sky is blue")
//     } else if (choice === "green") {
//         return ("grass is green")
//     } else {
//         return (`I do not know anything about ${choice}.`)
//     }
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// let mystery = analyzeColor(randomColor);
// console.log(mystery);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// const analyzeColor = color => {
//
//     let choice = color.toString()
//     switch (color) {
//         case "blue":
//             return ("the sky is blue")
//             break;
//         case "green":
//             return ("grass is green")
//             break;
//         default:
//             return (`I do not know anything about ${choice}.`)
//     }
// }
//
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let getColor = prompt("choose a color");
//
//
// const analyzeColor = color => {

// let choice = color.toString()
// switch (color) {
//     case "blue":
//         return ("the sky is blue")
//         break;
//     case "green":
//         return ("grass is green")
//         break;
//     default:
//         return (`I do not know anything about ${choice}.`)
// }
// }
//
// alert(analyzeColor(getColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// const calculateTotal = (winningNumber, totalAmount) => {
//     switch (winningNumber){
//         case 1:
//             return totalAmount - (.1 * totalAmount)
//             break;
//         case 2:
//             return totalAmount - (.25 * totalAmount)
//             break;
//         case 3:
//             return totalAmount - (.35 * totalAmount)
//             break;
//         case 4:
//             return totalAmount - (.50 * totalAmount)
//             break;
//         case 5:
//             return totalAmount * 0
//             break;
//     }
// }

// console.log(calculateTotal(2, 383));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// let getOriginalPrice = prompt("What's your total bill?");
//
// calculateTotal(luckyNumber, getOriginalPrice);
//
// alert(`Your lucky number is ${luckyNumber}!`);
//
// alert(`Your price before the discount was ${getOriginalPrice}.`);
//
// alert(`Your price after your discount is ${calculateTotal(luckyNumber, getOriginalPrice)}.`);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


const askPermission = answer => {
    let permissionGranted = confirm('Would you like to enter a number?');
    if (permissionGranted === true) {
        let enterNumber = prompt("Please enter a number");
        if (isNaN(enterNumber)

    }

}

// const numQuestion = confirm(`Would you like to enter a number?`);
// if (numQuestion === true) {
//     const enteredNumber = parseFloat(prompt("enter a number"));
//
//     if (isNaN(enteredNumber) === true) {
//         alert("that is not a number");
//     }
//     }
//     if (enteredNumber % 2 === 0) {
//         alert(`${enteredNumber} is an even number`);
//     }
//     else {
//         alert(`${enteredNumber} is an odd number`)
//     }
//     let combined = parseFloat(100) + enteredNumber;
//     alert(`${enteredNumber} plus 100 is ${combined}`);
//
//     if (enteredNumber > 0) {
//         alert(`${enteredNumber} is a positive number.`);
//     }
//     else {
//         alert(`${enteredNumber} is a negative number.`);
// }
//
// }
//
