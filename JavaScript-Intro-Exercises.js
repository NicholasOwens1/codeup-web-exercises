// let a = 1;
// 1
// let b = a++;
// 1
// let c = ++a;
// 2
//
// a = 1;
// b = 2;
// c = 3;
//
// let d = "hello";
// let e = false;
//
// d++;
// e++;
// d = NaN

// e = 1


// let perplexed;
// perplexed + 2;
// perplexed + 2 = NaN;

// var price = 2.7;
// price.toFixed(2);
// price.toFixed = "2.70";

// let price = "2.7";
// price.toFixed(2);
// error


// isNan(0);
// false
//
// isNan(1);
// false
//
// isNaN("");
// console.log(isNaN(""))
// true
//
// isNaN("string");
// true
//
// isNaN("0");
// false
//
// isNaN("1");
// false
// console.log(isNaN("3.145"));
// false
// console.log(isNaN(Number.MAX_VALUE));
// false
// console.log(isNaN(Infinity));
// false
// console.log(isNaN(true))
// false
// console.log(isNaN("true"));
// true
// console.log(isNaN("false"));
// console.log(isNaN(false));
// false

// console.log(!true);
// false

// console.log(!false);
// true

// console.log(!!true);
// true

// console.log(!!false);
// false

// console.log(!!0);
// false

// console.log(!!-0);
// false

// console.log(!!1);
// true

// console.log(!!-1);
// true

// console.log(!!0.1);
// true

// console.log(!!"hello");
// true

// console.log(!!"");
// false

// console.log(!!'');
// false;

// console.log(!!"false");
// true;

// console.log(!!"0");
// false

// !true
// false
//
// !false
// true
//
// !!true
// true
//
// !!false
// false

// console.log(!!0)
// false

// console.log(!!-0)
// false

// console.log(!!1)
// true

// console.log(!!-1)
// true

// console.log(!!0.1)
//true

// console.log(!!"hello")
// true

// console.log(!!"")
// true


// console.log(!!'')
// true

// console.log(!!"false")
// true

// console.log(!!"0")
// true

// let sample = "Hello Codeup";
//
// console.log(sample.length);
//
// console.log(sample.toLowerCase());
//
// let sampleJoin = `${sample} Students.`
// console.log(sampleJoin);

// console.log(sample.indexOf("c"));
//
// console.log(sample.indexOf("C"));
//
// console.log(sample.indexOf(" "));
//
// console.log(sample.substring(6));
//
//
// costPerDay = 3
// let mermaid = costPerDay * 3;
// let bear = costPerDay * 5;
// let hercules = costPerDay * 1;
// console.log(`The total cost is $${mermaid + bear + hercules}.`)

// let googlePay = 400 * 6;
// let amazonPay = 380 * 4;
// let fbPay = 350 * 10;
//
// let total = googlePay + amazonPay + fbPay;
// let formattedCheck = total.toLocaleString("en-US", {style:"currency", currency:"USD"});
// console.log(formattedCheck);

//
// let full = 25
// let full = false
// let freeTime = true
// let available = !false
//
// let enrolled = true & true
//
//
// let maxClassSize = 30
// let scheduleConflicts = false
// let currentClassSize = 24
// let canEnroll = currentClassSize < maxClassSize && !scheduleConflicts;
//
//

let minCartSize = 2;
let cartSize = 2;
let vipMember = false;
let offerExpired = false;

let canOfferApply = (vipMember || cartSize > minCartSize) && !offerExpired;
console.log(canOfferApply);

// let username = "codeup";
// let password = 'notastrongpassword';
//
//
// let minChar = password.length >= 5;
//
// let noUsername = password.indexOf(username) === -1;
// console.log(noUsername)
//
// let maxUserChar = username.length <=20;
//
// let userLength = username.length;
// let passLength = passowrd.length;
// let firstCharUser = username.substring(0,1);
// let lastCharuser = username.substring((userLength - 1), userLength);
// let firstCharPass = password.substring(0,1);
// let lastCharPass = password.substring((substring((passLength - 1), passLength);
// let hasWhiteSpace = firstCharUser === ' ' && lastCharUser === ' ' && firstCharPass === ' ' lastCharPass ===
//
//let hasWhitespace = firstCharUser === ' ' || lastCharUser === ' ' ||
console.log(hasWhiteSpace);
//





