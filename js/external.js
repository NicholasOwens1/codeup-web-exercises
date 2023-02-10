"strict"
// console.log("Hello from external JavaScript");
// let favColor = prompt("What is your favorite color?");
// alert(`Great! ${favColor} is my favorite color too!`);

// let costPerDay = parseFloat(prompt("How much do the movies cost per day?"));
// let bb = parseInt(prompt("How many days did you keep Brother Bear?"));
// let mermaid = parseInt(prompt("How many days did you keep The Little Mermaid?"));
// let hercules = parseInt(prompt("How many days did you keep Hercules?"));
// let totalMovieCost = (costPerDay * (bb + mermaid + hercules);
//
// let totalMovieCostAndCents = Math.round(totalMovieCost * 100) / 100;
//
// alert(`The total cost of the movies is $${totalMovieCostAndCents}.`)
//

// let googleHourRate = parseFloat(prompt("How much does google pay per hour?"));
// let googleHoursWorked = parseInt(prompt("How many hours did you work for google?"));
// let googlePay = googleHourRate * googleHoursWorked;
//
// let amazonHourRate = parseFloat(prompt("How much does amazon pay per hour?"));
// let amazonHoursWorked = parseFloat(prompt("How many hours did you work for amazon?"));
// let amazonPay = amazonHourRate * amazonHoursWorked;
//
//
// let facebookHourRate = parseFloat(prompt("How much does facebook pay per hour?"));
// let facebookHoursWorked = parseInt(prompt("How many hours did you work for facebook?"));
// let facebookPay = facebookHoursWorked * facebookHourRate;
//
// let totalPay = googlePay + amazonPay + facebookPay;
//
// let formattedCheck = totalPay.toLocaleString("en-US", {style:"currency", currency:"USD"});
//
// alert(`You earned $${formattedCheck} this week`);
//
// let currentClassSize = parseInt(prompt("How many people are in class right now?"));
//
// let scheduleConflicts = false;
//
// let maxClassSize = parseInt(prompt("What is the max class size?"));
//
// let currentClassSize = parseInt(prompt("How many people are in class now?"));
//
// let canEnroll =  !scheduleconflicts && (currentClassSize < maxClassSize);
// alert(`It is ${canEnroll} that the studrnt can enroll in the class.`);
//

let minCartSize = 2;
let cartSize = parseInt(prompt('How many items did you purchase?'));
let premiumMember = confirm('Are you a premium member?');
let offerExpired = confirm("Has the offer expired?");
let eligible = cartSize > minCartSize || premiumMember && !offerExpired;













